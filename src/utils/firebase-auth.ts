import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// const app = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_API_MESSAGIN_SENDER_ID,
//   appId: process.env.REACT_APP_API_APP_ID,
//   measurementId: process.env.REACT_APP_API_MEASUREMNT_ID,
// });
const firebaseConfig = {
  apiKey: "AIzaSyAhfpTDb5JbiW_ePRI2MYngZIA74tf53ho",
  authDomain: "dev-hellobuild.firebaseapp.com",
  projectId: "dev-hellobuild",
  storageBucket: "dev-hellobuild.appspot.com",
  messagingSenderId: "364010412571",
  appId: "1:364010412571:web:f38698a5dae043b813b6be",
  measurementId: "G-LN29R6PW3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const signUp = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
