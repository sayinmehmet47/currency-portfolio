import { Suspense } from 'react';
import { Spinner } from 'reactstrap';
import { Outlet } from 'react-router-dom';
import Home from '../../features/Home';
import { MainLayout } from '../../components/Layout';

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="">
            <Spinner />
          </div>
        }
      >
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
