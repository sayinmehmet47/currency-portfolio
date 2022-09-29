import { Route, Routes } from 'react-router-dom';
import Register from '../components/Register';
import Login from '../components/Login';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default AuthRoutes;
