import type { ReactNode } from "react"

import HeroImg from "../../assets/images/hero-1.jpg"


 const Hero = ():ReactNode => {
  return (
    <div className="flex justify-center items-center">
      {/* hero-image-right-side */}
      <div 
      style={{ backgroundImage: `url(${HeroImg})` }}
      className="w-1/2 h-100 bg-center bg-cover bg-no-repeat ">
          
      </div>

    {/* hero-content-left */}
      <div className="w-1/2 h-100 text-cebter p-6 bg-[rgb(188,188,188)] flex flex-col justify-center items-center">
      <h1 className="text-lg font-semibold my-4 sm:text-3xl">بیش از ده هزار کتاب صوتی و متنی</h1>
      <p className="text-sm text-[#333] my-4 sm:text-lg">کتاب های رایگان و پولی</p>
      <button className="px-8 py-2 rounded-full shadow-sm cursor-pointer hover:scale-105 transition-transform duration-200 text-lg text-white bg-linear-to-r from-[#bd1e1e] to-[#940000]">ثبت نام</button>
      </div>
    </div>
  );
}

export default Hero;
