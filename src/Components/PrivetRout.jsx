import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoute;
