import { use, useEffect, useState, type ReactNode } from "react"
import { useParams } from "react-router-dom";
import { getAllBooks } from "../../services/bookService";
import type { Book } from "../../types/book-interface";
import axios from "axios";
import { HashLoader } from "react-spinners";
import Header from "../../components/Header/Header";
import { CartContext } from "../../context/CartContext";

import { motion,AnimatePresence } from "framer-motion"
import { FaBook, FaStar } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { TbWritingSign } from "react-icons/tb";


type DetailsBookProps={};

 const DetailsBook = ({}:DetailsBookProps):ReactNode => {
  // context
  const {disPatchItem,item}=use(CartContext);
  console.log(item);
// param
  const {id}=useParams();
  // state ui handling
  const [books,setBooks]=useState<Book[]>([]);
  const [isLoading,setIsLoading]=useState(false);
  const [isError,setIsError]=useState<string | null>(null);


  const book=books.find((book)=>book.id === id!);


  useEffect(()=>{
  const getData=async()=>{
    setIsLoading(true);
  try {
     const response=await getAllBooks();
     setBooks(response);
  } catch (error) {
  if(axios.isAxiosError(error)){
    setIsError(error.response?.data.message ||"Failed to fetch books")
  }else {
    console.log("Unknown error");
  }
  }finally {
    setIsLoading(false)
  }
  };
  getData();
  },[]);

  if(isLoading){
    return (
      <div className="flex items-center justify-center min-h-dvh">
        <HashLoader color="#f43f5e" />
      </div>
    )
  }

  if(isError){
    return (
      <div className="flex items-center justify-center min-h-dvh">
         <p className="text-rose-400 text-xl">{isError}</p>
      </div>
    )
  }

  if(!book) {
    return <h2 className="text-rose-500 text-2xl">کتابی یافت نشد</h2>
  }
  return (
    <>
      <Header/>
      <div className="max-w-5xl mx-auto">
        {/* details book */}
       <AnimatePresence mode="wait">
        <motion.div key={book.id}
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-40}}
        transition={{duration:0.4 ,ease:"easeInOut"}}
        className="flex flex-col md:flex-row gap-6 bg-linear-to-br from-white to-indigo-50 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto"
        >
       <img className="w-56 block rounded-xl object-cover shadow-lg md:w-64" src={book.image} alt={book.title} />
       <div className="flex-1">
        <h1>{book.title}</h1>
            <div className='flex items-center gap-2 text-lg'>
              <TbWritingSign className='text-red-700' />
              نویسنده: {book.author}
            </div>

            <div className='flex items-center gap-2 text-lg'>
              <BiSolidCategory className='text-red-700' />
              دسته‌بندی: {book.categories.join("، ")}
            </div>

            <div className='flex items-center gap-2 text-lg'>
              <FaBook className='text-red-700' />
              ناشر: {book.publisher}
            </div>

            <div className='flex items-center gap-2 text-lg'>
              <FaStar className='text-yellow-500' />
              امتیاز: {book.rating}
            </div>
              <button
              onClick={() => disPatchItem({type:"addItem",payload:book})}
              className="bg-linear-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform w-full md:w-auto"
            >
              افزودن به سبد خرید
            </button>
       </div>
        </motion.div>
       </AnimatePresence>


       {/* related book */}
       
      </div>
    </>
  );
}

export default DetailsBook;
