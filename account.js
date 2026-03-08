// ========================================
// CODE NECTOUS - ACCOUNT PAGE (FIREBASE)
// ========================================

function redirectToLogin() {
  window.location.href = "auth.html";
}

// ============================
// AVATAR HELPER
// ============================
function applyAvatar(element, avatar) {
  if (!element) return;

  if (avatar) {
    element.style.backgroundImage = `url(${avatar})`;
    element.style.backgroundSize = "cover";
    element.style.backgroundPosition = "center";
    element.textContent = "";
  } else {
    element.style.backgroundImage = "";
    element.textContent = "👤";
  }
}

// ============================
// HEADER + NAVBAR UPDATE
// ============================
function updateHeader(profile = {}, progress = {}) {
  const name = profile.name || "User";
  const email = profile.email || "";
  const avatar = profile.avatar || "";

  const chip = document.getElementById("currentUserChip");
  const mobileAvatar = document.getElementById("mobileAvatar");
  const drawerChip = document.getElementById("drawerUserChip");

  applyAvatar(chip, avatar);
  applyAvatar(mobileAvatar, avatar);
  applyAvatar(drawerChip, avatar);

  const drawerName = document.getElementById("drawerUserName");
  const drawerEmail = document.getElementById("drawerUserEmail");

  if (drawerName) drawerName.textContent = name;
  if (drawerEmail) drawerEmail.textContent = email;

  fillHeaderStats(progress);
}

// ============================
// PROGRESS / XP
// ============================
function fillHeaderStats(progress = {}) {
  const completed = Array.isArray(progress.completed)
    ? progress.completed.length
    : 0;

  const xp = Number(progress.xp) || 0;
  const streak = Number(progress.streak) || 0;
  const maxStreak = Number(progress.maxStreak) || Math.max(0, streak);

  let totalLessons = 0;

  if (progress.courseProgress && typeof progress.courseProgress === "object") {
    totalLessons = Object.values(progress.courseProgress).reduce(
      (sum, item) => sum + (item?.total || 0),
      0
    );
  }

  const percent =
    totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  document.getElementById("completedLessons").textContent = completed;
  document.getElementById("totalLessons").textContent = totalLessons;
  document.getElementById("totalXP").textContent = xp;
  const maxStreakEl = document.getElementById("maxStreak");
  if (maxStreakEl) maxStreakEl.textContent = maxStreak;
  document.getElementById("streak").textContent = streak;

  document.getElementById("overallPercent").textContent = percent + "%";
  document.getElementById("overallProgressFill").style.width = percent + "%";

  const xpEarned = document.getElementById("xpEarned");
  if (xpEarned) xpEarned.textContent = xp;

  const drawerXP = document.getElementById("drawerXP");
  const drawerMaxStreak = document.getElementById("drawerMaxStreak");
  const drawerStreak = document.getElementById("drawerStreak");
  const drawerLessons = document.getElementById("drawerLessons");

  if (drawerXP) drawerXP.textContent = xp;
  if (drawerMaxStreak) drawerMaxStreak.textContent = maxStreak;
  if (drawerStreak) drawerStreak.textContent = streak;
  if (drawerLessons) drawerLessons.textContent = completed;
}

// ============================
// LOGOUT
// ============================
function bindLogout() {
  const logoutBtn = document.getElementById("logoutBtn");
  const drawerLogout = document.getElementById("drawerLogout");

  const logout = async () => {
    try {
      await window.CN.signOut();
    } catch (e) {
      console.error("Logout failed:", e);
    }
    redirectToLogin();
  };

  if (logoutBtn) logoutBtn.addEventListener("click", logout);
  if (drawerLogout) drawerLogout.addEventListener("click", logout);
}

// ============================
// MAIN INIT
// ============================
async function initAccount() {
  if (!window.CN || !window.CN.authReady) {
    console.error("Firebase not loaded");
    redirectToLogin();
    return;
  }

  await window.CN.authReady;

  const user = window.CN.getAuthUser();

  if (!user) {
    redirectToLogin();
    return;
  }

  bindLogout();

  // 🔥 Fetch Firestore user document
  const docData = await window.CN.getUserDoc();

  if (!docData) {
    console.error("User document missing");
    redirectToLogin();
    return;
  }

  const profile = docData.profile || {};
  const progress = docData.progress || {};

  updateHeader(profile, progress);

  // ============================
  // FILL FORM
  // ============================
  document.getElementById("profileName").value = profile.name || "";
  document.getElementById("profileEmail").value = profile.email || "";
  document.getElementById("profileBio").value = profile.bio || "";
  document.getElementById("profileCollege").value = profile.college || "";
  document.getElementById("profileDepartment").value =
    profile.department || "";
  document.getElementById("profilePassOut").value =
    profile.passOutYear || "";
  document.getElementById("profileDesignation").value =
    profile.designation || "";

  const avatarPreview = document.getElementById("avatarPreview");
  const avatarInput = document.getElementById("profileAvatar");
  const removeAvatar = document.getElementById("removeAvatar");

  applyAvatar(avatarPreview, profile.avatar);

  let draftAvatar = profile.avatar || "";

  // ============================
  // AVATAR UPLOAD
  // ============================
  if (avatarInput) {
    avatarInput.addEventListener("change", () => {
      const file = avatarInput.files && avatarInput.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {
        draftAvatar = reader.result;
        applyAvatar(avatarPreview, draftAvatar);
      };

      reader.readAsDataURL(file);
    });
  }

  if (removeAvatar) {
    removeAvatar.addEventListener("click", () => {
      draftAvatar = "";
      avatarInput.value = "";
      applyAvatar(avatarPreview, "");
    });
  }

  // ============================
  // SAVE PROFILE
  // ============================
  const form = document.getElementById("accountForm");
  const status = document.getElementById("accountStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const updatedProfile = {
      name: document.getElementById("profileName").value.trim(),
      email: user.email,
      avatar: draftAvatar,
      bio: document.getElementById("profileBio").value.trim(),
      college: document.getElementById("profileCollege").value.trim(),
      department: document.getElementById("profileDepartment").value.trim(),
      passOutYear: document.getElementById("profilePassOut").value.trim(),
      designation: document
        .getElementById("profileDesignation")
        .value.trim(),
    };

    try {
      await window.CN.saveProfile(updatedProfile);

      status.hidden = false;
      status.textContent = "Saved";

      setTimeout(() => {
        status.hidden = true;
      }, 1200);
    } catch (err) {
      console.error(err);
      status.hidden = false;
      status.textContent = "Save failed";
    }
  });

  // ============================
  // LIVE FIRESTORE LISTENER
  // ============================
  await window.CN.subscribeUserDoc((newDoc) => {
    if (!newDoc) return;

    const newProfile = newDoc.profile || {};
    const newProgress = newDoc.progress || {};

    updateHeader(newProfile, newProgress);
  });
}

// ============================
// START
// ============================
document.addEventListener("DOMContentLoaded", initAccount);