import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import { HiArrowUpRight } from "react-icons/hi2";
import squares from "@/assets/squares.png";
import { motion } from "framer-motion";
// import Dashboard from "@/assets/dashboard.png";
const CTA = () => {
  return (
    <div
      className="bg-primary mt-24 text-white sm:pb-0  pt-12 items-center flex  flex-col  justify-between bg-center "
      style={{
        backgroundImage: `url(${squares})`, // Set the image as background
      }}
    >
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
        className=" flex flex-col items-center gap-4 px-4 sm:px-16 2xl:px-32 "
      >
        <p className="sm:text-3xl text-2xl max-w-lg  text-center font-semibold">
        Building Future Leaders <br />
        Through Targeted Teaching
        </p>
        <p className=" sm:text-lg text-center max-w-lg">
        Committed to transforming education through personalized instructional tools and innovative learning solutions
        </p>
        <Link to={"/waitlist"}>
          <Button className="rounded-full text-primary px-7 mb-20 mt-2 bg-gradient-to-b hover:to-gray-200 transition-colors from-white to-white text-md py-5">
            Get Started for FREE
            {/* <HiArrowUpRight /> */}
          </Button>
        </Link>
      </motion.div>
      {/* <motion.div
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
        className="sm:w-1/2  px-4"
      >
        <img src={Dashboard} alt="Drills" />
      </motion.div> */}
    </div>
  );
};

export default CTA;
