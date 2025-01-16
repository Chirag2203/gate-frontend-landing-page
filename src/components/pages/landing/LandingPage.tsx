import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import CTA from "./CTA";
import FAQs from "./FAQs";
// import AlertNews from "./AlertNews";
// import Pricing from "./Pricing"

const LandingPage = () => {
  return (
    <div className="">
      {/* <AlertNews /> */}
      <Navbar />
      <div className="2xl:px-32">
      <HeroSection />
      <FeatureSection />
      </div>
      <CTA />
      <FAQs />
      <Footer />
      {/* <Pricing /> */}
    </div>
  );
};

export default LandingPage;
