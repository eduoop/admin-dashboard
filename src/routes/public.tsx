import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export function Public(): ReactElement {
  return <Outlet />;
}
