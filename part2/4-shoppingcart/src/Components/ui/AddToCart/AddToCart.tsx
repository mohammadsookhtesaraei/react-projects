import { use, type ReactNode } from "react";
import type { IBook } from "../../../types/books-interface";
import { CartContext } from "../../../context/cart-context";

type AddToCartProps = {
  book: IBook;
};

const AddToCart = ({ book }: AddToCartProps): ReactNode => {
  const { cart, disPatchItem } = use(CartContext);

  // qty
  const qty = cart.find((item) => item.id === book.id)?.qty || 0;

  // boolean - if there book in [] show  increase and dec button else add
  const data = cart.find((item) => item.id === book.id);

  return (
    <div className="flex items-center gap-x-4 self-end">
      {!data ? (
        <>
          <button
            onClick={() => disPatchItem({ type: "Add_TO_Cart", payload: book })}
            className="bg-blue-400 text-white rounded-md px-4 py-1 hover:scale-105 active:scale-95 transition-transform duration-75"
          >
            add
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => disPatchItem({ type: "Increase", payload: book })}
            className="bg-blue-400 text-white rounded-md px-4 py-1 hover:scale-105 active:scale-95 transition-transform duration-75"
          >
            +
          </button>
          <span className="size-6  p-2 bg-gray-700/30 text-white rounded-md grid place-content-center">
            {qty}
          </span>
          {/* qty=== 0 show remove : show - */}
          {!data.qty ? (
            <button
              onClick={() =>
                disPatchItem({ type: "Remove_Item", payload: book })
              }
              className="bg-blue-400 text-white rounded-md px-4 py-1 hover:scale-105 active:scale-95 transition-transform duration-75"
            >
              remove
            </button>
          ) : (
            <button
              onClick={() => disPatchItem({ type: "Decrease", payload: book })}
              className="bg-blue-400 text-white rounded-md px-4 py-1 hover:scale-105 active:scale-95 transition-transform duration-75"
            >
              -
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default AddToCart;
