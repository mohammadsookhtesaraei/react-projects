import type { ReactNode } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import RootLayout from "../layouts/RootLayout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import CartPage from "../pages/CartPage/CartPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import { useProfile } from "../hooks/useProfile";

const Router = (): ReactNode => {
    const {data,isPending}=useProfile();


    if(isPending){
      return <p className="flex items-center justify-center h-screen">loading...</p>
    }

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : <AuthPage/>}  />
        <Route path="/dashboard" element={data ? <DashboardPage/> : <Navigate to="/dashboard"/>} />
        <Route path="/admin" element={data?.role === "admin" ? <AdminPage/> :<Navigate to="/"/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
