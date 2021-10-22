import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppNavbar } from '../components/AppNavbar';

export default function Home() {
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <div>
      {isLogin ? (
        <div>
          <AppNavbar />
          <h1>you are welcome</h1>
        </div>
      ) : (
        history.push('/login')
      )}
    </div>
  );
}
