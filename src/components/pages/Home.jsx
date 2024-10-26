import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { RightArrow } from "../icons/menu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  aboutSectAnimation,
  gallerySectAnimation,
  heroAnimation,
} from "../../animation/animations";

const images = [
  "./images/galeri1.jpg",
  "./images/galeri2.jpg",
  "./images/galeri3.jpg",
  "./images/galeri4.jpg",
  "./images/galeri5.jpg",
  "./images/galeri6.jpg",
  "./images/galeri7.jpg",
];

function Home() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    heroAnimation();
    aboutSectAnimation();
    gallerySectAnimation();
  });

  return (
    <PageLayout>
      <Navbar />
      <header className="">
        <div className="relative -mt-4 flex min-h-[670px] justify-center">
          <div className="hero relative flex min-h-[120vh] w-full justify-center bg-[url('/hero-attanwir.jpg')] bg-cover bg-center px-10 py-32 shadow-xl after:absolute after:left-0 after:top-0 after:h-full after:w-full dark:after:bg-black/30 md:block md:min-h-[120vh] md:bg-right-top">
            <div className="hero-title absolute z-20 mt-20 px-5 text-center md:max-w-[60%] md:px-0 md:text-left">
              <h1 className="mb-3 select-none text-4xl font-bold text-light md:text-5xl lg:text-6xl">
                Pondok Pesantren <br />
                <span className="block text-primary md:inline">At-Tanwir</span>
              </h1>
              <h3 className="mb-9 text-2xl font-bold text-light md:text-3xl lg:text-4xl">
                Samarinda, Kalimantan Timur
              </h3>
              <p className="mb-16 mt-5 text-sm text-light md:text-base">
                Menjadi lembaga pendidikan islam dalam pemantapan ilmu, akhlak,
                dan dakwah
              </p>
              <div className="cta">
                <Link
                  to="/"
                  className="cta-register group mr-5 inline-flex items-center border-2 border-primary bg-primary px-4 py-4 text-base font-semibold text-light transition-colors hover:border-white hover:bg-white hover:text-primary md:text-lg"
                >
                  Daftar <RightArrow />
                </Link>
                <Link
                  to="/"
                  className="cta-info group inline-flex items-center border-2 border-white bg-transparent px-4 py-4 text-base font-semibold text-light transition-colors hover:bg-white hover:text-dark md:text-lg"
                >
                  Info Pendaftaran <RightArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* About Section */}
      <section id="about" className="about">
        <div className="mx-auto my-20 flex items-center justify-center text-dark dark:text-light">
          <div>
            <div className="about-title mb-20 text-center">
              <h2 className="small-title text-base font-bold text-primary md:text-lg lg:text-xl">
                Tentang Pondok
              </h2>
              <h1 className="big-title header-underline text-2xl font-semibold uppercase !leading-snug tracking-tight text-dark dark:text-light md:text-3xl xl:text-4xl">
                Pondok Pesantren At-Tanwir
              </h1>
            </div>
            <div className="about-content mx-auto flex w-11/12 flex-col gap-x-20 gap-y-10 md:flex-row lg:w-4/5">
              <div className="image overflow-hidden rounded-xl border border-dark object-cover object-center dark:border-light md:w-1/2 md:rounded-bl-2xl md:rounded-tl-[70px] md:rounded-tr-2xl">
                <img src="./hero-attanwir.jpg" alt="Foto Pondok" />
              </div>
              <div className="about-summary text-base leading-7 md:w-1/2 md:text-lg">
                <p className="text-neutral-600 dark:text-neutral-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque maxime mollitia porro atque veritatis voluptate animi,
                  facilis obcaecati molestias reiciendis ipsam fugit aliquid
                  laudantium iste repellat ex. Animi, omnis commodi.
                </p>
                <Link
                  to="/about"
                  className="about-link group mt-7 inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm font-semibold text-light transition-colors hover:border-white hover:bg-white hover:text-primary dark:border-primary dark:bg-transparent dark:text-primary dark:hover:bg-primary dark:hover:text-light md:text-base"
                >
                  Selengkapnya <RightArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Galerry Section */}
      <section id="gallery" className="gallery">
        <div className="mx-auto my-20 items-center justify-center text-dark dark:text-light md:flex">
          <div>
            <div className="gallery-title mx-auto mb-20 text-center md:w-auto lg:w-2/4">
              <h2 className="small-title text-base font-bold text-primary md:text-lg">
                Galeri Santri
              </h2>
              <h1 className="big-title header-underline text-2xl font-semibold !leading-snug tracking-tight text-dark dark:text-light md:text-3xl xl:text-4xl">
                Kegiatan Santri - Santri <br /> PonPes At-Tanwir
              </h1>
            </div>
            <div className="gallery-content mx-auto grid grid-cols-2 overflow-hidden rounded-2xl md:w-[90vw] md:grid-cols-3 lg:w-[70vw]">
              {images.map((image, i) => (
                <div
                  key={i}
                  className="image-container group m-1 aspect-[3/2] overflow-hidden rounded-md border border-dark shadow-md transition-all duration-500 hover:scale-95 dark:border-light md:aspect-[5/4]"
                >
                  <div
                    className="h-full w-full transition-all duration-500 group-hover:-rotate-12 group-hover:scale-125"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}

export default Home;
