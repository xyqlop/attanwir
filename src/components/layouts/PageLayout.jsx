import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

function PageLayout({ children }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="main-pattern relative min-h-screen w-full overflow-hidden bg-light px-0 font-montserrat dark:bg-dark">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
