import { IconType } from "react-icons/lib";

export type RoutePath = "summary" | "financial" | "users" | "advertising";

export interface Route {
  pathname: RoutePath;
  icon: IconType;
  label: string;
}
