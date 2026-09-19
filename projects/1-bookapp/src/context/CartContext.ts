import { createContext, type ActionDispatch } from "react";
import type { CartAction, Item } from "../reducers/cart-reducers";

type ContextValue={
item:Item[],
disPatchItem:ActionDispatch<[action:CartAction]>
};



export const CartContext=createContext({} as ContextValue);

