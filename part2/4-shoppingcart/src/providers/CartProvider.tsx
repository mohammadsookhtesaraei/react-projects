import { useReducer, type PropsWithChildren } from "react";

type Props = PropsWithChildren;

import { initialState, reducerCart } from "../reducers/cart-reducer";
import { CartContext } from "../context/cart-context";

const CartProvider = ({ children }: Props) => {
  const [data, disPatchItem] = useReducer(reducerCart, initialState);
  return (
    <CartContext value={{ cart: data.cart, disPatchItem }}>
      {children}
    </CartContext>
  );
};
export default CartProvider;
