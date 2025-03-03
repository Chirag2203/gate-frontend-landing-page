import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "/logo.png";
// import { navItems } from "../../../constants/index.js";
// import { Button } from "@/components/ui/button.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky font-jakarta top-0 z-50 py-3 backdrop-blur-lg px-4 sm:px-16 2xl:px-32">
      <div className="container  mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center flex-shrink-0">
              <img className="h-7 w-7" src={logo} alt="Logo" />
              <span className="text-xl  font-semibold text-primary">
                Kalppo
              </span>
            </div>
          </Link>
          {/* for displaying elements in middle */}
          {/* <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul> */}
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            {/* <Link to={"/pricing"} className="text-primary font-medium">
              Pricing
            </Link> */}
            <Link to={"/our-story"} className="text-primary font-medium">
              Our Story
            </Link>
            {/* <Link to={"/whatsapp"} className="text-primary font-medium">
              WhatsApp
            </Link> */}
            <Link to="/waitlist">
              <button className="button-login px-4 py-2 rounded-full ml-4 font-medium">
                Pricing{" "}
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-4 flex flex-col justify-center items-center gap-4 lg:hidden">
            {/* <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul> */}
            {/* <Link to={"/pricing"} className="text-primary font-medium">
              Pricing
            </Link> */}
            <Link to={"/our-story"} className="text-primary font-medium">
              Out Story
            </Link>
            <Link to={"/whatsapp"} className="text-primary font-medium">
              WhatsApp
            </Link>
            <div className="flex space-x-6 ">
              <Link to="https://app.kalppo.com/signin">
                <button className="button-login px-4 py-2 rounded-full font-medium">
                  Sign in{" "}
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
