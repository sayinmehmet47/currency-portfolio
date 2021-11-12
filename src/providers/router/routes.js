import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Mainpage from "../../pages/Mainpage";
import Register from "../../pages/Register";

const routes = [
  {
    path: "/",
    component: <Home />,
    exact: true,
  },
  {
    path: "/login",
    component: <Login />,
    exact: true,
  },
  {
    path: "/register",
    component: <Register />,
    exact: true,
  },
  {
    path: "/mainpage",
    component: <Mainpage />,
    exact: true,
  },
];

export default routes;
