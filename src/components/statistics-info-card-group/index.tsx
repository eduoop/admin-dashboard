import { StatisticsInfos } from "@/models/statistics-infos.model";
import StaticInfoCard from "../statistics-info-card";

interface StatisticsInfoCardGroupProps {
  statisticsInfos: StatisticsInfos[];
}

const StatisticsInfoCardGroup = ({
  statisticsInfos,
}: StatisticsInfoCardGroupProps) => {
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 gap-10 w-full">
      {statisticsInfos.map((statisticsInfo) => (
        <StaticInfoCard
          key={statisticsInfo.label}
          label={statisticsInfo.label}
          total={statisticsInfo.total}
          percent={statisticsInfo.percent}
        />
      ))}
    </div>
  );
};

export default StatisticsInfoCardGroup;
