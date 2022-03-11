import { getAuth, onAuthStateChanged, signOut, User, UserCredential } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getUserInfo, signIn, updateUserDetails } from "./auth";
import UserDetails from "../models/userDetails";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthContextType = {
  user: User | null;
  userDetails: UserDetails | null;
  isLoggedIn: boolean;
  isDarkMode: boolean | null;
  setViewMode: (isDark: boolean) => void;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  updateUserDetails: (userDetails: UserDetails) => void;
  signOut: () => void;
};

const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [isDarkMode, setMode] = useState<boolean | null>(null)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(null);
      setLoginStatus(false);
      if (user) {
        setUser(user);
        setLoginStatus(true);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      getUserInfo().then((details: UserDetails) => {
        setUserDetails(details);
        setMode(details.darkMode);
      });
    }
  }, [user]);

  const handleViewModeChanges = (isDark: boolean) => {
    setMode(isDark);
    if (userDetails && user) {
      let tempDetails = userDetails;
      tempDetails.darkMode = isDark;
      setUserDetails(tempDetails);
      updateUserDetails(user.uid, tempDetails)
    }
  }

  const value: AuthContextType = {
    user,
    userDetails,
    isLoggedIn,
    isDarkMode,
    setViewMode: (isDark: boolean) => handleViewModeChanges(isDark),
    signIn: (email: string, password: string) => signIn(email, password),
    signUp: (email: string, password: string) => createUser(email, password),
    updateUserDetails: (userDetails: UserDetails) => {
      if (user) {
        updateUserDetails(user.uid, userDetails);
        return
      }
      console.error('No user logged in')
      return;
    },
    signOut: () => {
      setUserDetails(null);
      const auth = getAuth();
      return signOut(auth);
    },
  };

  return <AuthContext.Provider value={value} {...props} />;
};

const useUser = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a AuthContextProvider.`);
  }
  return context;
};

export { useUser, AuthContext, AuthContextProvider };
