import React from 'react';
import { AppNavbar } from '../AppNavbar';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <AppNavbar />
      <main>{children}</main>
    </div>
  );
};
