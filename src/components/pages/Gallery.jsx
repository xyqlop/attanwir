import Footer from "../layouts/Footer";
import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";

function Gallery() {
  return (
    <PageLayout>
      <div>
        <Navbar />
        <h1>Gallery Page</h1>
      </div>
      <Footer />
    </PageLayout>
  );
}

export default Gallery;
