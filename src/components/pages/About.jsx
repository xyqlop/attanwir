import Footer from "../layouts/Footer";
import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";

function About() {
  return (
    <PageLayout>
      <div className="">
        <Navbar />
        <h1>About Page</h1>
        <p>
          Pondok Pesantren At-tanwir Samarinda adalah lembaga pendidikan Islam
          yang fokus di bidang pendidikan ilmu syari'at agama Islam. berdasarkan
          Manhaj Ahlus Sunnah Wal Jama'ah, yang dalam fiqih bermadzhab Asy
          Syafi'i, dalam Aqidah menganut apa yang dirumuskan oleh Al Imam Abul
          Hasan Al Asy'ari, dalam Tasawwuf menempuh jalan dan Thariqah Al
          'Alawiyah yang didirikan oleh Al Faqih Al Muqaddam Muhammad Bin Ali
          Ba'alawi.
        </p>
        <p>
          Pondok Pesantren At-Tanwir mengajarkan Al Qur'an dan Tajwid serta
          Tafsir dan disiplin-disiplin ilmu yang berkaitan dengan Al Qur'an
          mengajarkan Ilmu Hadits Riwayah dan Diroyah, mengajarkan Ilmu Bahasa
          Arab dan limu Alat lainnya, mengajarkan limu Figh dari Madzhab Al Imam
          Muhammad Bin Idris Asy Syafi'i, Sirah Nabi Muhammad SAW dan Ilmu
          Sejarah, Ilmu Tasawwuf dan banyak lagi disiplin Ilmu lainnya.
        </p>
        <p>
          Pondok Pesantren At-Tanwir juga mendidik para santri untuk berdakwah
          dan mengajar, serta menekankan pentingnya upaya bersuci jiwa dan hati,
          sebagaimana penekanan utama kepada Akhlaq mulia dan berkasih sayang
          kepada sekalian makhluq Allah serta menebar cinta dan rahmat terjemah
          nyata dari Islam yang Rahmatan LII Alamin
        </p>
      </div>
      <Footer />
    </PageLayout>
  );
}

export default About;
