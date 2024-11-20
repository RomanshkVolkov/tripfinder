import React, { useContext, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import useOnClickOutside from 'library/hooks/useOnClickOutside';
import { AuthContext } from 'context/AuthProvider';
import {
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
  ADD_HOTEL_PAGE,
} from 'settings/constant';

export default function ProfileMenu({ avatar }) {
  let navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const [state, setState] = useState(false);
  const handleDropdown = () => {
    setState(!state);
  };
  const closeDropdown = () => {
    setState(false);
  };
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setState(false));
  function handleLogout() {
    logOut();
    navigate('/', { replace: true });
  }

  const menuItems = [
    {
      label: <NavLink to={AGENT_PROFILE_PAGE}>View Profile</NavLink>,
      key: 'view_profile',
    },
    {
      label: <NavLink to={ADD_HOTEL_PAGE}>Add Hotel</NavLink>,
      key: 'add_hotel',
    },
    {
      label: (
        <NavLink to={AGENT_ACCOUNT_SETTINGS_PAGE}>Account Settings</NavLink>
      ),
      key: 'account_setting',
    },
    { label: <button onClick={handleLogout}>Log Out</button>, key: 'log_out' },
  ];

  return (
    <div className="avatar-dropdown" ref={dropdownRef}>
      <div className="dropdown-handler" onClick={handleDropdown}>
        {avatar}
      </div>
      <Menu
        className={`dropdown-menu ${state ? 'active' : 'hide'}`}
        items={menuItems}
        onClick={closeDropdown}
      />
    </div>
  );
}
