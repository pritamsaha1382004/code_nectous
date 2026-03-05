/**
 * Code Nectous - Backend API (Firebase)
 * Stores user login, progress, and badges in Firebase Firestore.
 *
 * Setup:
 * - Create a Firebase project and Firestore DB.
 * - Create a service account key and set these env vars:
 *   FIREBASE_PROJECT_ID
 *   FIREBASE_CLIENT_EMAIL
 *   FIREBASE_PRIVATE_KEY  (replace newlines with \n)
 *
 * Then run: npm install && npm start
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import admin from 'firebase-admin';

const app = express();
app.use(cors());
app.use(express.json());

// --- Firebase Admin initialization ---
if (!admin.apps.length) {
  const hasServiceAccountEnv =
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY;

  if (hasServiceAccountEnv) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });
    console.log('Firebase Admin initialized with service account env vars.');
  } else {
    // Fallback to application default credentials (e.g. GOOGLE_APPLICATION_CREDENTIALS)
    admin.initializeApp();
    console.warn(
      'Firebase Admin initialized with application default credentials. ' +
        'Make sure GOOGLE_APPLICATION_CREDENTIALS or FIREBASE_* env vars are set.'
    );
  }
}

const db = admin.firestore();
const usersCol = db.collection('users');
const { FieldValue } = admin.firestore;

function serializeUser(doc) {
  if (!doc.exists) return null;
  const data = doc.data() || {};
  return {
    userId: doc.id,
    email: data.email || '',
    name: data.name || data.profile?.name || '',
    plan: data.plan || '',
    profile: data.profile || {},
    progress: data.progress || {},
  };
}

async function findUserByEmail(email) {
  const snap = await usersCol.where('email', '==', email).limit(1).get();
  if (snap.empty) return null;
  const doc = snap.docs[0];
  return { doc, user: serializeUser(doc) };
}

// --- Auth: Signup ---
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password, plan } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    const normalizedEmail = String(email).trim().toLowerCase();

    const existing = await findUserByEmail(normalizedEmail);
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const profile = {
      name: (name || '').trim(),
      email: normalizedEmail,
      avatar: '',
      bio: '',
      college: '',
      department: '',
      passOutYear: '',
      designation: '',
    };

    const userDoc = {
      email: normalizedEmail,
      passwordHash,
      name: (name || '').trim() || undefined,
      plan: (plan || '').trim() || undefined,
      profile,
      progress: {},
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    const ref = await usersCol.add(userDoc);
    const createdSnap = await ref.get();
    const createdUser = serializeUser(createdSnap);

    return res.status(201).json(createdUser);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// --- Auth: Login ---
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    const normalizedEmail = String(email).trim().toLowerCase();

    const found = await findUserByEmail(normalizedEmail);
    if (!found) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const data = found.doc.data() || {};
    const hash = data.passwordHash || '';
    const ok = await bcrypt.compare(password, hash);
    if (!ok) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    return res.json(found.user);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// --- Auth: Forgot password (reset by email + new password) ---
app.post('/api/auth/forgot', async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).json({ error: 'Email and new password required' });
    }
    const normalizedEmail = String(email).trim().toLowerCase();

    const found = await findUserByEmail(normalizedEmail);
    if (!found) {
      return res.status(400).json({ error: 'No account found with this email' });
    }

    const newHash = await bcrypt.hash(newPassword, 10);
    await found.doc.ref.update({
      passwordHash: newHash,
      updatedAt: FieldValue.serverTimestamp(),
    });

    return res.json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// --- Get full user (login info + progress + badges) ---
app.get('/api/users/:id', async (req, res) => {
  try {
    const doc = await usersCol.doc(req.params.id).get();
    const user = serializeUser(doc);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// --- Sync full state to DB (progress, profile, name, plan) ---
app.post('/api/users/:id/state', async (req, res) => {
  try {
    const { progress, profile, name, plan } = req.body;
    const ref = usersCol.doc(req.params.id);
    const snap = await ref.get();
    if (!snap.exists) {
      return res.status(404).json({ error: 'User not found' });
    }

    const current = snap.data() || {};
    const updateData = {};

    if (typeof name === 'string') {
      updateData.name = name;
    }
    if (typeof plan === 'string') {
      updateData.plan = plan;
    }
    if (profile && typeof profile === 'object') {
      updateData.profile = { ...(current.profile || {}), ...profile };
    }
    if (progress && typeof progress === 'object') {
      updateData.progress = { ...(current.progress || {}), ...progress };
    }

    updateData.updatedAt = FieldValue.serverTimestamp();

    await ref.set(updateData, { merge: true });
    const saved = serializeUser(await ref.get());
    return res.json(saved);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
