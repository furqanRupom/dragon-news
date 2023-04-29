import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Form, Navigate, useLocation } from "react-router-dom";
import Login from "../pages/Login/Login";
import { CircularProgress } from "@mui/material";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <CircularProgress />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoutes;
