import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-semibold">
        Your Gateway to <span className="text-primary">IITs</span> & <span className="text-primary">PSUs</span> <br className="sm:block hidden" /> with AI
        
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum ipsa repudiandae dolorem harum. Veniam, repellendus facere! Voluptas id cupiditate incidunt modi quam, quasi quis? Sequi?
      </p>
      <div className="flex justify-center my-10">
       <Link to={"/drills"}>
       <Button className="mr-4">Get Started</Button></Link>
        <Button variant="outline">Learn More</Button>
      </div>
      
    </div>
  );
};

export default HeroSection;
