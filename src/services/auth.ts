import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { db } from "./firebase";
import UserDetails from "../models/userDetails";

const createUser = async (user: UserDetails, email: string, password: string) => {
  const auth = getAuth();
  await setPersistence(auth, browserSessionPersistence);
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((err: any) => {
    console.error(err.message);
    return null;
  });
  if (userCredential) {
    await setDoc(doc(db, "users", userCredential.user.uid), {
      ...user,
    });
  }
};

const updateUserDetails = async (uid: string, user: UserDetails) => {
  await setDoc(doc(db, "users", uid), {
    ...user,
  }).catch((err) => {
    console.error(err.message);
  })
}

const signIn = async (email: string, password: string): Promise<void> => {
  const auth = getAuth();
  await setPersistence(auth, browserSessionPersistence);
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((err: any) => {
    console.error(err.message);
  });
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



type SignInOptions = {
  email?: string;
  password?: string;
};

export { createUser, getUserInfo, signIn, updateUserDetails };
