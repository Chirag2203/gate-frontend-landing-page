// import FeatureSection from "./FeatureSection"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"
// import Pricing from "./Pricing"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        {/* <FeatureSection /> */}
        {/* <Pricing /> */}
        <Footer />
      </div>
    </>
  )
}

export default LandingPage
