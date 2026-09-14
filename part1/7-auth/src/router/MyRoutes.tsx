import type { ReactNode } from "react";

import { Routes, Route } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import Notfound from "../pages/Notfound/Notfound";

const MyRoutes = (): ReactNode => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};
export default MyRoutes;
