// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth from firebase/auth
import { getAnalytics } from "firebase/analytics"; // This is optional, remove if not used

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb9kroywPROp6dmRWqVHBVGaBUeroSW2Q",
    authDomain: "project-cloud-8aa43.firebaseapp.com",
    projectId: "project-cloud-8aa43",
    storageBucket: "project-cloud-8aa43.firebasestorage.app",
    messagingSenderId: "228986751689",
    appId: "1:228986751689:web:f7c6c6a925c829291b1b18",
    measurementId: "G-57LY556TMD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app); // Fix: Export the auth instance

// Optional: Initialize Analytics if you need it
const analytics = getAnalytics(app);
