import type { ReactNode } from "react"
import type { Book} from "../../types/book-interface";
import { Link } from "react-router-dom";

import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


type BookSliderProps={
  title:string,
  category:string,
  books:Book[]
};

 const BookSlider = ({title,category,books}:BookSliderProps):ReactNode => {

  
  const filtredBooks=books.filter((book)=>book?.categories.some((cat)=>cat === category));
  if(filtredBooks.length ===0){
    return null
  };


  return (
    <div className="mx-w-6xl mx-auto py-16 px-4">
     <h2 className="relative text-xl sm:text-2xl font-semibold text-rose-700 mb-12 inline-block">{title}</h2>
     <Swiper
      modules={[Navigation,Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      autoplay={{
        delay:3000,

      }}
      breakpoints={{
        640:{slidesPerView:2},
         1024:{slidesPerView:4},

      }}
      className="pb-4"
      >
       {filtredBooks.map((book)=>(
      <SwiperSlide key={book.id}>
        <Link to="">
        <div className="bg-white min-h-67.5 shadow-lg rounded-lg p-5 flex flex-col items-center text-center transition-transform duration-300 hover:shadow-2xl">
          <div className="h-auto mb-6">
            <img className="w-42.5 h-50 block bg-red-300" src={book.image} alt={book.title} />
          </div>
          <h3 className="text-lg">{book.title}</h3>
          <p className="text-sm text-gray-600 my-2">{book.author}</p>
          <p className="text-sm text-rose-600">{book.price}</p>
        </div>
        </Link>
      </SwiperSlide>
     ))}
     </Swiper>
    
    </div>
  );
}

export default BookSlider;
