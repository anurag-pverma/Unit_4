import { createContext, useState } from "react";


export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
