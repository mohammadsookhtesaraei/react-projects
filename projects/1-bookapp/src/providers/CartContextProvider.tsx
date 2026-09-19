import type { PropsWithChildren } from "react";

import { CartContext } from "../context/CartContext";

type Props = PropsWithChildren;

const CartContextProvider = ({ children }: Props) => {
  return <CartContext value={{}}>{children}</CartContext>;
};
export default CartContextProvider;
