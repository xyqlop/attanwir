import { useContext, useEffect } from "react";
import { DarkTheme, LightTheme } from "../icons/theme";
import { ThemeContext } from "../../contexts/themeContext";

function ThemeBtn({ className = "" }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // const handleClick = () => {
  //   console.log(darkMode);
  //   setDarkMode(!darkMode);
  //   console.log(darkMode);

  //   localStorage.setItem("darkMode", !darkMode);
  // };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    console.log(darkMode);
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={"theme-btn theme-btn-all" + className}
    >
      {darkMode ? <LightTheme /> : <DarkTheme />}
    </button>
  );
}

export default ThemeBtn;
