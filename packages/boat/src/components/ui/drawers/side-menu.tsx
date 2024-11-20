'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  CubeIcon,
  XMarkIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { drawerStateAtom } from '@/components/drawers/view';
import ActionIcon from '@/components/ui/action-icon';
import { Routes } from '@/config/routes';
import Logo from '@/components/ui/logo';
import { useEffect, useState } from 'react';
import { useMeasure } from 'react-use';
import {
  ChevronDownIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const menu = [
  {
    name: 'home',
    icon: <HomeIcon className="h-auto w-5" />,
    path: Routes.public.home,
  },
  {
    name: 'explore',
    icon: <MagnifyingGlassIcon className="h-auto w-5" />,
    path: Routes.public.explore,
  },
  {
    name: 'pricing',
    icon: <CubeIcon className="h-auto w-5" />,
    path: Routes.public.pricing,
  },
  {
    name: 'settings',
    icon: <Cog6ToothIcon className="h-auto w-5" />,
    path: Routes.public.accountSettings,
  },
  {
    name: 'help',
    icon: <InformationCircleIcon className="h-auto w-5" />,
    path: Routes.public.help,
  },
  {
    name: 'Other Pages',
    icon: <RectangleGroupIcon className="h-auto w-5" />,
    path: '',
    dropdownItems: [
      {
        label: 'Vendor Profile',
        path: Routes.public.userID('fabio-jaction'),
      },
      {
        label: 'Listing Details',
        path: '/listing/perfect-set-up-for-lake-union-cruising',
      },
      {
        label: 'Coming Soon',
        path: Routes.public.trips,
      },
      {
        label: 'Sign In',
        path: Routes.auth.signIn,
      },
      {
        label: 'Sign Up',
        path: Routes.auth.signUp,
      },
      {
        label: 'Forgot Password',
        path: Routes.auth.forgotPassword,
      },
    ],
  },
];

interface navListTypes {
  navListItem: {
    name: string;
    icon?: React.ReactNode;
    path: string;
    dropdownItems?: {
      label: string;
      path: string;
    }[];
  }[];
}

type MenuItemProps = {
  name?: string;
  icon?: React.ReactNode;
  path: string;
  dropdownItems?: DropdownItemProps[];
};

type DropdownItemProps = {
  label: string;
  path: string;
};

function CollapsibleMenu({ name, icon, path, dropdownItems }: MenuItemProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [ref, { height }] = useMeasure<HTMLUListElement>();
  const isChildrenActive =
    dropdownItems && dropdownItems.some((item) => item.path === pathname);

  useEffect(() => {
    if (isChildrenActive) {
      setIsOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {dropdownItems?.length ? (
        <>
          <li
            className={clsx(
              'relative cursor-pointer',
              isChildrenActive ? 'bg-gray-lightest' : 'text-gray-dark',
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center justify-between gap-3 px-10 py-4 text-base capitalize hover:bg-gray-lightest">
              <span className="z-[1] flex items-center me-3">
                <span className={clsx('me-3')}>{icon}</span>
                {name}
              </span>
              <span
                className={`z-[1] transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                <ChevronDownIcon className="w-4 h-4" />
              </span>
            </div>

            {isChildrenActive && (
              <motion.span
                className={clsx(
                  'absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand opacity-0 shadow-large transition-opacity',
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </li>

          <div
            style={{
              height: isOpen ? height : 0,
            }}
            className="ease-[cubic-bezier(0.33, 1, 0.68, 1)] overflow-hidden transition-all duration-[350ms]"
          >
            <ul ref={ref}>
              {dropdownItems?.map((item, index) => (
                <li className="first:pt-2" key={index}>
                  <Link
                    href={item?.path}
                    className={clsx(
                      'px-14 py-2.5 flex items-center rounded-lg text-gray-light hover:text-gray-dark transition-all before:h-1 before:w-1 before:transition-all before:rounded-full before:bg-gray-light hover:text-brand before:-ml-0.5 before:me-[18px] hover:before:bg-gray-dark',
                      pathname === item?.path &&
                        '!text-gray-dark before:!bg-gray-dark font-semibold before:w-2 before:h-2',
                    )}
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <li className="border-b border-gray-lightest last:border-b-0">
          <Link
            href={path}
            className={clsx(
              'flex items-center gap-3 px-10 py-4 text-base capitalize text-gray-dark hover:bg-gray-lightest',
              {
                'bg-gray-lightest': pathname === path,
              },
            )}
          >
            {icon}
            {name}
          </Link>
        </li>
      )}
    </>
  );
}

function List({ navListItem }: navListTypes) {
  return (
    <ul className="pt-4">
      {navListItem.map((item) => (
        <CollapsibleMenu
          key={'drawer-full' + item.name}
          name={item.name}
          icon={item.icon}
          path={item.path}
          // @ts-ignore
          dropdownItems={item.dropdownItems!}
        />
      ))}
    </ul>
  );
}

export default function SideMenu() {
  const [drawerSate, setDrawerState] = useAtom(drawerStateAtom);
  return (
    <div className="ml-auto h-full bg-white md:ml-0">
      <div className="flex h-14 items-center justify-between px-10 pt-6 md:h-20 xl:h-24">
        <Logo className="!text-gray-dark" />
        <ActionIcon
          size="sm"
          variant="outline"
          className="border-none !p-0 focus:!ring-0"
          onClick={() => setDrawerState({ ...drawerSate, isOpen: false })}
        >
          <XMarkIcon className="h-6 w-6" />
        </ActionIcon>
      </div>
      <List navListItem={menu} />
    </div>
  );
}
