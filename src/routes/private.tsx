import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export function Private(): ReactElement {
  return <Outlet />;
}
