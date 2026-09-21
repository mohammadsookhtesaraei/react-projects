import { type IBook } from "../types/books-interface"


export type TState = IBook & {
    qty?: number
};

export type State = {
    cart: TState[]
};

export const initialState: State = {
    cart: []
};



export type CartAction = { type: "Add_TO_Cart", payload: TState } | { type: "Increase", payload: TState } | { type: "Decrease", payload: TState } | { type: "Remove_Item", payload: TState } | { type: "clear" };

// حواست باشه اول محصول وجود داره یانه بعد محاسبه کن

//  قسمت ری ترن باید کل  اینیشیال استیت رو اسپرید کنی 
// بعد اون ایتم  سبد خرید رو بگیری ازش
// استیت اولیه ابجکت هست پس باید ری ترن کنیم یک ابجکت
// که مقادیر قبلی استیت داخلش وجود داره حتی اگه ایتمی بغیر از سبد خرید وجود نداشته باشه
// دقیقا کل اینشیال استیت ری ترن میشه همون استور کلی


export default (state: State, action: CartAction) => {

    switch (action.type) {
        case "Add_TO_Cart": {
            const isExist = state.cart.find((item) => item.id === action.payload.id);
            if (!isExist) {
                return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
            } else {
                return state;
            }
        }

        case "Increase": {
            const isExist = state.cart.find((item) => item.id === action.payload.id);
            if (isExist) {
                return {
                    ...state,
                    cart: state.cart.map((item) => {
                        if (item.id === action.payload.id) {
                            return { ...item, qty: (item.qty ?? 0) + 1 };
                        } else {
                            return item;
                        }
                    })
                };
            } else {
                return state;
            }
        }

        case "Decrease": {
            const isExist = state.cart.find((item) => item.id === action.payload.id);
            if (isExist) {
                return {
                    ...state,
                    cart: state.cart.map((item) => {
                        if (item.id === action.payload.id) {
                            return { ...item, qty: (item.qty ?? 0) > 0 ? (item.qty ?? 0) - 1 : 0 };
                        } else {
                            return item;
                        }
                    })
                };
            } else {
                return state;
            }
        }

        case "Remove_Item": {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            };
        }

        case "clear": {
            return {
                ...state,
                cart: []
            };
        }

        default: return state;



    }

};