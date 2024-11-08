import Footer from "./Footer"
import Navbar from "./Navbar"
import heroBg from "@/assets/heroBg.png";
const OurStory = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center px-4 sm:px-14 2xl:px-32 min-h-screen gap-8 bg-center bg-no-repeat"
       style={{
        backgroundImage: `url(${heroBg})`, // Set the image as background
      }}>
      <p className="max-w-7xl px-6 py-2 text-4xl sm:text-6xl lg:text-7xl text-center font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Our Story</p>

      <p className="text-2xl font-bold text-primary">Coming soon!</p>
    </div>
    <Footer/>
    </div>
  )
}

export default OurStory
