import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
});

const db = getFirestore();

export { firebaseApp, db };
