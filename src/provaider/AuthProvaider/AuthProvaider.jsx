import React, { createContext, useEffect, useState } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const UserContext = createContext(null);
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const googleProvaider = new GoogleAuthProvider();
  const githubProvaider = new GithubAuthProvider();

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvaider);
  };

  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvaider);
  };

  const createUesr = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      setUser(loggedUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    googleLogin,
    loader,
    githubLogin,
    createUesr,
    loginUser,
    logout,
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvaider;
