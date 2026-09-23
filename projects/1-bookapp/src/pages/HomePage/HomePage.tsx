import { useEffect, useState, type ReactNode } from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import BookSlider from "../../components/BookSlider/BookSlider";
import type { Book } from "../../types/book-interface";
import { getAllBooks } from "../../services/bookService";
import Banner from "../../components/Banner/Banner";

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
      <Hero/>
    <BookSlider
                title={"داستان کودک و نوجوانان"}
                category={"داستان کودک و نوجوانان"}
                books={books}
            />
            <BookSlider
                title="کتاب‌های موفقیت و خودیاری"
                category="موفقیت و خودیاری"
                books={books}
            />
            <BookSlider
                title="رمان و داستان خارجی"
                category="داستان خارجی"
                books={books}
            />
            <BookSlider
                title="کتاب‌های علمی تخیلی"
                category="علمی تخیلی"
                books={books}
            />

            <Banner/>
            <BookSlider
                title="کتاب‌های جنایی"
                category="جنایی"
                books={books}
            />
            <BookSlider
                title="کتاب‌های ترسناک"
                category="وحشت"
                books={books}
            />
      

  
    </div>
  );
}

export default HomePage;
