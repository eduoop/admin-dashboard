import StatisticsInfoCardGroup from "@/components/statistics-info-card-group";
import BannersContainer from "./_components/BannersContainer";

const statisticsInfos = [
  {
    label: "Banners Criados",
    total: 7265,
    percent: 15.5,
  },
  {
    label: "Total de Vizualisações",
    total: 3671,
    percent: 37,
  },
  {
    label: "Total de Cliques",
    total: 167,
    percent: -12,
  },
];

export function Advertising() {
  return (
    <>
      <StatisticsInfoCardGroup statisticsInfos={statisticsInfos} />;
      <div className="mb-10">
        <BannersContainer />
      </div>
    </>
  );
}

export default Advertising;
