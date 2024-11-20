import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  PRICING_PLAN_PAGE,
} from 'settings/constant';

const menuItems = [
  {
    label: <NavLink to={HOME_PAGE}>Hotels</NavLink>,
    key: 'menu-1',
  },
  {
    label: <NavLink to={LISTING_POSTS_PAGE}>Listing</NavLink>,
    key: 'menu-2',
  },
  {
    label: <NavLink to={AGENT_PROFILE_PAGE}>Agent</NavLink>,
    key: 'menu-3',
  },
  {
    label: <NavLink to={PRICING_PLAN_PAGE}>Pricing</NavLink>,
    key: 'menu-4',
  },
];

const MainMenu = ({ className }) => {
  return <Menu className={className} items={menuItems} />;
};

export default MainMenu;
