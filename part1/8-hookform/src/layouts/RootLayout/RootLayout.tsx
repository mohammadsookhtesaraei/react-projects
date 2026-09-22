import type { ReactNode } from "react";

import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const RootLayout = (): ReactNode => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
