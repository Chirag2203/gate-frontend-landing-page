import DashboardWrapper from "@/components/shared/wrappers/DashboardWrapper";
import DrillsStats from "./subComponents/DrillsStats";
import DrillsCard from "./subComponents/DrillsCard";
import { drillsCardData, statsData } from "@/constants/data";

const DrillsHome = () => {
  return (
    <DashboardWrapper>
      <div className="w-full">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold"> Unleash Your Exam Potential</p>
          <p>
            Achieve your dream score with our unique gamified Drills based on
            the strategies of top rankers.
          </p>
        </div>
        <DrillsStats statsData={statsData} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {drillsCardData.map((drill, index) => (
            <DrillsCard
              drillName={drill.drillName}
              drillDescription={drill.drillDescription}
              Logo={drill.drillLogo}
              drillStats={drill.drillStats}
              drillLearners={drill.drillLearners}
              drillLink={drill.drillLink}
              key={index}
            />
          ))}
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default DrillsHome;
