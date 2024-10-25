import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { RightArrow } from "../icons/menu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { homeAnimation } from "../../animation/animations";

function Home() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    homeAnimation();
  });

  return (
    <PageLayout>
      <Navbar />
      <header className="">
        <div className="relative -mt-4 flex min-h-[670px] justify-center">
          <div className="hero relative flex min-h-[120vh] w-full justify-center bg-[url('/hero-attanwir.jpg')] bg-cover bg-center px-10 py-32 after:absolute after:left-0 after:top-0 after:h-full after:w-full dark:after:bg-black/30 md:block md:min-h-[120vh] md:bg-right-top">
            <div className="title absolute z-20 mt-20 px-5 text-center md:max-w-[60%] md:px-0 md:text-left">
              <h1 className="mb-3 select-none text-4xl font-bold text-light md:text-5xl lg:text-6xl">
                Pondok Pesantren <br />
                <span className="block text-primary md:inline">At-Tanwir</span>
              </h1>
              <h3 className="mb-9 text-2xl font-bold text-light md:text-3xl lg:text-4xl">
                Samarinda, Kalimantan Timur
              </h3>
              <p className="mb-16 mt-5 text-sm text-light md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                minima nostrum ipsum est at! Animi et, quos, nulla distinctio
                repellat minus aliquam placeat, repudiandae dicta qui
              </p>
              <div className="cta">
                <a
                  href="#tentang"
                  className="about mr-5 inline-flex items-center border-2 border-primary bg-primary px-4 py-4 text-base font-semibold text-light transition-colors hover:border-white hover:bg-white hover:text-primary md:text-lg"
                >
                  Tentang Kami <RightArrow />
                </a>
                <Link
                  to="/galeri"
                  className="gallery inline-flex items-center border-2 border-white bg-transparent px-4 py-4 text-base font-semibold text-light transition-colors hover:bg-white hover:text-dark md:text-lg"
                >
                  Galeri <RightArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* About Section */}
      <section id="tentang" className="tentang scroll-my-24">
        <div className="mx-auto my-20 flex items-center justify-center text-dark dark:text-light">
          <div className="w-11/12 md:w-2/3">
            <div className="header-underline mb-20 text-center">
              <h2 className="text-3xl font-bold dark:text-primary md:text-4xl">
                Tentang Kami
              </h2>
            </div>
            <div className="content profile mb-10">
              <h3 className="mb-9 text-xl font-bold dark:text-primary md:text-2xl">
                Profil Pesantren
              </h3>
              <div className="space-y-3 text-sm md:space-y-7 md:text-base">
                <p className="">
                  Pondok Pesantren At-tanwir Samarinda adalah lembaga pendidikan
                  islam yang fokus di bidang pendidikan ilmu syari'at agama
                  Islam, berdasarkan Manhaj Ahlus Sunnah Wal Jama'ah, yang dalam
                  fiqih bermadzhab Asy Syafi'i, dalam Aqidah menganut apa yang
                  dirumuskan oleh Al Imam Abdul Hasan Al Asy'ari, dalam Tasawwuf
                  menempuh jalan dan Thariqah Al 'Alawiyah yang didirikan oleh
                  Al Faqih Al Muqaddam Muhammad Bin Ali Ba'alawi.
                </p>
                <p className="">
                  Pondok Pesantren At-Tanwir mengajarkan Al-Qur'an dan Tajwid
                  serta Tafsir dan disiplin-disiplin ilmu yang berkaitan dengan
                  Al-Qur'an, mengajarkan inlu Hadits Riwayah dan Diroyah,
                  mengajarkan ilmu Bahasa Arab dan ilmu Alat lainnya,
                  mengajarkan ilmu Fiqh dari Madzhab Al Imam Muhammad Bin Idris
                  Asy Syafi'i, Sirah Nabi Muhammad SAW dan ilmu Sejarah, Ilmu
                  Tasawwuf dan banyak lagi disiplin ilmu lainnya.
                </p>
                <p className="">
                  Pondok Pesantren At-Tanwir juga mendidik para santri untuk
                  berdakwah dan mengajar, serta menekankan pentingnya upaya
                  bersuci jiwa dan hati, sebagaimana penekanan utama kepada
                  Akhlaq mulia dan berkasih sayang kepada sekalian makhluq Allah
                  serta menebar cinta dan rahmat terjemah nyata dari Islam yang
                  Rahmatan Lil Alamin.
                </p>
              </div>
            </div>
            <div className="content ml-[6%] mt-20 flex w-[80vw] flex-col gap-x-10 gap-y-5 text-center md:-ml-[10%] md:mt-52 md:flex-row">
              <div className="visi flex-1 rounded-lg bg-dark px-5 py-7 dark:bg-neutral-900">
                <h3 className="mb-9 text-xl font-bold text-primary md:text-2xl">
                  Visi
                </h3>
                <p className="text-sm text-light md:text-base">
                  Menjadi lembaga pendidikan islam dalam pemantapan ilmu,
                  akhlak, dan dakwah
                </p>
              </div>
              <div className="misi flex-1 rounded-lg bg-dark px-5 py-7 dark:bg-neutral-900">
                <h3 className="mb-9 text-xl font-bold text-primary md:text-2xl">
                  Misi
                </h3>
                <div>
                  <ol className="list-decimal space-y-2 pl-8 text-start text-sm text-light md:text-base">
                    <li>
                      Membekali santri dengan berbagai disiplin ilmu pengetahuan
                      agama islam.
                    </li>
                    <li>
                      Membentuk karakter santri berakhlak mulia berwawasan luas
                      dan menjadi teladan bagi masyarakat luas.
                    </li>
                    <li>
                      Mempersiapkan para pewaris Nabi dan Rasul dalam
                      melanjutkan syiar dan dakwah
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}

export default Home;
