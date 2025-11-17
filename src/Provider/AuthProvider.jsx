import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import Loader from "../Components/Loader/Loader";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const AuthData = { user, setUser, loading, setLoading };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
