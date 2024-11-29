import { Link } from "react-router-dom";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// import { IoLogoWhatsapp } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { HiArrowUpRight } from "react-icons/hi2";
const Footer = () => {
  return (
    <footer className="bg-primary shadow dark:bg-gray-900 text-white mt-12 px-4 sm:px-16 2xl:px-32 ">
      <div className="w-full mx-auto py-4 md:py-8 ">
        <div className="flex sm:flex-row flex-col  sm:items-center sm:justify-between">
          <Link
            to={"/"}
            className="flex justify-between flex-col items-left mb-4 sm:gap-0 gap-2 rtl:space-x-reverse"
          >
            <span className="sm:text-3xl text-xl flex items-baseline font-semibold whitespace-nowrap dark:text-white ">
              Kalppo
             
            </span>
            <p className="text-sm text-gray-200 sm:mt-1  ">
              Making Learning Easy
            </p>
          </Link>
          <div className="flex flex-col sm:items-end gap-4 sm:mt-0 mt-4">
            <ul className="flex flex-col sm:items-end mb-4 gap-4 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400">
              

              <Link to={"/waitlist"}>
                <Button className="bg-white rounded-full hover:border hover:border-white hover:bg-primary text-primary hover:text-white  w-full">
                Join the waitlist <HiArrowUpRight />
                </Button>
              </Link>
              <div className="flex flex-col sm:items-end ">
                <p className="font-medium text-lg  ">Contact us</p>
                <p className="text-gray-100"> hello@kalppo.com</p>
              </div>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="flex sm:items-center items-start">
          <div className="flex sm:gap-8 gap-4 sm:flex-row flex-col">
            <p className="text-sm text-gray-200">
              © {new Date().getFullYear()}  MGSR Technologies{" "}
              <br className="sm:hidden block" /> All rights reserved.
            </p>
            <div className="flex  gap-1 items-end">
              <Link to={"/privacy-policy"}>
                <p className="text-sm text-gray-200 hover:text-white">
                  Privacy Policy{" "}
                </p>
              </Link>
              <LuDot />
              <Link to={"/terms"}>
                <p className="text-sm text-gray-200 hover:text-white">
                  Terms & Conditions
                </p>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:mt-0 mt-2 ml-auto">
            {/* <a href="https://www.instagram.com/mentarahq?igsh=MWNsejVoMXNoamU2bg%3D%3D&utm_source=qr">
              <RiInstagramFill className="text-2xl text-gray-200" />
            </a> */}
            {/* <a href="https://www.youtube.com/@mentaraHQ">
              <FaYoutube className="text-2xl text-gray-200" />
            </a> */}
            <a href=" https://www.linkedin.com/company/kalppo/">
              <FaLinkedin className="text-2xl text-gray-200" />
            </a>
            {/* <a href="https://chat.whatsapp.com/B7GuwSnpxbVBn7IOQtmeGR">
              <IoLogoWhatsapp className="text-2xl text-gray-200" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
