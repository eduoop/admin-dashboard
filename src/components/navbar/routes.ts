import type { Route } from "@/models";
import { BiSolidDashboard } from "react-icons/bi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi";
import {HiMiniMegaphone } from "react-icons/hi2";

export const Routes: Route[] = [
  {
    icon: BiSolidDashboard,
    pathname: "summary",
    label: "Resumo",
  },
  {
    icon: HiMiniCurrencyDollar,
    pathname: "financial",
    label: "Financeiro",
  },
  {
    icon: HiUsers,
    pathname: "users",
    label: "Usuários",
  },
  {
    icon: HiMiniMegaphone,
    pathname: "advertising",
    label: "Publicidade",
  },
];
