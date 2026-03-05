/**
 * Syncs user progress from localStorage to MongoDB.
 * Include this script after site.js / progress.js. Requires API_BASE (server URL).
 */
(function () {
  'use strict';

  const API_BASE = window.CN_API_BASE || (location.protocol + '//' + location.hostname + ':4000');
  const CURRENT_KEY = 'codeacademy_current_user';
  const USER_PREFIX = 'codeacademy_user_';
  const PROFILE_PREFIX = 'codeacademy_profile_';

  const PROGRESS_KEYS = {
    completed: 'codeacademy_completed',
    xp: 'codeacademy_xp',
    streak: 'codeacademy_streak',
    lastStreak: 'codeacademy_last_streak',
    badges: 'codeacademy_badges',
    enrolled: 'codeacademy_enrolled',
    courseProgress: 'codeacademy_course_progress',
    totalLessons: 'codeacademy_total_lessons',
    examAttempts: 'codeacademy_exam_attempts',
  };

  function getCurrentUserLocal() {
    const raw = localStorage.getItem(CURRENT_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function buildProgressState(email) {
    const prefix = USER_PREFIX + email + '_';

    function readJson(baseKey, fallback) {
      const val = localStorage.getItem(prefix + baseKey);
      if (val == null) return fallback;
      try {
        return JSON.parse(val);
      } catch (e) {
        return fallback;
      }
    }

    function readNumber(baseKey, fallback) {
      const val = parseInt(localStorage.getItem(prefix + baseKey), 10);
      return Number.isFinite(val) ? val : fallback;
    }

    function readString(baseKey, fallback) {
      const val = localStorage.getItem(prefix + baseKey);
      return val != null ? val : fallback;
    }

    return {
      completed: readJson(PROGRESS_KEYS.completed, []),
      xp: readNumber(PROGRESS_KEYS.xp, 0),
      streak: readNumber(PROGRESS_KEYS.streak, 0),
      lastStreak: readString(PROGRESS_KEYS.lastStreak, ''),
      badges: readJson(PROGRESS_KEYS.badges, []),
      enrolled: readJson(PROGRESS_KEYS.enrolled, []),
      courseProgress: readJson(PROGRESS_KEYS.courseProgress, {}),
      totalLessons: readNumber(PROGRESS_KEYS.totalLessons, 0),
      examAttempts: readJson(PROGRESS_KEYS.examAttempts, {}),
    };
  }

  function getProfile(email) {
    const key = PROFILE_PREFIX + email;
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    try {
      return JSON.parse(raw) || {};
    } catch (e) {
      return {};
    }
  }

  async function syncUserStateToDb() {
    const user = getCurrentUserLocal();
    if (!user || !user.email) return;
    var userId = user.userId;
    if (!userId) return;

    const progress = buildProgressState(user.email);
    const profile = getProfile(user.email);

    const body = {
      name: user.name,
      plan: user.plan,
      profile: profile,
      progress: progress,
    };

    try {
      const res = await fetch(API_BASE + '/api/users/' + encodeURIComponent(userId) + '/state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.ok && data) {
        localStorage.setItem(CURRENT_KEY, JSON.stringify({
          userId: data.userId,
          email: data.email,
          name: data.name,
          plan: data.plan,
        }));
      }
    } catch (err) {
      console.warn('Sync to DB failed:', err);
    }
  }

  window.syncUserStateToDb = syncUserStateToDb;
})();
