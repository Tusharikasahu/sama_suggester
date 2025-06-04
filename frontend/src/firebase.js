// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYcR3OSEX1zCD9LPvfb3WRLQNlMtPBGZ0",
  authDomain: "sama-suggester.firebaseapp.com",
  projectId: "sama-suggester",
  storageBucket: "sama-suggester.appspot.com", // fixed typo
  messagingSenderId: "224396654021",
  appId: "1:224396654021:web:f7d127c536c74f9fbf87ac",
  measurementId: "G-CGSWBML6DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
