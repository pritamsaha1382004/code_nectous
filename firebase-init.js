// Shared Firebase init + helpers for Code Nectous (client-side).
// Exposes a small API on `window.CN` for non-module scripts (app.js, progress.js, exam.js, account.js).

import { initializeApp, getApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  enableIndexedDbPersistence,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWUIFJNYuUNUq4ZGX-j6bLQzHC_AhU4V8",
  authDomain: "code-nectous.firebaseapp.com",
  projectId: "code-nectous",
  storageBucket: "code-nectous.firebasestorage.app",
  messagingSenderId: "1049658137866",
  appId: "1:1049658137866:web:baaf8c3cbdd95ffa2feef3",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Ensure auth survives reloads (best-effort).
setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.warn("Firebase Auth persistence not available.", err);
});

// Best-effort local cache so progress survives reloads even if the network is flaky.
// (Still syncs to Firestore when online.)
enableIndexedDbPersistence(db).catch(() => {
  // ignore: unsupported browser or multiple tabs
});

const CN = (window.CN = window.CN || {});
CN.firebase = { app, auth, db };

// Backwards-friendly aliases (avoid relying on these in new code).
window.auth = auth;
window.db = db;

CN.defaultProgress = Object.freeze({
  completed: [],
  xp: 0,
  streak: 0,
  maxStreak: 0,
  lastStreak: "",
  badges: [],
  enrolled: [],
  courseProgress: {},
  totalLessons: 0,
  dailyLessons: {},
  examAttempts: {},
});

function buildDefaultProfile(user, { name } = {}) {
  const email = user?.email || "";
  const displayName = (name || user?.displayName || "").trim();
  return {
    name: displayName,
    email,
    avatar: "",
    bio: "",
    college: "",
    department: "",
    passOutYear: "",
    designation: "",
  };
}

function normalizeProgress(raw) {
  const input = raw && typeof raw === "object" ? raw : {};
  const dailyLessons =
    input.dailyLessons && typeof input.dailyLessons === "object" && !Array.isArray(input.dailyLessons)
      ? input.dailyLessons
      : {};
  return {
    completed: Array.isArray(input.completed) ? input.completed : [],
    xp: Number.isFinite(Number(input.xp)) ? Number(input.xp) : 0,
    streak: Number.isFinite(Number(input.streak)) ? Number(input.streak) : 0,
    maxStreak: Number.isFinite(Number(input.maxStreak)) ? Number(input.maxStreak) : 0,
    lastStreak: typeof input.lastStreak === "string" ? input.lastStreak : "",
    badges: Array.isArray(input.badges) ? input.badges : [],
    enrolled: Array.isArray(input.enrolled) ? input.enrolled : [],
    courseProgress: input.courseProgress && typeof input.courseProgress === "object" ? input.courseProgress : {},
    totalLessons: Number.isFinite(Number(input.totalLessons)) ? Number(input.totalLessons) : 0,
    dailyLessons,
    examAttempts: input.examAttempts && typeof input.examAttempts === "object" ? input.examAttempts : {},
  };
}

function userDocRef(uid) {
  return doc(db, "users", uid);
}

CN.getAuthUser = function getAuthUser() {
  return auth.currentUser;
};

let authReadyResolved = false;
let authReadyResolve = null;
CN.authReady = new Promise((resolve) => {
  authReadyResolve = resolve;
});

onAuthStateChanged(auth, (user) => {
  if (!authReadyResolved) {
    authReadyResolved = true;
    authReadyResolve(user || null);
  }
});

CN.ensureUserDoc = async function ensureUserDoc(user, extra = {}) {
  if (!user || !user.uid) return null;

  const ref = userDocRef(user.uid);
  const snap = await getDoc(ref);

  const desiredName = (extra.name || user.displayName || "").trim();
  const desiredPlan = typeof extra.plan === "string" ? extra.plan.trim() : "";

  if (!snap.exists()) {
    const profile = buildDefaultProfile(user, { name: desiredName });
    const docData = {
      uid: user.uid,
      email: user.email || "",
      name: desiredName,
      plan: desiredPlan,
      profile,
      progress: { ...CN.defaultProgress },
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    await setDoc(ref, docData, { merge: true });
    return docData;
  }

  const data = snap.data() || {};
  const patch = {};

  if (user.email && data.email !== user.email) patch.email = user.email;
  if (desiredName && data.name !== desiredName) patch.name = desiredName;
  if (desiredPlan && data.plan !== desiredPlan) patch.plan = desiredPlan;

  const existingProfile = data.profile && typeof data.profile === "object" ? data.profile : null;
  const profileDefaults = existingProfile ? null : buildDefaultProfile(user, { name: desiredName || data.name || "" });
  if (profileDefaults) patch.profile = profileDefaults;

  const existingProgress = data.progress && typeof data.progress === "object" ? data.progress : {};
  const normalized = normalizeProgress(existingProgress);
  const progressPatch = {};
  for (const [key, value] of Object.entries(CN.defaultProgress)) {
    if (existingProgress?.[key] == null) {
      progressPatch[key] = value;
    }
  }
  if (Object.keys(progressPatch).length > 0) patch.progress = progressPatch;

  if (Object.keys(patch).length > 0) {
    patch.updatedAt = serverTimestamp();
    await setDoc(ref, patch, { merge: true });
  }

  return {
    ...data,
    ...patch,
    profile: patch.profile || data.profile || profileDefaults || null,
    progress: { ...normalized, ...(patch.progress || {}) },
  };
};

CN.getUserDoc = async function getUserDoc() {
  await CN.authReady;
  const user = auth.currentUser;
  if (!user) return null;
  return CN.ensureUserDoc(user);
};

CN.saveUserFields = async function saveUserFields(patch) {
  await CN.authReady;
  const user = auth.currentUser;
  if (!user) throw new Error("Not logged in");

  const safePatch = patch && typeof patch === "object" ? patch : {};
  await setDoc(
    userDocRef(user.uid),
    {
      ...safePatch,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
};

CN.saveProfile = async function saveProfile(profilePatch) {
  const patch = profilePatch && typeof profilePatch === "object" ? profilePatch : {};
  await CN.saveUserFields({
    profile: patch,
  });
};

CN.saveProgress = async function saveProgress(progressPatch) {
  await CN.authReady;
  const user = auth.currentUser;
  if (!user) throw new Error("Not logged in");

  const patch = progressPatch && typeof progressPatch === "object" ? progressPatch : {};
  // Write only the `progress` map. Some Firestore rulesets allow updating `progress`
  // but block top-level fields like `updatedAt`, so we avoid touching those here.
  await setDoc(
    userDocRef(user.uid),
    {
      progress: patch,
    },
    { merge: true }
  );
};

CN.subscribeUserDoc = async function subscribeUserDoc(callback) {
  await CN.authReady;
  const user = auth.currentUser;
  if (!user) return () => {};

  const ref = userDocRef(user.uid);
  return onSnapshot(ref, (snap) => {
    callback(snap.exists() ? snap.data() : null);
  });
};

CN.login = async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  await CN.ensureUserDoc(cred.user);
  return cred.user;
};

CN.signup = async function signup({ name, email, password, plan }) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (name) {
    try {
      await updateProfile(cred.user, { displayName: String(name).trim() });
    } catch (e) {
      // ignore profile failures (still create user doc)
    }
  }
  await CN.ensureUserDoc(cred.user, { name, plan });
  return cred.user;
};

CN.sendPasswordReset = async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
};

CN.signOut = async function cnSignOut() {
  await signOut(auth);
};
