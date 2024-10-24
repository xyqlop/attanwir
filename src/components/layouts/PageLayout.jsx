import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

function PageLayout({ children }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="main-pattern w-full min-h-screen bg-light dark:bg-dark font-montserrat pt-20 relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
