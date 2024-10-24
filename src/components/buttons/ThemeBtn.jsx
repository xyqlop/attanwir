import { useContext } from "react";
import { DarkTheme, LightTheme } from "../icons/theme";
import { ThemeContext } from "../../contexts/themeContext";

function ThemeBtn({ className = "" }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

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
