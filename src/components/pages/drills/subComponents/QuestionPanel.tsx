import { QuestionPanelProps, QuestionStatusSpeedTest } from "@/types/types";
import classNames from "classnames";

const QuestionPanel = ({ questions, questionStatus, onQuestionSelect, selectedQuestionId }: QuestionPanelProps) => {
  const getColor = (status: QuestionStatusSpeedTest) => {
    switch (status) {
      case "notReached":
        return "white";
      case "attempted":
        return "green";
      case "saveForLater":
        return "gray-500";
      case "skipped":
        return "red";
      default:
        return "white";
    }
  }
  return (
    <div className="w-1/5 p-3 bg-">
      {questions.map((q) => (
        <button
          key={q.id}
          onClick={() => onQuestionSelect(q.id)}
          className={`
          p-2 m-1 rounded 
          ${q.id === selectedQuestionId ? "border-2 border-black font-semibold" : "border border-gray-300"}
          ${questionStatus[q.id] === "notReached" ? "bg-white" :
              questionStatus[q.id] === "attempted" ? "bg-green-500" :
                questionStatus[q.id] === "saveForLater" ? "bg-gray-500" :
                  questionStatus[q.id] === "skipped" ? "bg-red-500" :
                    "bg-white"
            }
        `}
        >
          {q.id}
        </button>
      ))}
    </div>
  )
}

export default QuestionPanel;