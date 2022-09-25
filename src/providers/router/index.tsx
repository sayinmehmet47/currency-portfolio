import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import Mainpage from '../../features/Mainpage';
import { protectedRoutes } from './protectedRoutes';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const RouterProvider = () => {
  const auth = useSelector((state: RootState) => state.auth);

  const commonRoutes = [{ path: '/', element: <Mainpage /> }];

  const routes = auth.isLogin ? protectedRoutes : publicRoutes;

  const element = useRoutes([...commonRoutes, ...routes]);
  return <>{element}</>;
};

export default RouterProvider;
