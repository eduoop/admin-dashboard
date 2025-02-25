import StaticInfoCardGroup from "@/components/statistics-info-card-group";
import TotalUsersChart from "./_components/total-users-chart";
import RecentUsersTable from "./_components/recent-users-table";

const statisticsInfos = [
  {
    label: "Novos Usuários",
    total: 7265,
    percent: 15.5,
  },
  {
    label: "Usuários Gratuitos",
    total: 3671,
    percent: 37,
  },
  {
    label: "Usuários Premium",
    total: 167,
    percent: -12,
  },
];

export function Summary() {
  return (
    <>
      <StaticInfoCardGroup statisticsInfos={statisticsInfos} />
      <div className="mb-10">
        <TotalUsersChart />
      </div>
      <RecentUsersTable />
    </>
  );
}
