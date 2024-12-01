import Footer from "./landing/Footer";
import Navbar from "./landing/Navbar";

const Contact = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-4 sm:px-16 mt-8 sm:mt-12 2xl:px-32 min-h-screen">
        <p className="text-3xl font-bold text-primary">Contact Us</p>
        You may contact us using the information below: <br /> <br />
         Merchant Legal entity
        name: MGSR Technologies <br />
        Registered Address: House No 400, Kunti Kunj, Chira Chas Bokaro JHARKHAND 827013 <br /> 
        Operational Address: House No 400, Kunti Kunj, Chira Chas Bokaro JHARKHAND 827013 <br /> 
        Telephone No: 9632848570 <br />

        E-Mail ID: hello@mentara.xyz
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
