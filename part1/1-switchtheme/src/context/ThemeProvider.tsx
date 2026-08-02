import { createContext,useContext,useEffect, type ReactNode } from "react"


type ThemeProviderProps={
    children:ReactNode
};

type Theme="light" | "dark";

type ThemeContextType={
    theme:Theme,
    handleToggle:()=>void;
};


const ThemeContext=createContext<ThemeContextType | null>(null);


const ThemeProvider = ({children}:ThemeProviderProps) => {
  return (
    <div>
        {children}
    </div>
  )
}
export default ThemeProvider