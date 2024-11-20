'use client';

import Link from 'next/link';
import { Routes } from '@/config/routes';
import ProfileMenu from '@/components/header/profile-menu';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const menuItems = [
  {
    id: 1,
    label: 'Home',
    path: Routes.public.home,
  },
  {
    id: 2,
    label: 'Explore',
    path: Routes.public.explore,
  },
  {
    id: 3,
    label: 'Pricing',
    path: Routes.public.pricing,
  },
  {
    id: 4,
    label: 'Help',
    path: Routes.public.help,
  },
  {
    id: 5,
    label: 'Other Pages',
    path: '',
    dropdownItems: [
      {
        id: 1,
        label: 'Vendor Profile',
        path: Routes.public.userID('fabio-jaction'),
      },
      {
        id: 2,
        label: 'Listing Details',
        path: '/listing/perfect-set-up-for-lake-union-cruising',
      },
      {
        id: 3,
        label: 'Coming Soon',
        path: Routes.public.trips,
      },
      {
        id: 4,
        label: 'Sign In',
        path: Routes.auth.signIn,
      },
      {
        id: 5,
        label: 'Sign Up',
        path: Routes.auth.signUp,
      },
      {
        id: 6,
        label: 'Forgot Password',
        path: Routes.auth.forgotPassword,
      },
    ],
  },
];

export default function Menu() {
  return (
    <nav className="primary-nav hidden items-center justify-between md:flex md:gap-4">
      <ul className="hidden flex-wrap md:flex">
        {menuItems.map((item) => (
          <Fragment key={item.id}>
            {item.dropdownItems ? (
              <li key={item.id} className="group/parent relative">
                <a
                  href="#"
                  className="px-5 flex items-center text-white transition"
                >
                  {item.label}
                  <span className="z-[1] transition-transform duration-200 ms-1">
                    <ChevronDownIcon className="w-4 h-4" />
                  </span>
                </a>
                <ul className="invisible absolute top-[130%] mt-2 py-2 w-64 rounded-md bg-white opacity-0 transition-all group-hover/parent:visible group-hover/parent:top-full group-hover/parent:opacity-100 end-5 shadow-card focus:outline-none">
                  {item.dropdownItems.map((dropdownItem) => {
                    return (
                      <li key={dropdownItem.id}>
                        <Link
                          href={dropdownItem.path as string}
                          className="block rounded-sm px-5 py-2 font-normal capitalize text-gray-dark hover:bg-gray-lightest"
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={item.id}>
                <Link href={item.path} className="px-5 capitalize text-white">
                  {item.label}
                </Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
      <ProfileMenu className="hidden md:block" />
    </nav>
  );
}
