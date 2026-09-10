import { create } from "zustand";


type CounterStore = {
    count: number,
    increment: () => void;
    decrement: () => void
};


export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    num:0,

    increment: () => {
        set((state) => ({
            count: state.count + 1
        }))
    },
    decrement: () => {
        set((state) => ({
            count: state.count > 0 ? state.count - 1 : 0
        }))
    }
}));