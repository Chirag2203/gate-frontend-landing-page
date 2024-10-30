import { DrillsStatsProps } from "@/types/types";

const DrillsStats = (statsData: DrillsStatsProps) => {
  return (
    <div className="bg-white border border-gray-200 w-full mt-8">
      <div className="p-4">
        <div className="grid grid-cols-4 gap-4">
          {statsData.statsData.map((stat) => (
            <div className="flex items-center justify-center flex-col">
              <div className="flex items-center justify-center gap-1">
                <stat.statsLogo size={16} />
                <span className="text-xl font-semibold text-green-600">
                  {stat.statsValue}
                </span>
              </div>
              <span className=" text-sm font-medium">{stat.statsName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrillsStats;
