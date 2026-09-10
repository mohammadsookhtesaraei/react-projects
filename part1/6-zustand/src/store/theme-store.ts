import { create } from "zustand";

type Theme = "light" | "dark";

type ThemeStore = {
    theme: Theme,
    onToggle: () => void
};



export const useTheme = create<ThemeStore>((set, get) => ({
    theme: "light",
    onToggle: () => {

        // first way
        //   set((state) => ({
        //     theme: state.theme === "light" ? "dark" : "light",
        //   }));

        // second way how to use get
        // گت میاد مقدار استیت در حال حاضر رو میده
        // حواست باشه کلون نمیکنه
        const cuurentTheme = get().theme;
        if (cuurentTheme === "light") {
            set({
                theme: "dark"
            })
        } else {

            set({
                theme: "light"
            })
        }

    }
}))