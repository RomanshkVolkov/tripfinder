import React from 'react';
import Link from 'next/link';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  PRIVACY_PAGE,
  PRICING_PLAN_PAGE,
  AGENT_PROFILE_PAGE,
} from '../../../settings/constant';

const FooterMenu = () => {
  return (
    <ul className="ant-menu">
      <li>
        <Link href={`${HOME_PAGE}`}>Hotels</Link>
      </li>
      <li>
        <Link href={`${LISTING_POSTS_PAGE}`}>Listing</Link>
      </li>
      <li>
        <Link href={`${PRICING_PLAN_PAGE}`}>Pricing</Link>
      </li>
      <li>
        <Link href={`${PRIVACY_PAGE}`}>Privacy</Link>
      </li>
      <li>
        <Link href={`${AGENT_PROFILE_PAGE}`}>Agent</Link>
      </li>
    </ul>
  );
};

export default FooterMenu;
