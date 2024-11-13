import ComingSoon from "@/assets/animated/ComingSoon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "../landing/Navbar";
import AlertNews from "../landing/AlertNews";

const MobileSignin = () => {
  return (
    <div>
      <AlertNews />
      <Navbar />
      <div className="flex justify-center flex-col items-center pt-32">
        <p className="text-primary font-bold text-3xl">Coming soon!</p>
        <Link to="/waitlist">
          <Button className="mt-4" variant={"blueGradient"}>
            Join Waitlist
          </Button>
        </Link>
        <ComingSoon />
      </div>
    </div>
  );
};

export default MobileSignin;
