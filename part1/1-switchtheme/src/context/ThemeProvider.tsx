import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// تایپ پروایدر کامپونت کامپوزیشن
type ThemeProviderProps = {
  children: ReactNode;
};

// تایپ استیت تم که میدیم به کاستوم هوک لوکال استوریج  چون جنریک کاستوم هوک
type Theme = "light" | "dark";

// تایپ کانتکس
type ThemeContextType = {
  theme: Theme;
  handleToggleTheme: () => void;
};

// تعریف خود کانتکس
const ThemeContext = createContext<ThemeContextType | null>(null);

// کامپونت کامپوزیشن پرووایدر یا همون رپر
const ThemeProvider = ({ children }: ThemeProviderProps) => {
    // استیت
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");

//   هندلر
  const handleToggleTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

//   یوز افکت هر وقت تم تغییر کرد به تگ اچ تی ام ال به کلاسش دارک یا لایت اضافه کنه
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext value={{ theme, handleToggleTheme }}>{children}</ThemeContext>
  );
};
export default ThemeProvider;

// کاستوم هوک استفاده از کانتکس
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};
