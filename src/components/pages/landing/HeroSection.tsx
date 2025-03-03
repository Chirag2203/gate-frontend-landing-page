import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HiArrowUpRight, HiSparkles } from "react-icons/hi2";
// import heroBg from "@/assets/heroBg.png";
// import Recommended from "./Recommended";
import { motion } from "framer-motion";
import landingPhone from "@/assets/landingPhone.png";
import squares from "@/assets/squares.png";

const HeroSection = () => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col  pt-8 sm:gap-0 gap-4 items-start  bg-center bg-no-repeat sm:min-h-screen sm:px-12 m-4 rounded-3xl  bg-primary "
    // style={{ backgroundImage: `url(${heroBg})` }}

    >
      <img src={squares} alt="" className="absolute bottom-0 w-1/2 right-0" />
      <img src={squares} alt="" className="absolute -top-64 -left-52" />
      <div className="flex items-center gap-2 justify-between w-full px-4 sm:text-xl text-lg text-white mb-12">
       <Link to={"/"}>  <p className="sm:text-2xl text-xl font-semibold">Kalppo</p></Link>
        <div className="flex items-center gap-4 ">
          <Link to="/"><p className=" cursor-pointer">Home</p></Link>
         <Link to={"/waitlist"}> <p className=" cursor-pointer">Pricing </p></Link>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-4 items-center justify-between w-full px-4 sm:px-4">
        <div className="sm:w-1/2 w-full flex flex-col gap-8 sm:items-start items-center">
          <button className="button-ai px-4 py-2 sm:mb-2 mb-0 bg-primary font-semibold tracking-tigh text-white w-fit">
            <HiSparkles className="text-yellow-500" />
            Personalised with AI
          </button>
          <p className="text-4xl sm:text-7xl flex flex-col gap-4 font-semibold  text-white sm:text-left text-center sm:items-start items-center">
            <p>Supercharge your </p>
           <p> Teaching Impact</p>
          </p>
          <p className="text-xl sm:text-2xl text-white font-light sm:text-left text-center">Personalized instructional strategies to deliver complex concepts, overcome student learning barriers, and maximize your classroom outcomes</p>
          <Link to={"/waitlist"}>
            <Button className="bg-white text-primary rounded-full hover:bg-gray-100 hover:text-primary" size={"lg"}>

              Experience Now

              <HiArrowUpRight />
            </Button>
          </Link>
        </div>
        <div className="mb-4 sm:mt-0 mt-8">
          <img
            src={landingPhone}
            alt="phone"
            className=""
          />

        </div>
      </div>


    </motion.div>
  );
};

export default HeroSection;



{/* <h1 className="max-w-7xl px-6 text-4xl sm:text-6xl lg:text-7xl text-center font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
        Supercharge your GATE preparation
      </h1>
      <p className="sm:mt-8 sm:text-xl text-md text-center text-neutral-700 max-w-xs sm:max-w-2xl">
        Revise smarter, practice strategically, and conquer  your weak areas with{" "}
        personalised AI guidance.
      </p>
      <div className="flex flex-col gap-2 items-center justify-center my-10">
        <Link to={"https://app.kalppo.com/signup"} target="_blank">
          <Button className="rounded-full px-7 bg-gradient-to-b hover:to-primary-dark/50 transition-colors from-primary to-primary-dark text-md py-5">
          Signup <HiArrowUpRight />
          </Button>
        </Link>
        <p className="text-sm text-gray-500 ">
          Start for FREE. No cards required
        </p>
      </div>
      <Recommended/> */}