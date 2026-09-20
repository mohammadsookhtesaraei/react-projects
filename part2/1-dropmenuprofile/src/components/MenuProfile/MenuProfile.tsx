import { useState, type ReactNode } from "react"

import cr7 from "../../assets/images/cr7.webp";

type MenuProfileProps={};

 const MenuProfile = ({}:MenuProfileProps):ReactNode => {
// state
  const [isOpen,setIsOpen]=useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen relative">

      {/* backdrop-z-index-10 */}
      {isOpen&&<div onClick={()=>setIsOpen(false)} className="fixed inset-0 bg-black/30 z-10 cursor-pointer"></div>}

      {/* logo-z-index-20 */}
      <div className="z-20" onClick={()=>setIsOpen(!isOpen)}>
        <img className="w-20 h-20 object-cover  rounded-full border border-gray-600 hover:ring-1 hover:ring-blue-400 hover:ring-offset-1 cursor-pointer hover:shadow-lg transition-all duration-300" src={cr7} alt="cr7" />
      </div>

      {/* menu-with position fixed and animation custom from index.css and z-index-20 */}
     {isOpen&& <div className={`bg-white shadow-md w-full z-20 max-w-75 rounded-2xl overflow-hidden fixed left-[52%] top-[50%]  animate-fade-in`}>
        <div className="p-2 border-b border-b-gray-300 flex flex-col text-center gap-y-2 ">
          <strong className="border-b border-b-gray-400">cr7</strong>
          <small className="text-gray-300">cr7@gmail.com</small>
        </div>
        <ul className=" [&>li]:bg-blue-400 [&>li]:p-2 [&>li]:border-b [&>li]:border-b-gray-300 ">
          <li>my profile</li>
          <li>setting</li>
          <li>log out</li>
        </ul>
      </div>}
    </div>
  );
}

export default MenuProfile;
