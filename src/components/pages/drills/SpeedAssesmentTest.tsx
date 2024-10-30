import DashboardWrapper from "@/components/shared/wrappers/DashboardWrapper";
import DrillsIntro from "./DrillsIntro";
import { speedAssesmentIntroData } from "@/constants/data";

const SpeedAssesmentTest = () => {
  return (
    <DashboardWrapper>
      <DrillsIntro
        Logo={speedAssesmentIntroData.drillLogo}
        drillName={speedAssesmentIntroData.drillName}
        drillDescription={speedAssesmentIntroData.drillDescription}
        drillDetails={speedAssesmentIntroData.drillDetails}
        drillWorking={speedAssesmentIntroData.drillWorking}
        drillFeatures={speedAssesmentIntroData.drillFeatures}
      />
    </DashboardWrapper>
  );
};

export default SpeedAssesmentTest;
