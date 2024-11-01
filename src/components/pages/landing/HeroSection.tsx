import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HiArrowUpRight, HiSparkles } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-4">
      <button className="button-ai px-4 py-2 bg-white font-semibold tracking-tigh text-primary">
        <HiSparkles className="text-yellow-500" />
        Personalised with AI
      </button>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
        Supercgarge your GATE preparation
      </h1>
      <p className="mt-8 text-lg text-center text-neutral-700 max-w-4xl">
        Revise smarter, practice strategically, and conqqer your weak areas with{" "}
        <br />
        personalised AI guidance.
      </p>
      <div className="flex flex-col gap-2 items-center justify-center my-10">
        <Link to={"/drills"}>
          <Button className="mr-4 rounded-full px-7 bg-gradient-to-b hover:to-primary-dark/50 transition-colors from-primary to-primary-dark text-md py-5">Get Started <HiArrowUpRight /></Button>
        </Link>
        <p className="text-sm text-gray-500 ">Start for FREE. No cards required</p>
      </div>
    </div>
  );
};

export default HeroSection;
