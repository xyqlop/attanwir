import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Github } from "../icons/sosmeds";

function Footer() {
  return (
    <footer>
      <div className="absolute bottom-0 w-full bg-dark min-h-[30vh] border-t border-neutral-700 text-light dark:bg-neutral-900">
        <div className="flex w-2/3 md:w-full mx-auto flex-col gap-16 md:gap-0 md:flex-row md:justify-between px-10 md:px-40 py-10 mb-5 pb-20">
          <div className="navigation w-full md:w-1/3 flex flex-col gap-1 text-stone-700 ">
            <p className="font-bold text-stone-300 text-xl md:text-lg mb-3">
              Navigasi
            </p>
            <Link to="/beranda" className="hover:underline">
              Beranda
            </Link>
            <Link to="/tentang" className="hover:underline">
              Tentang
            </Link>
            <Link to="/galeri" className="hover:underline">
              Galeri
            </Link>
            <Link to="/kontak" className="hover:underline">
              Kontak
            </Link>
          </div>
          <div className="sosmed w-full md:w-1/3 flex flex-col gap-1 text-stone-700">
            <p className="font-bold text-stone-300 text-xl md:text-lg mb-3">
              Sosmed
            </p>
            <a
              href="https://instagram.com/media._attanwir"
              className="hover:underline inline-flex gap-2 -ml-8"
              target="_blank"
            >
              <Instagram /> Instagram
            </a>
            <a
              href="https://facebook.com/ponpes.tanwir"
              className="hover:underline inline-flex gap-2 -ml-8"
              target="_blank"
            >
              <Facebook /> Facebook
            </a>
            <a
              href="https://youtube.com/@attanwirmedia2739"
              className="hover:underline inline-flex gap-2 -ml-8"
              target="_blank"
            >
              <Youtube /> YouTube
            </a>
          </div>
        </div>
        <div className="w-full text-center m-auto absolute bottom-0 border-t border-neutral-700 py-2 font-inter">
          <p className="text-xs font-light text-gray-500 ">
            Copyright © 2024. All Rights Reserved.
          </p>
          <p className="text-xs font-light text-gray-500 ">
            Made with &#10084; by{" "}
            <span className="inline-flex gap-1">
              <a
                href="https://github.com/xyqlop"
                className="hover:underline text-primary hover:text-blue-400"
                target="_blank"
              >
                xyqlop
              </a>
              <Github />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
