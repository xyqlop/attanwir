import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { RightArrow } from "../icons/menu";

function Home() {
  return (
    <PageLayout>
      <Navbar />
      <main className="min-h-[200vh]">
        <div className="-mt-4 min-h-[670px] flex justify-center relative">
          <div className="px-10 py-20 w-full min-h-[120vh] md:min-h-screen  bg-[url('/hero-attanwir.jpg')] relative bg-center md:bg-right-top bg-cover after:absolute after:top-0 after:left-0 after:w-full after:h-full dark:after:bg-black/30 flex justify-center md:block">
            <div className="md:max-w-[60%] z-20 mt-20 px-5 md:px-0 absolute text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold select-none text-light mb-3">
                Pondok Pesantren{" "}
                <span className="text-primary block md:inline">At-Tanwir</span>
              </h1>
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-light font-bold mb-9">
                Samarinda, Kalimantan Timur
              </h3>
              <p className="mt-5 text-sm md:text-base text-light mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                minima nostrum ipsum est at! Animi et, quos, nulla distinctio
                repellat minus aliquam placeat, repudiandae dicta qui
              </p>
              <div className="cta">
                <Link
                  to="/tentang"
                  className="font-semibold text-base md:text-lg text-light py-4 px-4 border-2 border-primary bg-primary hover:border-white hover:bg-white hover:text-primary transition-colors inline-flex items-center mr-5"
                >
                  Tentang Kami <RightArrow />
                </Link>
                <Link
                  to="/galeri"
                  className="font-semibold text-base md:text-lg text-light py-4 px-4 border-2 border-white bg-transparent hover:bg-white hover:text-dark transition-colors inline-flex items-center"
                >
                  Galeri <RightArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
}

export default Home;
