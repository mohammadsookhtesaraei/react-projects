import type { Book } from "../types/book-interface";

export type Item  =Book & {
   qty?:number
}

type State = {
    item: Item[]
}
export const initialState = {
    item: []
};


export type CartAction = { type: "addItem", payload: Item } | { type: "increase", payload: Item } | { type: "decrease", payload: Item } | { type: "remove", payload: Item } | { type: "clear" };


export const cartReducer = (state: State, action: CartAction) => {
    switch (action.type) {
        case "addItem": {
            const exist = state.item.find((book) => book.id === action.payload.id);
            if (!exist) {
                return {
                    ...state,
                    item: [...state.item, { ...action.payload, qty: 1 }]
                }
            } else {
                return state
            }
        }

        case "increase": {
            const exist = state.item.find((book) => book.id === action.payload.id);
            if (exist) {
                return {
                    ...state,
                    item: state.item.map((item) => {
                        if (item.id === action.payload.id) {
                            return { ...item, qty: (item.qty ?? 0 ) + 1 }
                        } else {
                            return item
                        }
                    })
                }
            } else {
                return state
            }
        }
        case "decrease": {
            const exist = state.item.find((book) => book.id === action.payload.id);
            if (exist) {
                return {
                    ...state,
                    item: state.item.map((item) => {
                        if (item.id === action.payload.id) {
                            return { ...item, qty: (item.qty ?? 0 ) > 0 ? (item.qty ?? 0 ) - 1 : 0 }
                        } else {
                            return item
                        }
                    })
                }
            } else {
                return state
            }
        }

        case "remove": {
            const exist = state.item.find((book) => book.id === action.payload.id);
            if (exist) {
                return {
                    ...state,
                    item: state.item.filter((book) => book.id !== action.payload.id)
                }
            } else {
                return state
            }
        }

        case "clear": {
            return {
                ...state,
                item: []
            }
        }

        default: return state


    }
};