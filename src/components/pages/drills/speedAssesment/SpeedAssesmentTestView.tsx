import { Button } from "@/components/ui/button";
import { MainPanelProps } from "@/types/types";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Progress } from "@/components/ui/progress"

const SpeedAssesmentTestView = ({
  question,
  onSkip,
  onSaveForLater,
  onNext,
  timeLeft,
  questionsAttempted
}: MainPanelProps) => {
  return (
    <div className="border w-3/4 p-8 py-8 rounded-xl border-gray-200 ">
      <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="font-semibold">Question {question.id} of 15</h1>
        <p>{timeLeft}</p>
      </div>
      <Progress value={questionsAttempted*100/15} />
      </div>
      <div className="flex flex-col justify-between h-full pb-4">
        <div className="mt-8 flex flex-col gap-4">
          <p className="text-lg">{question.question}</p>
          <div className="flex flex-col gap-2 ">
            {question.options.map((option: string) => {
              return (
                <div className="px-4 py-2 border border-gray-200 rounded-lg ">
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          <Button onClick={onSkip} variant={"skip"} className="w-1/6">
            <FaArrowLeftLong />
            Skip
          </Button>
          <Button
            onClick={onSaveForLater}
            className="w-1/6"
            variant={"outline"}
          >
            Save for later
          </Button>
          <Button onClick={onNext} variant={"solve"} className="w-1/6">
            Solve
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpeedAssesmentTestView;
