import LoggedUser from "@/components/logged-user";
import { Routes } from "../routes";
import LinkButton from "./link-button";

export function Desktop() {
  return (
    <div className="hidden laptop:flex w-[220px] h-screen flex-col px-4 pt-16 pb-7 bg-white border-r-[1px] border-[#1C1C1C1A] border-solid justify-between">
      <div className="flex flex-col gap-4">
        {Routes.map((route) => (
          <LinkButton key={route.pathname} route={route} />
        ))}
      </div>

      <LoggedUser />
    </div>
  );
}

export default Desktop;
