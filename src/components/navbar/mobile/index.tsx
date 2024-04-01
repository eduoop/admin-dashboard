import { Dispatch } from "react";
import { Routes } from "../routes";
import LinkButton from "./link-button";
import LoggedUser from "@/components/logged-user";

interface MobileProps {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

export function Mobile({ setOpen }: MobileProps) {
  return (
    <div className="h-full flex flex-col justify-between px-3 pb-7">
      <div className="flex flex-col gap-4">
        {Routes.map((route) => (
          <LinkButton setOpen={setOpen} key={route.pathname} route={route} />
        ))}
      </div>

      <LoggedUser />
    </div>
  );
}
