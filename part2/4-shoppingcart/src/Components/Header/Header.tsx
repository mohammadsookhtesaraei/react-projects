import { useState, type ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

type HeaderProps = {};

const Header = ({}: HeaderProps): ReactNode => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  return (
    <>
      <header className="border-b border-b-gray-300/30 h-15 shadow-md flex items-center  px-8  relative">
        <div className="flex relative">
          <span className="size-5 absolute   bottom-3 left-5 bg-rose-600 grid place-content-center rounded-full text-white text-sm">
            0
          </span>
          <GiShoppingBag
            size={24}
            color="#6a7282"
            className="cursor-pointer"
            onClick={() => setIsOpenCart(!isOpenCart)}
          />
        </div>
      </header>

      {isOpenCart && (
        <div
          className="fixed z-10  inset-0 bg-black/30"
          onClick={() => setIsOpenCart(false)}
        ></div>
      )}

      <div
        className={`fixed z-20 transition-transform duration-300 bg-white w-75 shadow-md ${isOpenCart ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-7 border-b border-b-gray-400/30 flex items-center justify-between">
          <h2 className="text-rose-500 text-lg font-semibold">سبد خرید</h2>
          <div>
             <FaTimes
                onClick={() => setIsOpenCart(false)}
                className="text-rose-700 cursor-pointer"
              />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Header;
