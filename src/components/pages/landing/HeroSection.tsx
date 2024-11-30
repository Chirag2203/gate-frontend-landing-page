import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HiArrowUpRight, HiSparkles } from "react-icons/hi2";
import heroBg from "@/assets/heroBg.png";
import Recommended from "./Recommended";
import {motion} from "framer-motion";

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
      className="flex flex-col pt-8 sm:gap-0 gap-4 items-center  lg:mt-4 bg-center bg-no-repeat sm:min-h-screen sm:px-12"
      style={{
        backgroundImage: `url(${heroBg})`, // Set the image as background
      }}
    >
      <button className="button-ai px-4 py-2 sm:mb-2 mb-0 bg-white font-semibold tracking-tigh text-primary">
        <HiSparkles className="text-yellow-500" />
        Personalised with AI
      </button>
      <h1 className="max-w-7xl px-6 text-4xl sm:text-6xl lg:text-7xl text-center font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
        Supercharge your GATE preparation
      </h1>
      <p className="sm:mt-8 sm:text-xl text-md text-center text-neutral-700 max-w-xs sm:max-w-2xl">
        Revise smarter, practice strategically, and conquer  your weak areas with{" "}
        personalised AI guidance.
      </p>
      <div className="flex flex-col gap-2 items-center justify-center my-10">
        <Link to={"/waitlist"}>
          <Button className="rounded-full px-7 bg-gradient-to-b hover:to-primary-dark/50 transition-colors from-primary to-primary-dark text-md py-5">
          Join the waitlist <HiArrowUpRight />
          </Button>
        </Link>
        <p className="text-sm text-gray-500 ">
          Start for FREE. No cards required
        </p>
      </div>
      <Recommended/>
    </motion.div>
  );
};

export default HeroSection;
