import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
// import Navbar from "./Navbar";
import CTA from "./CTA";
import FAQs from "./FAQs";
import { Helmet } from "react-helmet-async";
// import AlertNews from "./AlertNews";
// import Pricing from "./Pricing"

const LandingPage = () => {
  return (
    <div className="font-jakarta">
      <Helmet>
        <title>Kalppo - Empower Learning</title>
        <meta
          name="description"
          content="Your one-stop solution for B2B and B2C EdTech needs. Unlock better learning experiences today with Kalppo's AI solutions."
        />
        <meta
          name="keywords"
          content="EdTech, Learning Platform, B2B Solutions, B2C Education, GATE, GATE-AI, AI"
        />
        <meta name="author" content="Kalppo" />
      </Helmet>

      {/* <AlertNews /> */}
      {/* <Navbar /> */}
        <HeroSection />
      <div className="2xl:px-32">
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
