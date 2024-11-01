import { Button } from "@/components/ui/button";
import Drills from "@/assets/Drills.svg";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import squares from "@/assets/squares.png";
import { motion } from "framer-motion";
const CTA = () => {
  return (
    <div
      className="bg-primary mt-24 text-white sm:pb-0  pt-12 items-center flex sm:flex-row flex-col  justify-between bg-center "
      style={{
        backgroundImage: `url(${squares})`, // Set the image as background
      }}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -40,
          },

          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="sm:w-2/5 flex flex-col items-center sm:items-start gap-4 sm:px-24 px-12 "
      >
        <p className="sm:text-3xl text-2xl sm:text-left text-center font-semibold">
          Your Intelligent Path to GATE Success
        </p>
        <p className=" sm:text-xl sm:text-left text-center">
          Transform your GATE preparation with personalised AI guidance
        </p>
        <Link to={"/drills"}>
          <Button className="rounded-full text-primary px-7 sm:mt-4 mt-0 bg-gradient-to-b hover:to-gray-200 transition-colors from-white to-white text-md py-5">
            Get Started for FREE
            <HiArrowUpRight />
          </Button>
        </Link>
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 40,
          },

          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="sm:w-2/5 sm:mt-0 mt-8 sm:pl-0 pl-8"
      >
        <img src={Drills} alt="Drills" />
      </motion.div>
    </div>
  );
};

export default CTA;
