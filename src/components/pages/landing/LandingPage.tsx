import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import CTA from "./CTA";
import FAQs from "./FAQs";
import AlertNews from "./AlertNews";
// import Pricing from "./Pricing"

const LandingPage = () => {
  return (
    <>
      <AlertNews />
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <FeatureSection />
      </div>
      <CTA />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <FAQs />
      </div>
      <Footer />
      {/* <Pricing /> */}
    </>
  );
};

export default LandingPage;
