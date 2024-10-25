import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const currDarkMode =
    localStorage.getItem("darkMode") === "true" ? true : false;
  const [darkMode, setDarkMode] = useState(currDarkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
