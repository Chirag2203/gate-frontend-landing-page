import { Button } from "@/components/ui/button";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import heroBg from "@/assets/heroBg.png";
const NotFound = () => {
  return (
    <div className=" h-screen">
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg ">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <div className="flex items-center flex-shrink-0">
                {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
                <span className="text-xl tracking-tight font-bold text-primary">
                  Mentara AI
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="flex flex-col justify-center items-center h-full dark:bg-gray-900 dark:text-gray-300 text-gray-700  pb-24 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`, // Set the image as background
        }}
      >
        <h1 className="text-9xl font-bold mb-4 bg-gradient-to-tr from-primary to-secondary text-transparent bg-clip-text">
          404
        </h1>
        <p className="text-xl mb-8 text-center max-w-xs">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="">
          <Button className="rounded-full px-6 py-5 bg-gradient-to-tr from-primary to-secondary">
            {" "}
            Go to Home <BsArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
