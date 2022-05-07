import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
export const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <nav
      style={{
        border: "1px solid tomato",
        height: "70px",
        display: "flex",
        justifyContent: "end",
        padding: "10px",
        margin: "10px",
      }}
    >
      <button
        onClick={() => {
          return handleTheme();
        }}
      >
        {theme}
      </button>
    </nav>
  );
};
