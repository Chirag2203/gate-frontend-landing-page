import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import priceBg from "@/assets/price-bg.png";
import { Link } from "react-router-dom";
const PricingCards = () => {
  return (
    <motion.div
      className=""
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
    >
      <section className=" dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
          {/* <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div> */}
          <div className="space-y-8 lg:flex   sm:gap-4 xl:gap-4 lg:space-y-0">
            <div className="flex flex-col sm:w-[400px] w-full justify-between p-6 mx-auto max-w-2xl text-center text-gray-900 bg-white rounded-lg border border-blue-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div>
                <h3 className="mb-2 text-2xl font-semibold text-primary">
                  Basic plan
                </h3>
                <div className="flex justify-center items-baseline my-4">
                  <span className="mr-2 text-4xl font-semibold">Free</span>
                  {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Practice 3 drills per day</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Create 5 Flashcards per day</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>5 doubt resolutions per day</span>
                  </li>
                </ul>
              </div>
              <Link to="/join-waitlist">
               <Button variant={"blueGradient"} className="w-full" >
                  Join the waitlist <MdKeyboardArrowRight />
                </Button></Link>
            </div>
            <div className="flex flex-col sm:w-[400px] w-full justify-between p-6 mx-auto max-w-xl text-center text-gray-900 bg-white rounded-lg border border-blue-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white relative">
              <p
                className="absolute -right-4 sm:-right-6 sm:-top-6 -top-4 h-12 sm:h-16 w-12 sm:w-16 bg-center bg-cover text-white text-center sm:pt-4 pt-2 text-xs font-medium "
                style={{
                  backgroundImage: `url(${priceBg})`, // Set the image as background
                }}
              >
                Save <br /> 50%
              </p>
              <div>
                <h3 className="mb-2 text-2xl font-semibold text-primary">
                  Pro plan
                </h3>
                <div className="flex justify-center items-baseline my-4">
                  <span className="mr-2 text-4xl font-semibold">
                    ₹359 <span className="strike"></span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 line-through text-2xl font-semibold">
                    ₹699
                  </span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Practice 20 drills per day</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Create 15 flashcards per day</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>20 doubt resolutions per day</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Detailed performance reports</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Early access to new features</span>
                  </li>
                </ul>
              </div>
              <div className="w-full flex flex-col -mb-5 gap-1">
               <Link to="/join-waitlist">
               <Button variant={"blueGradient"} className="w-full" >
                  Join the waitlist <MdKeyboardArrowRight />
                </Button></Link>
                <p className="text-xs text-gray-500">
                  (Only for first 100 students)
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:w-[400px] w-fulljustify-between p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-blue-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white relative">
              <p
                className="absolute -right-4 sm:-right-6 sm:-top-6 -top-4 h-12 sm:h-16 w-12 sm:w-16 bg-center bg-cover text-white text-center sm:pt-4  pt-2 text-xs font-medium  "
                style={{
                  backgroundImage: `url(${priceBg})`, // Set the image as background
                }}
              >
                Save <br /> 38%
              </p>
              <div>
                <h3 className="mb-2 text-2xl font-semibold text-primary">
                  Power plan
                </h3>
                <div className="flex justify-center items-baseline my-4">
                  <span className="mr-2 text-4xl font-semibold">
                    ₹799 <span className="strike"></span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 line-through text-2xl font-semibold">
                    ₹1299
                  </span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited practice drills</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited flashcards</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited doubt resolutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Detailed performance reports</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Early access to new features</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Score improvement analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited subject tests </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>3 Full test </span>
                  </li>
                </ul>
              </div>
              <div className="w-full flex flex-col -mb-5 gap-1">
              <Link to="/join-waitlist">
               <Button variant={"blueGradient"} className="w-full" >
                  Join the waitlist <MdKeyboardArrowRight />
                </Button></Link>
                <p className="text-xs text-gray-500">
                  (Only for first 100 students)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PricingCards;
