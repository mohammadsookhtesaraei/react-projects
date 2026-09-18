import { useState, type ReactNode } from "react"
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";


 const Header = ():ReactNode => {

  const [isCartOpen,setIsCartOpen]=useState(false);
  const [isMobileOpen,setIsMobileOpen]=useState(false);

  console.log(isCartOpen);

 const handleBackDrop=():void=>{
  setIsCartOpen(false);
  setIsMobileOpen(false)
 };

// just for-right side dive 
 const handleToggelSide=():void=>{
  setIsCartOpen(true);
  setIsMobileOpen(false)
 }

  return (
    <>
    {/* header-start */}
    <header className="grid grid-cols-2 md:grid-cols-3 items-center  shadow-sm px-4 py-2   relative">
      {/* logo */}
      <div className="flex items-center justify-center gap-2 justify-self-start">
       <img className="w-20 h-20 object-cover" src={Logo} alt="franod logo" />
      </div>
      {/* search */}
      <div className="hidden md:block relative w-80 mx-4 justify-self-center">
       <input type="search"
       placeholder="اسم کتاب رو بنویسید"
       className="w-full p-2 rounded-3xl transition border border-gray-200 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
        />
        <FiSearch className="absolute  -top-0.75 left-3 translate-y-1/2 text-2xl text-rose-400"/>
      </div>
      {/* link */}
      <div className="hidden md:flex items-center md:gap-4 justify-self-end">
        <Link to="/" className="hover:text-rose-600">خانه</Link>
        <Link to="/about" className="hover:text-rose-600">درباره ما</Link>
        <Link to="/contact" className="hover:text-rose-600">تماس با ما</Link>

            {/* cart*/}
          <button className="relative flex">
              <FaShoppingCart className="text-2xl hover:text-rose-700"/>
            <span className="absolute -top-5 right-2 bg-rose-700 text-white text-sm rounded-full  size-6 grid place-content-center">
            0
            </span>
          </button>
      </div>
  
      {/* hamburger-menu  z-index-40*/}
      <button className="md:hidden text-2xl justify-self-end z-40 " onClick={()=>setIsMobileOpen(!isMobileOpen)}>
        {isMobileOpen ?  <FaTimes className="text-rose-700 cursor-pointer"/> : <RxHamburgerMenu className="text-rose-700 cursor-pointer"/>}
      </button>
    </header>

    {/* header-end */}
 

 {/* outside header tag */}

    {/* backdrop for menu z-index-30 */}
    {(isMobileOpen || isCartOpen) && <div className="fixed inset-0 bg-black/50 z-30" onClick={handleBackDrop}>
   
    </div>}

    {/* menu for mobile-open from -right-side z-index-50*/}
    <div className={`fixed top-0 right-0 h-full w-80 ${isMobileOpen ? "translate-x-0" :"translate-x-full"}  bg-white shadow-lg transform transition-transform duration-300  z-50`}>
     <div>
       {/* header */}
      <div className="flex justify-between items-center border-b p-4 border-b-gray-300">
       <div className="flex items-center justify-center gap-2 justify-self-start">
       <img className="w-20 h-20 object-cover" src={Logo} alt="franod logo" />
      </div>
       <FaTimes onClick={()=>setIsMobileOpen(false)} className="text-rose-700"/>
      </div>

      {/* menu-link */}
       <div className="flex flex-col">
        <Link to="/" className="hover:text-rose-600 text-[#333] border-b border-b-gray-200 px-4 pt-7  block">خانه</Link>
        <Link to="/about" className="hover:text-rose-600 text-[#333] border-b border-b-gray-200 px-4 pt-7  block">درباره ما</Link>
        <Link to="/contact" className="hover:text-rose-600 text-[#333] border-b border-b-gray-200 px-4 pt-7  block">تماس با ما</Link>

            {/* cart*/}
          <button className="relative flex  mt-7 mx-4 self-end">
              <FaShoppingCart onClick={handleToggelSide} className="text-2xl hover:text-rose-700 cursor-pointer"/>
            <span className="absolute -top-5 right-2 bg-rose-700 text-white text-sm rounded-full  size-6 grid place-content-center">
            0
            </span>
          </button>
      </div>
  
     </div>
    </div>


    {/* menu for cart open from left-side z-index-50*/}
      <div className={`fixed top-0 left-0 h-full w-80 bg-red-400 ${isCartOpen ? "translate-x-0" :"-translate-x-full"} bg-white shadow-lg transform transition-transform duration-300 z-50`}>
     <div>
       {/* header */}
       <div className="flex justify-between items-center border-b border-b-gray-200 p-10">
        <div>سبد خرید شما</div>
        <div> <FaTimes onClick={()=>setIsCartOpen(false)} className="text-rose-700 cursor-pointer"/></div>
       </div>

       {/* add book here */}
       <div></div>
       {/* footer cart-menu */}
       <div className="flex justify-between">
       <button>تکمیل خرید</button>
       <p>قیمت کل <span>0</span></p>
       </div>
     </div>
     </div>
    </>
  );
}

export default Header;
