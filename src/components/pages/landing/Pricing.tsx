import { useEffect, useState } from "react";
import { TimerIcon } from "lucide-react";
import Navbar from "./Navbar";

const Pricing = () => {
  // Set the end date to November 24, 2024
  const endDate = new Date("2024-11-24T00:00:00Z"); // 'Z' denotes UTC timezone

  // State to hold time remaining
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      console.log("Current Date:", now);
      console.log("End Date:", endDate);
      console.log("Difference in ms:", difference);

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  console.log("Time Left:", timeLeft);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center gap-2 sm:mt-8">
        <p className="text-primary bg-blue-100 font-medium px-4 py-2 rounded-full text-sm">
          Recommended by Toppers
        </p>
        <p className="sm:text-3xl text-2xl font-semibold tracking-tight">
          Fuel Your Final Day Preparation
        </p>
        <p className="text-gray-500 max-w-xl text-center">
          Turn your revision into results with AI-powered drills, smart
          flashcards, and personalised weak area analysis
        </p>
        <p className="border border-primary px-4 py-2 rounded-md text-primary mt-4 flex items-center gap-1">
          <TimerIcon className="h-5 mb-0.5" />
          Offer ends in{" "}
          <span>
            {timeLeft.days} d : {timeLeft.hours} h : {timeLeft.minutes} m :{" "}
            {timeLeft.seconds} s
          </span>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
