import { Button } from "@/components/ui/button";
import { DrillIntroData } from "@/types/types";
import { MdKeyboardArrowRight } from "react-icons/md";

const DrillsIntro = ({
  Logo,
  drillName,
  drillDescription,
  drillDetails,
  drillWorking,
  drillFeatures,
}: DrillIntroData) => {
  return (
    <div className="w-full">
      <Logo
        size={36}
        className={`p-2 rounded-full ${
          drillName === "Answer Elimination" && "text-red-600 bg-red-100"
        }
            ${
              drillName === "Speed Assesment Test" &&
              "text-green-600 bg-green-100"
            }
            ${drillName === "Time-Bound Sets" && "text-blue-600 bg-blue-100"}
            ${
              drillName === "Calculator Efficiency" &&
              "text-purple-600 bg-purple-100"
            }
            ${
              drillName === "Accuracy vs Speed" &&
              "text-yellow-600 bg-yellow-100"
            }
            
            `}
      />
      <div className="mt-4 w-full pr-12">
        <p className="text-2xl font-semibold">{drillName}</p>
        <p className="">{drillDescription}</p>
        <div className="flex gap-4 mt-4">
          {drillDetails.map((detail, index) => (
            <div
              className={`flex items-center gap-1 p-2 rounded-md ${
                index == 0 ? "bg-red-100" : "bg-green-100"
              }`}
              key={index}
            >
              <detail.detailLogo
                size={16}
                className={`${index == 0 ? "text-red-600" : "text-green-600"}`}
              />
              <p className="text-xs font-medium">{detail.detailName}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-2 w-full">
          <p className="text-gray-500 font-medium">How it works?</p>
          <p className="border border-gray-200 p-2 rounded-md w-full">
            {drillWorking}
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-2 w-full">
          <p className="text-gray-500 font-medium">Features</p>
          <div className="flex gap-4 w-full justify-between items-center">
            {drillFeatures.map((feature, index) => (
              <div
                className="flex flex-col items-center  p-2 rounded-md border border-gray-300 p w-1/3 gap-2"
                key={index}
              >
                <div className="flex gap-1 items-center">
                  <feature.featureLogo size={16} className="text-primary" />
                  <p className="text-sm font-medium text-primary">
                    {feature.featureName}
                  </p>
                </div>
                <p className="text-sm text-center px-4">
                  {feature.featureDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <Button className="w-2/3 mx-auto mt-36" variant={"blueGradient"}>
            Start Challenge <MdKeyboardArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DrillsIntro;
