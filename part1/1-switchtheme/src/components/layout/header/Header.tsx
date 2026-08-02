import styles from "./Header.module.css"

import { useTheme } from "../../../context/ThemeProvider"

const Header = () => {

  const {theme,handleToggleTheme}=useTheme();

const handleButtonClick=()=>{
  handleToggleTheme();
};



  return (
    <header className={styles.header}>
     <p>{theme}</p>
         <button onClick={handleButtonClick}>

            {theme === "light"
                ? "🌙 Dark"
                : "☀️ Light"}

        </button>
    </header>
  )
}
export default Header