import DashboardWrapper from "@/components/shared/wrappers/DashboardWrapper"
import DrillsIntro from "../DrillsIntro"
import { answerEliminationIntroData } from "@/constants/data"
const AnswerElimination = () => {
  return (
   <DashboardWrapper>
     <div>
      <DrillsIntro
        Logo={answerEliminationIntroData.drillLogo}
        drillName={answerEliminationIntroData.drillName}
        drillDescription={answerEliminationIntroData.drillDescription}
        drillDetails={answerEliminationIntroData.drillDetails}
        drillWorking={answerEliminationIntroData.drillWorking}
        drillFeatures={answerEliminationIntroData.drillFeatures}
        drillStart={()=>{}}
        />

      </div>
   </DashboardWrapper>
  )
}

export default AnswerElimination
