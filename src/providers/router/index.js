import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./routes";

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
