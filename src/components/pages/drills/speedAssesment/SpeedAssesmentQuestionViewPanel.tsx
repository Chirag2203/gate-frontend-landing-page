import Calculator from "@/components/shared/components/calculator/Calculator";
import { QuestionPanelProps } from "@/types/types";

const SpeedAssesmentQuestionViewPanel = ({
  questions,
  questionStatus,
  onQuestionSelect,
  selectedQuestionId,
}: QuestionPanelProps) => {
  // const getColor = (status: QuestionStatusSpeedTest) => {
  //   switch (status) {
  //     case "notReached":
  //       return "white";
  //     case "attempted":
  //       return "green";
  //     case "saveForLater":
  //       return "gray-500";
  //     case "skipped":
  //       return "red";
  //     default:
  //       return "white";
  //   }
  // };
  return (
    <div className="  flex flex-col gap-8 h-screen ">
      <div className=" p-4 rounded-xl border border-gray-200">
        <div className="flex gap-4 items-center flex-wrap">
          <p className="text-sm  ">
            <span className=" px-2.5 py-0.5 rounded-md bg-green-500 mr-2"></span>{" "}
            Attempted
          </p>
          <p className="text-sm  ">
            <span className=" px-2.5 py-0.5 rounded-md bg-gray-300 mr-2"></span>{" "}
            Saved for Later
          </p>
          <p className="text-sm  ">
            <span className=" px-2.5 py-0.5 rounded-md bg-red-500 mr-2"></span>{" "}
            Skipped
          </p>
        </div>
        <p className="text-sm py-4 font-medium">Choose a question</p>
        <div className="flex flex-wrap gap-2 ">
          {questions.map((q) => (
            <button
              key={q.id}
              onClick={() => onQuestionSelect(q.id)}
              className={`
          h-12 w-12 rounded  font-medium text-sm
          ${
            q.id === selectedQuestionId
              ? "border-2 border-black font-semibold "
              : "border border-gray-300"
          }
          ${
            questionStatus[q.id] === "notReached"
              ? "bg-white"
              : questionStatus[q.id] === "attempted"
              ? "bg-green-500"
              : questionStatus[q.id] === "saveForLater"
              ? "bg-gray-300"
              : questionStatus[q.id] === "skipped"
              ? "bg-red-500"
              : "bg-white"
          }
        `}
            >
              {q.id}
            </button>
          ))}
        </div>
      </div>
      {localStorage.getItem("isCalculatorOpen") === "true" ? (
        <Calculator />
      ) : null}
    </div>
  );
};

export default SpeedAssesmentQuestionViewPanel;
