import type { ReactElement } from "react";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "@/layout";
import { Signin } from "@/pages";

import { Private } from "./private";
import { Public } from "./public";

const ContentRouter = lazy(() =>
  import("@/pages/dashboard/content/router").then((module) => ({
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
            <Route path="contents/*" element={<ContentRouter />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
