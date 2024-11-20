'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Routes } from '@/config/routes';

const menuData = [
  {
    text: 'overview',
    path: Routes.public.dashboard,
  },
  {
    text: 'inbox',
    path: Routes.public.inbox,
  },
  {
    text: 'reservation',
    path: Routes.public.reservations,
  },
  {
    text: 'listings',
    path: Routes.public.listings,
  },
];

export default function DashboardMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden md:block">
      <ul className="flex items-center gap-6 lg:gap-8 xl:gap-12 3xl:gap-12">
        {menuData.map((item) => (
          <li key={item.text} className="relative">
            <Link
              href={item.path}
              className={clsx(
                'inline-block text-base font-normal capitalize text-gray-dark',
                pathname === item.path && '!font-bold',
              )}
            >
              {item.text}
            </Link>
            {pathname === item.path && (
              <motion.div
                layoutId="linkUnderline"
                className="absolute -bottom-5 left-0 h-[2px] w-full rounded-md bg-gray-dark lg:-bottom-6 xl:h-1 2xl:-bottom-7 4xl:-bottom-7"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
