# Changelog

All notable changes to **Code Nectous** are documented here.

---

## [2026-03-08] – Documentation & Configuration Fixes

### Added
- **`README.md`** — The repository had no README file. A full project README was created covering:
  - Project overview and feature list
  - Tech stack (HTML/CSS/JS, Node.js + Express, Firebase Firestore, Firebase Auth, Google Gemini AI)
  - Step-by-step getting started guide (clone → install → configure → run)
  - Firebase project setup guidance (links to existing `firebase.md`)
  - ATS Resume Analyzer setup guidance (links to existing `GEMINI_SETUP.md`)
  - Environment variables reference table
  - Project file/folder structure map
  - Contact information

### Fixed
- **`.env.example`** — The file incorrectly listed a `MONGODB_URI` connection string (for MongoDB), even though the backend (`server.js`) exclusively uses **Firebase Admin SDK**. The file now lists the correct Firebase environment variables:

  | Before | After |
  |---|---|
  | `MONGODB_URI=mongodb+srv://...` | `FIREBASE_PROJECT_ID=your-firebase-project-id` |
  | *(no Firebase vars)* | `FIREBASE_CLIENT_EMAIL=your-service-account@...` |
  | *(no Firebase vars)* | `FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."` |

---

## Previous Changes

### [2026-03-06] – Initial Feature Release (`update feature`)
- Added all project source files:
  - Frontend pages: `index.html`, `auth.html`, `account.html`, `progress.html`, `exam.html`, and language pages (Python, Java, JavaScript, C, C++, SQL)
  - Frontend logic: `app.js`, `firebase-init.js`, `site.js`, `sync.js`, `account.js`, `progress.js`, `exam.js`, `resume-analyzer.js`
  - Stylesheets: `style.css`, `progress.css`, `exam.css`, `resume-analyzer.css`
  - Backend API: `server.js` (Express + Firebase Admin)
  - Static assets: badge images, course videos, PDF cheat sheets, logo
  - Documentation: `firebase.md`, `GEMINI_SETUP.md`
  - Config: `package.json`, `.gitignore`, `.env.example`
