import React from 'react';
import { withRouter } from 'next/router';
import ActiveLink from 'library/helpers/activeLink';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  PRICING_PLAN_PAGE,
} from 'settings/constant';

const MainMenu = ({ className, router }) => {
  return (
    <ul className={`ant-menu ${className}`}>
      <li>
        <ActiveLink
          className={router.pathname === HOME_PAGE ? 'active' : ''}
          href={HOME_PAGE}
        >
          Hotels
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === LISTING_POSTS_PAGE ? 'active' : ''}
          href={LISTING_POSTS_PAGE}
        >
          Listing
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === AGENT_PROFILE_PAGE ? 'active' : ''}
          href={AGENT_PROFILE_PAGE}
        >
          Agent
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === PRICING_PLAN_PAGE ? 'active' : ''}
          href={PRICING_PLAN_PAGE}
        >
          Pricing
        </ActiveLink>
      </li>
    </ul>
  );
};

export default withRouter(MainMenu);
