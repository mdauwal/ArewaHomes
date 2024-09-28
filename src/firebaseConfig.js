import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAW1jiBtos9MVvQZ3hQzwErS3X6kn_KUqg",
  authDomain: "arewa-real-estate.firebaseapp.com",
  projectId: "arewa-real-estate",
  storageBucket: "arewa-real-estate.appspot.com",
  messagingSenderId: "421054404713",
  appId: "1:421054404713:web:765ce2eebccacbb0192af8",
  measurementId: "G-7ER7QVHE4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);  // Export Firebase Auth
