import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function ThemeBotton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <button
      className={
        darkMode
          ? "btnmode"
          : "btnmode2"
      }
      onClick={handleTheme}
    ><div className={darkMode? "nomoon" : "moon"}></div></button>
  );
}

export default ThemeBotton;