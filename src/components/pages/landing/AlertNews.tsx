import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const AlertNews = () => {
  return (
    <div className="bg-secondary text-white text-center py-2 font-medium gap-2 flex items-center justify-center sm:text-md text-sm">
      <p className="bg-gray-200 bg-opacity-30 px-4 py-1 rounded-full hidden sm:block">
        Early Pricing
      </p>
      <p>Get GATE 2025 Plan at ₹5/day </p>
      {"  "}
      <Link to="/pricing" className="text-yellow-400 underline ">
        {"  "}{" "}
        <p className="flex items-center gap-1">
          {" "}
          Check Now <BsArrowRight className="sm:text-lg text-md" />
        </p>
      </Link>
    </div>
  );
};

export default AlertNews;
