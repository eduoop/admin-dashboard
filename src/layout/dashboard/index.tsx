import AppBar from "@/components/app-bar";
import PageHeader from "@/components/page-header";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="block laptop:flex gap-8">
      <AppBar />
      <div className="w-full pt-5 pr-5 pl-5 laptop:pt-10 laptop:pr-16 laptop:pl-0">
        <div className="w-full mb-10">
          <PageHeader />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
