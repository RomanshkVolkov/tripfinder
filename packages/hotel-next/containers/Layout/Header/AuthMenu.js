import React from 'react';
import Link from 'next/link';
import { LOGIN_PAGE, REGISTRATION_PAGE } from 'settings/constant';

export default function AuthMenu({ className }) {
  return (
    <ul className={className}>
      <li>
        <Link href={LOGIN_PAGE}>Sign in</Link>
      </li>
      <li>
        <Link href={REGISTRATION_PAGE}>Sign up</Link>
      </li>
    </ul>
  );
}
