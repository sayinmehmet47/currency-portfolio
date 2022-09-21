import { Suspense } from 'react';
import { Spinner } from 'reactstrap';
import { Navigate, Outlet } from 'react-router-dom';
import Home from '../../features/Home';
import Mainpage from '../../features/Mainpage';

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="">
          <Spinner />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/dashboard', element: <Home /> },
      { path: '/', element: <Mainpage /> },
    ],
  },
];
