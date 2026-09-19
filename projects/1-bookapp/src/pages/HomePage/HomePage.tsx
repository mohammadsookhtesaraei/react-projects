import type { ReactNode } from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

type HomePageProps={};

 const HomePage = ({}:HomePageProps):ReactNode => {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default HomePage;
