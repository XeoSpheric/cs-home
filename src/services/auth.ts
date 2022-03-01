import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { db } from "./firebase";
import UserDetails from "../models/userDetails";

const createUser = async (email: string, password: string) => {
  const auth = getAuth();
  await setPersistence(auth, browserSessionPersistence);
  return createUserWithEmailAndPassword(auth, email, password);
};

const updateUserDetails = async (uid: string, user: UserDetails) => {
  return setDoc(doc(db, "users", uid), {
    ...user,
  });
};

const signIn = async (email: string, password: string) => {
  const auth = getAuth();
  await setPersistence(auth, browserSessionPersistence);
  return signInWithEmailAndPassword(auth, email, password);
};

const getUserInfo = async (): Promise<any> => {
  const user = getAuth().currentUser;
  if (user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    console.warn("There is no user document for user: ", user.uid);
  }
};

export { createUser, getUserInfo, signIn, updateUserDetails };
