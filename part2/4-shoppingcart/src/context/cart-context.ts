import { createContext,type ActionDispatch } from "react";

import type { CartAction, TState } from "../reducers/cart-reducer";


type ContextValue={
    cart:TState[],
    disPatchItem:ActionDispatch<[action:CartAction]>
}


export const CartContext=createContext({} as ContextValue);