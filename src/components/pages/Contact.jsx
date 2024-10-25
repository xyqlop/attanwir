import Footer from "../layouts/Footer";
import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";

function Contact() {
  return (
    <PageLayout>
      <div className="h-[200vh]">
        <Navbar />
        <h1>Contact Page</h1>
        <div className="flex w-screen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6320479306073!2d117.07303137472354!3d-0.553652199440922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df68735eb64a58f%3A0x13a500977e723611!2sPondok%20Pesantren%20At%20Tanwir!5e0!3m2!1sid!2sid!4v1729845392642!5m2!1sid!2sid"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="ml-auto mr-10"
          ></iframe>
        </div>
      </div>
      <Footer />
    </PageLayout>
  );
}

export default Contact;
