import { useEffect, useReducer, type PropsWithChildren } from "react";

type Props = PropsWithChildren;

import reducerCart, {
  initialState,
  type State,
} from "../reducers/cart-reducer";
import { CartContext } from "../context/cart-context";

// توی لوکال استوریح هم همینطور چون ردیوس هست
//  می گیم اگه چیزی وجود داره
// ری ترن کن یک ابجکت جدید
// کل اینیشیال استیت داخلش اسپرید میکنیم
// بعد ایتم رو مقادرش رو از لوکال استوریج میدیم

// اگرم خالی بود لوکال همون  استیت اولیه بره توی ردیوسر

const initial = (): State => {
  const storage = localStorage.getItem("storage");
  if (storage) {
    return {
      ...initialState,
      cart: JSON.parse(storage),
    };
  }

  return initialState;
};

const CartProvider = ({ children }: Props) => {
  const [data, disPatchItem] = useReducer(reducerCart, initial());

  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(data.cart));
  }, [data.cart]);
  return (
    <CartContext value={{ cart: data.cart, disPatchItem }}>
      {children}
    </CartContext>
  );
};
export default CartProvider;
