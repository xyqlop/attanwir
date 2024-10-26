import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Github } from "../icons/sosmeds";
import { sosmed, navigation } from "../../assets/data.js";

function Footer() {
  const sosmeds = [Instagram, Facebook, Youtube];

  return (
    <footer>
      <div className="relative -mb-5 min-h-[30vh] w-full border-t border-neutral-700 bg-dark text-light dark:bg-neutral-900">
        <div className="mx-auto mb-5 flex w-2/3 flex-col gap-16 px-10 py-10 pb-20 md:w-full md:flex-row md:justify-between md:gap-0 md:px-40">
          <div className="navigation mr-auto w-full flex-1 gap-1 text-stone-700 md:w-0">
            <p className="mb-3 text-xl font-bold text-stone-300 md:text-lg">
              Navigasi
            </p>

            {navigation.map((nav) => (
              <div key={nav.name}>
                <Link
                  to={nav.href}
                  className="mb-1 inline-block duration-0 hover:text-light hover:underline"
                >
                  {nav.name}
                </Link>
                <br />
              </div>
            ))}
          </div>
          <div className="sosmed mr-auto w-full flex-1 text-stone-700 md:w-0">
            <p className="mb-3 text-xl font-bold text-stone-300 md:text-lg">
              Sosmed
            </p>

            {sosmeds.map((svg, i) => (
              <div key={sosmed[i].name}>
                <a
                  href={sosmed[i].href}
                  className="inline-flex gap-2 duration-0 hover:text-light hover:underline md:-ml-8"
                  target="_blank"
                >
                  {[svg(i), sosmed[i].name]}
                </a>
                <br />
              </div>
            ))}
          </div>
          <div className="contact mr-auto w-full flex-1 gap-3 md:w-0">
            <p className="mb-3 text-xl font-bold text-stone-300 md:text-lg">
              Alamat & Kontak
            </p>
            <p className="mb-3 text-sm">
              Jalan Sendawar RT. 02, Loa Buah Samarinda, <br />
              Kalimantan Timur
            </p>
            <p className="text-sm">
              No. Hp : 0822-1111-1111 <br /> Email : 6XUxH@example.com
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 m-auto w-full border-t border-neutral-700 py-2 text-center font-inter">
          <p className="text-xs font-light text-gray-500">
            Copyright © 2024. All Rights Reserved.
          </p>
          <p className="text-xs font-light text-gray-500">
            Made with &#10084; by{" "}
            <span className="inline-flex gap-1">
              <a
                href="https://github.com/xyqlop"
                className="text-primary hover:text-blue-400 hover:underline"
                target="_blank"
              >
                Rif.
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
