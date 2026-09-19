import { Route, Routes } from "react-router-dom";


import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Contact from "./pages/Contact/Contact";
import NotfoundPage from "./pages/NotfoundPage/NotfoundPage";

import DetailsBook from "./pages/DetailsBook/DetailsBook";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book/:id" element={<DetailsBook />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
};
export default App;
