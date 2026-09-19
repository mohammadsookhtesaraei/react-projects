import { useEffect, useState, type ReactNode } from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import BookSlider from "../../components/BookSlider/BookSlider";
import type { Book } from "../../types/book-interface";
import { getAllBooks } from "../../services/bookService";

type HomePageProps={};

 const HomePage = ({}:HomePageProps):ReactNode => {

  const [books,setBooks]=useState<Book[]>([]);

  useEffect(()=>{
  const getData=async()=>{
  try {
     const response=await getAllBooks();
     setBooks(response);
  } catch (error) {
    error instanceof Error ?
    console.log(error?.message):
    console.log("unknown Error");;
  }
  };
  getData();
  },[]);

  return (
    <div className="">
      <Header/>
      <Hero/>
      <BookSlider books={books} title="داستان کودک و نوجوانان" category="داستان کودک و نوجوانان"/>
      

      <Footer/>
    </div>
  );
}

export default HomePage;
