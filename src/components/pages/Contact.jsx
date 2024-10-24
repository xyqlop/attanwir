import Footer from "../layouts/Footer";
import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";

function Contact() {
  return (
    <PageLayout>
      <div>
        <Navbar />
        <h1>Contact Page</h1>
      </div>
      <Footer />
    </PageLayout>
  );
}

export default Contact;
