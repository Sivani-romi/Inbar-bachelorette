// ============================================================
//  firebase-config.js
//  INSTRUCTIONS: Replace the placeholder values below with
//  your actual Firebase project configuration.
//  See SETUP_GUIDE.md for step-by-step instructions.
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage }    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// 🔥 PASTE YOUR FIREBASE CONFIG OBJECT HERE ↓
const firebaseConfig = {
  apiKey:            "AIzaSyDvCDZZvIzoseRdVbv1ecau9q1-hFf7hPE",
  authDomain:        "inbar-bachelorette.firebaseapp.com",
  projectId:         "inbar-bachelorette",
  storageBucket:     "inbar-bachelorette.firebasestorage.app",
  messagingSenderId: "433390242188",
  appId:             "1:433390242188:web:d8fe0ad0c373ccb9db6ea9"
};

// Initialize Firebase
const app     = initializeApp(firebaseConfig);
const db      = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
