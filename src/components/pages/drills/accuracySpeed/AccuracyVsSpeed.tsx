import DashboardWrapper from "@/components/shared/wrappers/DashboardWrapper";
import DrillsIntro from "../DrillsIntro";
import { accuracyVsSpeedIntroData } from "@/constants/data";
const AccuracyVsSpeed = () => {
  return (
    <div>
      <DashboardWrapper>
        <div>
          <DrillsIntro
            Logo={accuracyVsSpeedIntroData.drillLogo}
            drillName={accuracyVsSpeedIntroData.drillName}
            drillDescription={accuracyVsSpeedIntroData.drillDescription}
            drillDetails={accuracyVsSpeedIntroData.drillDetails}
            drillWorking={accuracyVsSpeedIntroData.drillWorking}
            drillFeatures={accuracyVsSpeedIntroData.drillFeatures}
            drillStart={() => {}}
          />
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default AccuracyVsSpeed;
