// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD598wjcE1WstWreJ9fULi98aJXZ5CS1Ws",
  authDomain: "contactfirebase-6e4e5.firebaseapp.com",
  projectId: "contactfirebase-6e4e5",
  storageBucket: "contactfirebase-6e4e5.firebasestorage.app",
  messagingSenderId: "108935097416",
  appId: "1:108935097416:web:bf598d64fba31bd9eb7c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);