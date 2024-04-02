import StaticInfoCardGroup from "@/components/statistics-info-card-group";

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
    </>
  );
}
