import type { ReactNode } from "react"

import { NavLink } from "react-router-dom";

import clsx from "clsx"

 const Header = ():ReactNode => {

  return (
    <header className="border-b border-b-gray-300/30 shadow-md">
      <nav className="flex items-center container mx-auto px-4 h-15">
      <ul className="w-full flex items-center justify-between">
      <div className="flex items-center gap-x-2">
          <li>
          <NavLink to="/" className={({isActive})=>clsx(isActive ? "text-blue-400 border-b pb-1" :"text-gray-400-400 border-b pb-1 border-b-transparent")}>home</NavLink>
        </li>
           <li>
          <NavLink to="/dashboard" className={({isActive})=>clsx(isActive ? "text-blue-400 border-b pb-1" :"text-gray-400-400 border-b pb-1 border-b-transparent")}>dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({isActive})=>clsx(isActive ? "text-blue-400 border-b pb-1" :"text-gray-400-400 border-b pb-1 border-b-transparent")}>products</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive})=>clsx(isActive ? "text-blue-400 border-b pb-1" :"text-gray-400-400 border-b pb-1 border-b-transparent")}>about</NavLink>
        </li>
         <li>
          <NavLink to="/auth" className={({isActive})=>clsx(isActive ? "text-blue-400 border-b pb-1" :"text-gray-400-400 border-b pb-1 border-b-transparent")}>login/register</NavLink>
        </li>
      </div>
      <li className="flex items-center relative">
        <NavLink to="/cart" className={({isActive})=>clsx(isActive ? "text-blue-400 border-b pb-1" :"text-gray-400-400 border-b pb-1 border-b-transparent")}>cart</NavLink>
        <span className="size-5 grid place-content-center bg-red-500 text-white rounded-full absolute bottom-3 left-7">0</span>
      </li>
      </ul>
      </nav>
    </header>
  );
}

export default Header;
