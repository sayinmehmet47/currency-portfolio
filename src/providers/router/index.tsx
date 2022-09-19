import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

const RouterProvider = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.component} />
    ))}
  </Routes>
);

export default RouterProvider;
