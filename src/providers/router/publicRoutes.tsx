import { lazy, Suspense } from 'react';
import Loading from '../../components/Spinner';

const AuthRoutes = lazy(() => import('../../features/auth/routes'));

export const publicRoutes = [
  {
    path: '*',
    element: (
      <Suspense fallback={<Loading />}>
        <AuthRoutes />{' '}
      </Suspense>
    ),
  },
];
