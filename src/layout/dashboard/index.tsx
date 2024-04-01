import AppBar from "@/components/app-bar";
import PageHeader from "@/components/page-header";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="block laptop:flex gap-8">
      <AppBar />
      <div className="w-full pt-10 pr-16">
        <div className="w-full mb-10">
          <PageHeader />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
