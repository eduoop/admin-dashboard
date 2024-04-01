import type { ReactElement } from "react";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "@/layout";
import { Signin } from "@/pages";

import { Private } from "./private";
import { Public } from "./public";

const SummaryRouter = lazy(() =>
  import("@/pages/dashboard/summary/router").then((module) => ({
    default: module.Router,
  }))
);

const FinancialRouter = lazy(() =>
  import("@/pages/dashboard/financial/router").then((module) => ({
    default: module.Router,
  }))
);

const UsersRouter = lazy(() =>
  import("@/pages/dashboard/users/router").then((module) => ({
    default: module.Router,
  }))
);

const AdvertisingRouter = lazy(() =>
  import("@/pages/dashboard/advertising/router").then((module) => ({
    default: module.Router,
  }))
);

export function Router(): ReactElement {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route element={<Public />}>
          <Route index element={<Navigate to="/sign-in" />} />
          <Route path="sign-in" element={<Signin />} />
        </Route>

        <Route element={<Private />}>
          <Route element={<Dashboard />}>
            <Route path="summary/*" element={<SummaryRouter />} />
            <Route path="financial/*" element={<FinancialRouter />} />
            <Route path="users/*" element={<UsersRouter />} />
            <Route path="advertising/*" element={<AdvertisingRouter />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
