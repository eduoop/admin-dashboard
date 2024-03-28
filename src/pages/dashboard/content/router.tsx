import type { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { Create } from "./create";

import { Content } from ".";

export function Router(): ReactElement {
  return (
    <Routes>
      <Route index element={<Content />} />

      <Route path="/create" element={<Create />} />
    </Routes>
  );
}
