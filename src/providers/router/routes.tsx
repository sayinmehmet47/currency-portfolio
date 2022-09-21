import Home from '../../features/Home';
import Login from '../../features/auth/components/Login';
import Mainpage from '../../features/Mainpage';
import NotFound from '../../features/NotFound';
import Register from '../../features/Register';
import Translation from '../../features/Translation';

const routes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/mainpage',
    component: <Mainpage />,
  },
  {
    path: '/translate',
    component: <Translation />,
  },
  { path: '*', component: <NotFound /> },
];

export default routes;
