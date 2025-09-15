import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  return !localStorage.getItem("userUID") ? <Outlet /> : <Navigate to="/" />;
};
