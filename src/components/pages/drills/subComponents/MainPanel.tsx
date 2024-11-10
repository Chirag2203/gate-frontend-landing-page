import { Checkbox } from "@/components/ui/checkbox"
import { MainPanelProps } from "@/types/types"

const MainPanel: React.FC<MainPanelProps> = ({ question }) => {
  return (
    <div>
      <h2>Question {question.id}</h2>
      <p>{question.question}</p>
      {question.options.map((option: string) => {
        return (
          <div>
            <Checkbox />
            {option}
          </div>
        )
      })}
    </div>
  )
}

export default MainPanel