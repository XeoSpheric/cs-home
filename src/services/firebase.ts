import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Stupid thing to get no errors for deployement
const api: string = import.meta.env.VITE_FIREBASE_API as string;
const auth: string = import.meta.env.VITE_FIREBASE_AUTH as string;
const id: string = import.meta.env.VITE_FIREBASE_PROJECT_ID as string;

const firebaseApp = initializeApp({
  apiKey: api,
  authDomain: auth,
  projectId: id,
});

const db = getFirestore();

export { firebaseApp, db };
