import { useLocation } from "react-router-dom";
import { Routes } from "../navbar/routes";

const PageHeader = () => {
  const location = useLocation().pathname.split("/")[1];

  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-black font-semibold text-3xl">
        {Routes.filter((route) => route.pathname === `${location}`)[0].label}
      </h1>

      <h2 className="text-black">Drops</h2>
    </div>
  );
};

export default PageHeader;
