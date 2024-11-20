import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import { LOGIN_PAGE, REGISTRATION_PAGE } from 'settings/constant';

const menuItems = [
  {
    label: <NavLink to={LOGIN_PAGE}>Sign in</NavLink>,
    key: 'menu-1',
  },
  {
    label: <NavLink to={REGISTRATION_PAGE}>Sign up</NavLink>,
    key: 'menu-2',
  },
];

const AuthMenu = ({ className }) => {
  return <Menu className={className} items={menuItems} />;
};

export default AuthMenu;
