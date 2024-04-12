import StatisticsInfoCardGroup from "@/components/statistics-info-card-group";
import Transitions from "./_components/transactions";
import LeagueHistory from "./_components/league-history";

const statisticsInfos = [
  {
    label: "Total Depositado",
    total: 7265,
    percent: 15.5,
  },
  {
    label: "Total Sacado",
    total: 3671,
    percent: 37,
  },
  {
    label: "Usuários Premium",
    total: 167,
    percent: -12,
  },
];

export function Financial() {
  return (
    <>
      <StatisticsInfoCardGroup statisticsInfos={statisticsInfos} />
      <div className="mb-10">
        <Transitions />
      </div>
      <LeagueHistory />
    </>
  );
}
