import { Suspense } from 'react';
import { Routes, Route, useRoutes } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { publicRoutes } from './publicRoutes';
import routes from './routes';
import Mainpage from '../../features/Mainpage';
import { protectedRoutes } from './protectedRoutes';

const RouterProvider = () => {
  const commonRoutes = [{ path: '/', element: <Mainpage /> }];
  const element = useRoutes([
    ...commonRoutes,
    ...publicRoutes,
    ...protectedRoutes,
  ]);
  return <>{element}</>;
};

export default RouterProvider;
