import Footer from "../layouts/Footer";
import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";

function About() {
  return (
    <PageLayout>
      <div>
        <Navbar />
        <h1>About Page</h1>
      </div>
      <Footer />
    </PageLayout>
  );
}

export default About;
