import React from "react";
import { createContext } from "react";

//
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const SignUpUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  const UpdateProfile = (user) => {
    updateProfile(user, {
      displayName: user.displayName,
    });
  };

  const singInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };


  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
      SetUser(currentUser)
      setLoading(false);
    })
    return () => {
      unSubscribe();
    };
  }, []);


  const authInfo = {
    user,
    SignUpUser,
    SignOutUser,
    SignInUser,
    UpdateProfile,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
