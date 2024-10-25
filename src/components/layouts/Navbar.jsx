import { Link, useLocation } from "react-router-dom";
import ThemeBtn from "../buttons/ThemeBtn";
import { useEffect, useState } from "react";
import MenuBtn from "../buttons/MenuBtn";
import logo from "../../assets/logo.png";

function Navbar() {
  const location = useLocation();
  const links = ["Beranda", "Tentang", "Galeri", "Kontak"];
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    location.pathname !== "/beranda" && setScrolled(true);
  }, []);

  console.log(location.pathname == "/beranda");

  window.onscroll = () => {
    if (location.pathname !== "/beranda") {
      setScrolled(true);
    } else if (window.scrollY > 50 || showMenu) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <nav>
      <div
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-primary px-5 py-4 font-montserrat md:px-10 ${scrolled ? "bg-primary shadow-md dark:bg-[#344e41]" : "bg-transparent"}`}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="inline-block size-10">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <Link
            to="/"
            className="font-montserrat text-2xl font-bold tracking-wider text-secondary dark:text-stone-300 lg:text-3xl"
          >
            At-Tanwir
          </Link>
        </div>
        <div className="hidden flex-row items-center justify-center space-x-10 md:flex">
          {links.map((link, i) => {
            const isActive = location.pathname === `/${link.toLowerCase()}`;
            return (
              <Link
                key={i}
                to={`/${link.toLowerCase()}`}
                className={
                  isActive
                    ? `link-active ${!scrolled ? "text-[#588157] after:border-[#588157]" : ""}`
                    : "link"
                }
              >
                {link}
              </Link>
            );
          })}
          <ThemeBtn />
        </div>
        <div className="flex flex-row gap-3 md:hidden">
          <MenuBtn onClick={() => setShowMenu(!showMenu)} showMenu={showMenu} />
          <div
            className={`menu absolute left-0 right-0 top-16 origin-top text-light transition-transform duration-200 ease-in-out ${
              showMenu ? "" : "scale-y-0"
            }`}
          >
            {links.map((link, i) => (
              <Link
                key={i}
                to={`/${link.toLowerCase()}`}
                className="block border-t-2 border-quaternary bg-primary px-5 py-5 font-semibold hover:bg-tertiary hover:text-neutral-400 dark:border-[#293D33] dark:bg-tertiary dark:hover:bg-quaternary dark:hover:text-stone-700"
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
