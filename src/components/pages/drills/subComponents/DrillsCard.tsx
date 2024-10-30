import { Button } from "@/components/ui/button";
import { DrillsCardProps } from "@/types/types";
import { NotebookText } from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


const DrillsCard = ({
  drillName,
  drillDescription,
  Logo,
  drillStats,
  drillLearners,
    drillLink,
}: DrillsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div>
      <div className="flex justify-between items-center">
        <Logo
          size={32}
          className={`p-1.5 rounded-full ${
            drillName === "Answer Elimination" && "text-red-600 bg-red-100"
          }
            ${
              drillName === "Speed Assesment Test" &&
              "text-green-600 bg-green-100"
            }
            ${drillName === "Time-Bound Sets" && "text-blue-600 bg-blue-100"}
            ${drillName === "Calculator Efficiency" && "text-purple-600 bg-purple-100"}
            ${drillName === "Accuracy vs Speed" && "text-yellow-600 bg-yellow-100"}
            
            `
          }
        />
        <div className="flex items-center gap-1 rounded-2xl border border-gray-200 p-1">
          <NotebookText size={12} className="text-accent" />
          <p className="text-xs font-medium">{drillLearners}+ Learners</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold ">{drillName}</p>
        <p className="text-sm mt-2 text-gray-600">{drillDescription}</p>
        <div className="flex gap-4 items-center">
          {drillStats.map((stat, index) => (
            <div className="flex items-center gap-1 mt-4" key={index}>
              <stat.statsLogo
                size={14}
                className={`${index == 0 ? "text-yellow-600" : "text-accent"}`}
              />
              <p className="text-xs font-medium">{stat.statsName}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
       <Link to={drillLink}>
       <Button className="w-full mt-8" variant={"blueGradient"}>
          Begin Your Mastery <MdKeyboardArrowRight />
        </Button></Link>
    </div>
  );
};
export default DrillsCard;
