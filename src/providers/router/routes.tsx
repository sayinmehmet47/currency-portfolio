import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Mainpage from '../../pages/Mainpage';
import NotFound from '../../pages/NotFound';
import Register from '../../pages/Register';
import Translation from '../../pages/Translation';

const routes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/login',
    component: <Login />,
  },
  {
    path: '/register',
    component: <Register />,
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
