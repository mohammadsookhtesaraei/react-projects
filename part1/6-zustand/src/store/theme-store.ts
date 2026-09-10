import { create } from "zustand";

type Theme="light" | "dark";

type ThemeStore={
    theme:Theme,
    onToggle:()=>void
};



export const useTheme=create<ThemeStore>((set,get)=>({
    theme:"light",
    onToggle:()=>{
        const cuurentTheme=get().theme;
        if(cuurentTheme === "light") {
            set({
                theme:"dark"
            })
        }else {

            set({
                theme:"light"
            })
        }
        
    }
}))