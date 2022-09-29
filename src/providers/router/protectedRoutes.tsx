import { Suspense, lazy, Fragment } from 'react';
import { Spinner } from 'react-rainbow-components';
import { Outlet } from 'react-router-dom';

import { MainLayout } from '../../components/Layout';
import Loading from '../../components/Spinner';

const Home = lazy(() => import('../../features/Home'));

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [{ path: '/dashboard', element: <Home /> }],
  },
];
