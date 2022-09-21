import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Home from '../../features/Home';

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center">
          <Spinner size="xl" />
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
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
