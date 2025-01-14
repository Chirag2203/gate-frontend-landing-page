import { FaTrophy } from "react-icons/fa6";
import { TbCardsFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import flashcards from "@/assets/flashcards.svg";
import roadmap from "@/assets/roadmap.svg";
import socratic from "@/assets/socratic.svg";
import tests from "@/assets/tests.svg";
import { PiPathDuotone } from "react-icons/pi";
import { LucideFilePen } from "lucide-react";
const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center sm:mt-12 mt-4 px-4 sm:px-16 w-full">
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
        className="flex flex-col items-center"
      >
        <p className="text-primary font-medium text-sm">WHY USE KALPP0</p>
        <p className="sm:text-3xl text-2xl font-bold mt-4 text-center sm:text-left">
          Study Smarter, Not Harder
        </p>
        <p className="sm:text-lg text-neutral-500 mt-4 max-w-xl text-center">
          Turn your revisions into results with AI-powered drills, smart
          flashcards and personalized weak area analysis.
        </p>
      </motion.div>
      <div className="w-full flex sm:flex-row flex-col mt-16 justify-between items-center">
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
          className=" grid md:grid-cols-2 grid-cols-1 items-start sm:gap-32 gap-12"
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
           className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-xl">
                <PiPathDuotone  className="text-white text-2xl" />
              </div>
              <div className="flex flex-col gap-4 items-start">
                <p className="sm:text-2xl text-xl font-semibold ">
                  Roadmap
                </p>
                <p className="text-neutral-500 sm:text-md text-sm ">
                  Turn GATE preparation into an engaging game. Boost your score
                  and let go of your exam anxieties.
                </p>
              </div>
            </div>
            <img src={roadmap} alt="" />
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
           className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-xl">
                <TbCardsFilled className="text-white text-2xl " />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <p className="sm:text-2xl text-xl font-semibold ">
                  Smart Flashcards
                </p>
                <p className="text-neutral-500 sm:text-md text-sm">
                  Revise 2x faster with personalised flashcards. No more looking
                  for notes on the internet.
                </p>
              </div>
            </div>
            <img src={flashcards} alt="" />
          </motion.div>

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
          
          className="flex flex-col  gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-xl">
                <FaTrophy className="text-white text-2xl" />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <p className="sm:text-2xl text-xl font-semibold ">
                  Socratic Learning
                </p>
                <p className="text-neutral-500 sm:text-md text-sm ">
                  Your 24x7 GATE mentor. No more jumping from one resource to
                  another. Get all your doubts cleared.
                </p>
              </div>
            </div>
            <img src={socratic} alt="" />
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
           className="flex flex-col  gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-xl">
              <LucideFilePen  className="text-white text-2xl" />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <p className="sm:text-2xl text-xl font-semibold ">
                  Tests
                </p>
                <p className="text-neutral-500 sm:text-md text-sm ">
                  Turn GATE preparation into an engaging game. Boost your score and let go of your exam anxieties
                </p>
              </div>
            </div>
            <img src={tests} alt="" />
          </motion.div>
        </motion.div>
        {/* <motion.div
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
          className="sm:w-2/5 sm:mt-0 mt-4"
        >
          <img src={loginPic} alt="loginPic" className="w-full" />
        </motion.div> */}
      </div>
    </div>
  );
};

export default FeatureSection;
