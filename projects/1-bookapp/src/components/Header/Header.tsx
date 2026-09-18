import type { ReactNode } from "react"

import Logo from "../../assets/images/logo.png";

import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


 const Header = ():ReactNode => {
  return (
    <>
    <header className="grid grid-cols-3 items-center  shadow-sm px-4 py-2   relative">
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
      <div className="hidden md:flex items-center gap-8 justify-self-end">
        <Link to="/" className="hover:text-rose-600">خانه</Link>
        <Link to="/about" className="hover:text-rose-600">درباره ما</Link>
        <Link to="/contact" className="hover:text-rose-600">تماس با ما</Link>
          <button className="flex">
              <FaShoppingCart/>
            <span>
            0
            </span>
          </button>
      </div>
      {/* cart-menu */}
     
    </header>
    </>
  );
}

export default Header;
