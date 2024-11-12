import { MainPanelProps } from "@/types/types"

const MainPanel = ({ question, onSkip, onSaveForLater, onNext }: MainPanelProps) => {
  return (
    <div >
      <h2>Question {question.id}</h2>
      <p>{question.question}</p>
      {question.options.map((option: string) => {
        return (
          <div>
            {option}
          </div>
        )
      })}
      <div>
        <button onClick={onSkip}>
          Skip
        </button>
        <button onClick={onSaveForLater}>
          Save for later
        </button>
        <button onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default MainPanel