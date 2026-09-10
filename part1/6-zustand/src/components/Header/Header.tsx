import type { ReactNode } from "react"
import { useEffect } from "react"
import { useTheme } from "../../store/theme-store"
import clsx from "clsx";
type HeaderProps={};

 const Header = ({}:HeaderProps):ReactNode => {
    const {theme,onToggle}=useTheme();

useEffect(()=>{
const html=document.documentElement;
html.classList.remove("light","dark");
html.classList.toggle(theme)
},[theme])
  return (
    <div className="flex px-16 shadow-md py-4 border-gray-500/30 border">
      <button className={clsx("btn",theme === "light" ? "bg-gray-600" : "bg-gray-400")} onClick={onToggle}>
        {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}

export default Header;
