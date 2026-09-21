import { use, useState, type ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { CartContext } from "../../context/cart-context";

type HeaderProps = {};

const Header = ({}: HeaderProps): ReactNode => {

  const { cart, disPatchItem } = use(CartContext);

  // total price
  const totalPrice = cart?.reduce(
    (total, item) =>
      total + (item.qty ?? 0) * +item.price.split(" ")[0].split(",").join(""),
    0,
  );
  // total qty
  const totalqty = cart?.reduce((total, item) => total + (item.qty ?? 0), 0);

  // state cart basket
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <>
      <header className="border-b border-b-gray-300/30 h-15 shadow-md flex items-center  px-8  relative">
        <div className="flex relative">
          <span className="size-5 absolute   bottom-3 left-5 bg-rose-600 grid place-content-center rounded-full text-white text-sm">
            {totalqty}
          </span>
          <GiShoppingBag
            size={24}
            color="#6a7282"
            className="cursor-pointer"
            onClick={() => setIsOpenCart(!isOpenCart)}
          />
        </div>
      </header>
      
      {/* bacldrop */}
      {isOpenCart && (
        <div
          className="fixed z-10  inset-0 bg-black/30"
          onClick={() => setIsOpenCart(false)}
        ></div>
      )}
      
      {/* sidebar */}
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
        <div>
          <div>
            <div>
              {!cart.length ? (
                <p>سبد شما خالیست</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id}>
                      <img
                        className="size-20 object-cover"
                        src={item.image}
                        alt={item.title}
                      />
                      <p>تعداد سفارش : {item.qty}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
            <p className="text-rose-500 flex items-center">
              قیمت نهایی :
              <span className="text-gray-400">
                {" "}
                {totalPrice.toLocaleString()}تومان
              </span>
            </p>
            <button onClick={() => disPatchItem({ type: "clear" })}>
              حذف سبد خرید
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
