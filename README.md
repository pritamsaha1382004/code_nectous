# Code Nectous 🚀

**Code Nectous** is an interactive programming learning platform that helps you master multiple programming languages through structured lessons, quizzes, and an AI-powered resume analyzer.

## Features

- 📚 **Multi-language courses**: JavaScript, Python, Java, C, C++, and SQL
- 🏆 **Achievement system**: Earn XP, badges, and track your learning streak
- 📝 **Exams & quizzes**: Test your knowledge with language-specific exams
- 📊 **Progress tracking**: Visual progress dashboard synced with Firebase
- 🤖 **AI Resume Analyzer (ATS)**: Powered by Google Gemini to score your resume against job descriptions
- 📄 **PDF downloads**: Download course cheat sheets
- 👤 **User accounts**: Firebase Authentication with profile management

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla)
- **Backend**: Node.js + Express
- **Database**: Firebase Firestore
- **Auth**: Firebase Authentication (Email/Password)
- **AI**: Google Gemini API (for ATS resume analysis)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- A [Firebase](https://console.firebase.google.com/) project with:
  - Email/Password Authentication enabled
  - Firestore Database created
  - A service account key (for the backend server)

### 1. Clone the repository

```bash
git clone https://github.com/pritamsaha1382004/code_nectous.git
cd code_nectous
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in your Firebase service account credentials:

```bash
cp .env.example .env
```

Edit `.env` with your Firebase project details (see [Firebase Setup](#firebase-setup) below).

### 4. Start the server

```bash
npm start
```

The API server runs on `http://localhost:4000` by default.

### 5. Open the app

Open `index.html` in your browser using a local server or Live Preview extension.

## Firebase Setup

See [firebase.md](firebase.md) for detailed Firestore and Authentication setup instructions.

Firestore security rules (recommended):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

## ATS Resume Analyzer Setup

The ATS Score Checker uses Google Gemini AI. See [GEMINI_SETUP.md](GEMINI_SETUP.md) for setup instructions.

## Environment Variables

| Variable | Description |
|---|---|
| `FIREBASE_PROJECT_ID` | Firebase project ID |
| `FIREBASE_CLIENT_EMAIL` | Firebase service account client email |
| `FIREBASE_PRIVATE_KEY` | Firebase service account private key (use `\n` for newlines) |
| `PORT` | Server port (default: `4000`) |

## Project Structure

```
code_nectous/
├── index.html          # Main landing page
├── auth.html           # Login / Sign-up page
├── account.html        # User account & settings
├── progress.html       # Learning progress dashboard
├── exam.html           # Language exam page
├── *.html              # Language course pages (python, java, etc.)
├── app.js              # Main frontend logic
├── firebase-init.js    # Firebase client SDK initialization
├── server.js           # Express backend API
├── style.css           # Global styles
├── assets/             # Images, videos, badges
├── badges/             # Badge image files
└── pdf/                # Downloadable course PDFs
```

## Contact

For questions or support, contact: pritamsaha7120@gmail.com
