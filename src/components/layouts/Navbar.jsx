import { Link, useLocation } from "react-router-dom";
import ThemeBtn from "../buttons/ThemeBtn";
import { useEffect, useState } from "react";
import MenuBtn from "../buttons/MenuBtn";
import logo from "../../assets/logo.png";

function Navbar() {
  const location = useLocation();
  const links = ["Beranda", "Tentang", "Galeri", "Kontak"];
  const [showMenu, setShowMenu] = useState(false);

  const handleClickOutside = (e) => {
    if (
      !e.target.closest(".menu-btn") &&
      !e.target.closest(".menu") &&
      !e.target.closest(".theme-btn-all")
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    // Cleanup event listener on component unmount or when showMenu changes
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <nav>
      <div className="flex justify-between items-center bg-primary fixed top-0 left-0 right-0 py-4 font-montserrat px-5 md:px-10 shadow-md dark:bg-[#344e41] z-50">
        <div className="flex justify-center items-center gap-2">
          <div className="size-10 inline-block">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <Link
            to="/"
            className="text-2xl lg:text-3xl font-bold font-inter tracking-wider text-secondary dark:text-stone-300"
          >
            At-Tanwir
          </Link>
        </div>
        <div className="hidden md:flex flex-row space-x-10 justify-center items-center">
          {links.map((link, i) => {
            const isActive = location.pathname === `/${link.toLowerCase()}`;
            return (
              <Link
                key={i}
                to={`/${link.toLowerCase()}`}
                className={isActive ? "link-active" : "link"}
              >
                {link}
              </Link>
            );
          })}
          <ThemeBtn />
        </div>
        <div className="md:hidden flex flex-row gap-3">
          <MenuBtn onClick={() => setShowMenu(!showMenu)} showMenu={showMenu} />
          <div
            className={`menu absolute top-16 left-0 right-0   text-light transition-transform duration-200 ease-in-out origin-top  ${
              showMenu ? "" : "scale-y-0"
            }`}
          >
            {links.map((link, i) => (
              <Link
                key={i}
                to={`/${link.toLowerCase()}`}
                className="py-5 block font-semibold border-t-2 border-quaternary px-5 bg-primary dark:bg-tertiary hover:text-neutral-400 hover:bg-tertiary dark:hover:text-stone-700 dark:hover:bg-quaternary dark:border-[#293D33]"
              >
                {link}
              </Link>
            ))}
          </div>
          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
