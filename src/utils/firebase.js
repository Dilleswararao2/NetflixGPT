// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUCsfdZoowrrVEU1bfFEJCXvLy3WJC5qY",
  authDomain: "netflixgpt-16a35.firebaseapp.com",
  projectId: "netflixgpt-16a35",
  storageBucket: "netflixgpt-16a35.firebasestorage.app",
  messagingSenderId: "528849865966",
  appId: "1:528849865966:web:603b6c74fc8cc82f2177ff",
  measurementId: "G-C9YHNZ17HM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
