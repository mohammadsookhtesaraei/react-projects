import type { ReactNode } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import Notfound from "../pages/Notfound/Notfound";


import { useProfile } from "../hooks/useProfile";

const MyRoutes = (): ReactNode => {
  
  const { data, isPending } =useProfile()

  

  if (isPending) {
    return (
      <p className="flex items-center justify-center h-screen">loading...</p>
    );
  }

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="admin" element={data && data.data.role ? <AdminPage/>:<Navigate to="/auth"/>} />
        <Route
          path="auth"
          element={data ? <Navigate to="/dashboard"/>  : <AuthPage/> }
        />
        <Route
          path="dashboard"
          element={data ? <DashboardPage/> : <Navigate to="/auth"/> }
        />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};
export default MyRoutes;
