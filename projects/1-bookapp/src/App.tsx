import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const DetailsBook = lazy(() => import("./pages/DetailsBook/DetailsBook"));
const Search = lazy(() => import("./pages/Search/Search"));
const NotfoundPage = lazy(() => import("./pages/NotfoundPage/NotfoundPage"));

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<DetailsBook />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;