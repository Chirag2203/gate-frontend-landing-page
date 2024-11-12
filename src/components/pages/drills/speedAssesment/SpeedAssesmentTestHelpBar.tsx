import GeneralTooltip from "@/components/shared/components/GeneralTooltip";
import { Button } from "@/components/ui/button";
import { FaCalculator } from "react-icons/fa6";

const SpeedAssesmentTestHelpBar = ({handleEndTest}:
  {handleEndTest: () => void}
) => {
  return (
    <div className="flex gap-2 justify-between items-center">
      <GeneralTooltip Icon={FaCalculator} text="Calculator" size="xl" />
      <Button
        className="hover:bg-red-50 hover:text-red-500 hover:border-red-100"
        variant={"outline"}
        onClick={handleEndTest}
      >
        End Drill
      </Button>
    </div>
  );
};

export default SpeedAssesmentTestHelpBar;
