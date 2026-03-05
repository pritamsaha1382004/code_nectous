# Firebase / Firestore setup for Code Nectous

This project now uses **Firebase Authentication (Email/Password)** for login and **Firestore** to store user data (profile, progress, badges, exams).

User state is stored in Firestore under:

```text
users/{uid}
```

## 1. Enable Email/Password sign-in

1. Open Firebase Console → **Authentication** → **Sign-in method**
2. Enable **Email/Password**

## 2. Create Firestore database

1. Firebase Console → **Firestore Database**
2. Create a database (test/production mode is up to you)

## 3. Set Firestore security rules (important)

To allow each user to read/write only their own document, use rules like:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

If your rules are more restrictive, saving progress will fail.

## 4. Run the app

- Open `index.html` using a local server / Live Preview.
- Create an account on `auth.html`.
- Progress, XP, badges, exam attempts, and profile updates are saved to Firestore.

Notes:
- The UI theme may still use `localStorage` for convenience.
- Avatars are stored as Data URLs in Firestore; keep images small (for large images, use Firebase Storage and save the URL in `profile.avatar`).
