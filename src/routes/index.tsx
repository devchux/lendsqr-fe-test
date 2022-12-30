import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout";
import Login from "../pages/auth/login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
