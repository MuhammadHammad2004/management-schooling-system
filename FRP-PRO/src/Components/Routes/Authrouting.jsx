import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Authrouting = () => {
  return localStorage.getItem("userUID") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
