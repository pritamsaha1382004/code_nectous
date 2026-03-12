# Code Nectous 🚀

**Code Nectous** is an interactive programming learning platform where students can study theory, practice coding challenges, track XP and streaks, earn badges, and analyze their resume with AI — all in one place.

## ✨ Features

| Feature | Description |
|---|---|
| 📚 **Structured Courses** | Beginner → Advanced → Master lessons for 6 languages |
| 🎯 **Practice Challenges** | In-browser code editor with instant feedback |
| ⚡ **XP & Streaks** | Earn XP per lesson, maintain daily streaks |
| 🏅 **Badges** | Unlock achievement badges as you progress |
| 🔍 **Browse All Lessons** | Search and filter across all courses from one page |
| 📊 **Progress Dashboard** | Visual charts of your learning journey |
| 📝 **Exam Mode** | Timed quizzes to test your knowledge |
| 🤖 **ATS Resume Analyzer** | Google Gemini AI scores your resume against a job description |
| 👤 **User Accounts** | Firebase-backed auth with profile, plan, and progress sync |

## 🗣️ Supported Languages

- 🐍 Python
- ☕ Java
- 🌐 JavaScript
- ➕ C++
- 🔵 C
- 🗄️ SQL

## 🗂️ Project Structure

```
code_nectous/
├── index.html          # Home / landing page
├── browse.html         # Browse All Lessons (search + filter)
├── python.html         # Python course page
├── java.html           # Java course page
├── javascript.html     # JavaScript course page
├── cpp.html            # C++ course page
├── c.html              # C course page
├── sql.html            # SQL course page
├── progress.html       # Progress dashboard
├── exam.html           # Exam / quiz mode
├── auth.html           # Login & Sign Up
├── account.html        # Account settings
├── about.html          # About page
├── contact.html        # Contact page
├── faq.html            # FAQ page
├── app.js              # Core curriculum data + lesson logic
├── site.js             # Shared UI (header, auth state, etc.)
├── firebase-init.js    # Firebase client SDK initialisation
├── sync.js             # Progress sync to Firebase / backend
├── server.js           # Node.js / Express backend (Firebase Admin)
├── style.css           # Global styles (dark/light theme)
├── assets/             # Images and icons
├── badges/             # Badge image assets
└── pdf/                # Downloadable resources
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- A **Firebase** project with Firestore enabled ([console.firebase.google.com](https://console.firebase.google.com))
- A Firebase **service account** key (for the backend API)
- *(Optional)* A **Google Gemini API** key for the ATS Resume Analyzer

### 1. Clone & install

```bash
git clone https://github.com/pritamsaha1382004/code_nectous.git
cd code_nectous
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
# Edit .env and fill in your Firebase service account values
```

See [Environment Variables](#-environment-variables) below for details.

### 3. Start the backend server

```bash
npm start
# Server runs on http://localhost:4000 by default
```

### 4. Open the frontend

Open `index.html` in your browser (or serve the directory with any static file server):

```bash
npx serve .
```

### 5. (Optional) Configure Gemini AI for the ATS checker

See [`GEMINI_SETUP.md`](GEMINI_SETUP.md) for step-by-step instructions to add your Google Gemini API key via the Account Settings page.

## 🔑 Environment Variables

Copy `.env.example` to `.env` and fill in the values below.

| Variable | Description |
|---|---|
| `FIREBASE_PROJECT_ID` | Your Firebase project ID (e.g. `my-app-12345`) |
| `FIREBASE_CLIENT_EMAIL` | Service account email from your Firebase key JSON |
| `FIREBASE_PRIVATE_KEY` | Service account private key (keep the `\n` line breaks) |
| `PORT` | *(Optional)* Port for the Express server (default: `4000`) |

> **How to get the Firebase service account values:**  
> Firebase Console → Project Settings → Service Accounts → Generate New Private Key.  
> Copy `project_id`, `client_email`, and `private_key` from the downloaded JSON into your `.env`.

## 🔗 Key Pages

| URL | Purpose |
|---|---|
| `index.html` | Home page — course cards, ATS tool, streak stats |
| `browse.html` | Browse & search all lessons across every language |
| `python.html?lesson=py-variables-theory` | Open a specific lesson directly via URL param |
| `progress.html` | Your personal progress dashboard with charts |
| `exam.html` | Timed exam mode |
| `auth.html` | Login / Sign Up |
| `account.html` | Profile, plan, and Gemini API key settings |

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Database / Auth | Firebase Firestore + Firebase Admin SDK |
| AI | Google Gemini API (resume analysis) |
| Fonts | JetBrains Mono, Space Grotesk |

## 📄 License

This project is maintained by [pritamsaha1382004](https://github.com/pritamsaha1382004).  
For questions, reach out at **pritamsaha7120@gmail.com**.
