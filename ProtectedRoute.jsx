import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  return isAuth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
