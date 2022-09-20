import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import routes from './routes';

const RouterProvider = () => (
  <Suspense
    fallback={
      <div>
        <Spinner />
      </div>
    }
  >
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  </Suspense>
);

export default RouterProvider;
