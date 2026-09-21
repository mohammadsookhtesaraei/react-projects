import type { ReactNode } from "react"
import Header from "../../Components/Header/Header";
import Products from "../../Components/Products/Products";

type HomeProps={};

 const Home = ({}:HomeProps):ReactNode => {
  return (
    <>
    <Header/>
    <Products/>
    </>
  );
}

export default Home;
