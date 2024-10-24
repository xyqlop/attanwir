import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <PageLayout>
      <Navbar />
      <main className="h-[200vh]">
        <div className="-mt-4 h-[670px] flex justify-center">
          <div className="px-10 py-20 w-full bg-[url('/hero-attanwir.jpg')] relative bg-left-top bg-cover after:absolute after:top-0 after:left-0 after:w-full after:h-full dark:after:bg-black/30">
            <div className="max-w-[60%] z-20 mt-20 absolute">
              <h1 className="text-4xl font-bold select-all text-light mb-9">
                Selamat Datang Di PonPes At-Tanwir <br /> Samarinda Kalimantan
                Timur
              </h1>
              <p className="mt-5 text-base text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                minima nostrum ipsum est at! Animi et, quos, nulla distinctio
                repellat minus aliquam placeat, repudiandae dicta qui dolore
                facere sequi ratione labore incidunt tempore fuga illum
                cupiditate. Dolorum enim, consequuntur quidem illum, nemo est
                facilis, ab nisi nostrum tempore voluptas vero.
              </p>
            </div>
            <div className="cta"></div>
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
}

export default Home;
