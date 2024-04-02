import StatisticsInfoCardGroup from '@/components/statistics-info-card-group';

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

export function Financial () {
  return (
    <StatisticsInfoCardGroup statisticsInfos={statisticsInfos} />
  )
}