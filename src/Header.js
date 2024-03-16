import React from 'react';
import {Head} from './Head';
import { Outlet } from 'react-router-dom';
export const Header = () => {
  return (
    <div >
      <Head />
      <Outlet />
    </div>
  );
};
