import DashboardWrapper from "@/components/shared/wrappers/DashboardWrapper";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
const SpeedAssesmentTestReport = ({
    timeToRedirect,

}:
    { timeToRedirect: number }
) => {
  const data = [
    {
      name: "Questions seen",
      value: 20,
    },
    {
      name: "Time taken",
      value: "15 minutes",
    },
    {
      name: "Avg time",
      value: "45 seconds",
    },
    {
      name: "Saved for later",
      value: 5,
    },
    {
      name: "Skipped questions",
      value: 3,
    },
    {
      name: "Attempted questions",
      value: 12,
    },
  ];

  return (
    <DashboardWrapper>
      <div className="flex flex-col w-full gap-2">
        <p className="flex justify-end">
          <Link to="/drills">
            <RxCross1 className="text-xl hover:text-red-500 cursor-pointer" />
          </Link>
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-semibold">Congratulations! 🎉</p>
          <p className="text-sm">You've completed your Speed Assesment Test</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          {data.map((d, index) => {
            return (
              <div
                key={index}
                className="p-4 py-2 rounded-md flex items-center gap-2 border border-gray-200"
              >
                <p className="font-medium text-primary-dark">{d.name}</p>
                <p className="">{d.value}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <p className="text-xl font-semibold text-primary">
            Are you ready to test these decisions?
          </p>
          <p className="text-sm">Estimated time: 42 minutes</p>
        </div>
        <div className="mt-12 flex gap-4 ">
          <Button variant={"outline"} className="px-6">
            Do it Later
          </Button>
          <Button variant={"blueGradient"} className="px-6">
            {" "}
            Start Solving
            <MdKeyboardArrowRight />
          </Button>
        </div>
        <p className="text-sm mt-4">Redirecting to Drills in {timeToRedirect} seconds...</p>
      </div>
    </DashboardWrapper>
  );
};

export default SpeedAssesmentTestReport;
