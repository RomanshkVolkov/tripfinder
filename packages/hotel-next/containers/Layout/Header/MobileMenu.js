import React, { useContext } from 'react';
import ActiveLink from 'library/helpers/activeLink';
import { AuthContext } from 'context/AuthProvider';
import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  PRICING_PLAN_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
} from 'settings/constant';

const MobileMenu = ({ className }) => {
  // auth context
  const { loggedIn, logOut } = useContext(AuthContext);

  return (
    <ul className={className}>
      <li>
        <ActiveLink href={HOME_PAGE}>Hotels</ActiveLink>
      </li>
      <li>
        <ActiveLink href={LISTING_POSTS_PAGE}>Listing</ActiveLink>
      </li>
      <li>
        <ActiveLink href={PRICING_PLAN_PAGE}>Pricing</ActiveLink>
      </li>
      {loggedIn && (
        <li>
          <ActiveLink href={AGENT_ACCOUNT_SETTINGS_PAGE}>
            Account Settings
          </ActiveLink>
        </li>
      )}
      {loggedIn && (
        <li>
          <button onClick={logOut}>Log Out</button>
        </li>
      )}
    </ul>
  );
};

export default MobileMenu;
