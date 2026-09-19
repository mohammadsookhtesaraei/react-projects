import { useReducer, type PropsWithChildren } from "react";

import { CartContext } from "../context/CartContext";

type Props = PropsWithChildren;
import { initialState,cartReducer } from "../reducers/cart-reducers";
const CartContextProvider = ({ children }: Props) => {
  const [cart,disPatchItem]=useReducer(cartReducer,initialState);



  return <CartContext value={{item:cart.item,disPatchItem}}>{children}</CartContext>;
};
export default CartContextProvider;



