import DashboardWrapper from "@/components/shared/wrappers/DashboardWrapper"
import DrillsIntro from "../DrillsIntro"
import { calculatorEfficiencyIntroData } from "@/constants/data"
const CalculatorEfficiency = () => {
  return (
   <DashboardWrapper>
     <div>
      <DrillsIntro
        Logo={calculatorEfficiencyIntroData.drillLogo}
        drillName={calculatorEfficiencyIntroData.drillName}
        drillDescription={calculatorEfficiencyIntroData.drillDescription}
        drillDetails={calculatorEfficiencyIntroData.drillDetails}
        drillWorking={calculatorEfficiencyIntroData.drillWorking}
        drillFeatures={calculatorEfficiencyIntroData.drillFeatures}
        drillStart={()=>{}}
        />

      </div>
   </DashboardWrapper>
  )
}

export default CalculatorEfficiency
