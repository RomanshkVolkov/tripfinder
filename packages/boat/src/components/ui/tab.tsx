'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  Tab,
  TabPanel as HeadlessTabPanel,
  TabPanels as HeadlessTabPanels,
  TabList as HeadlessTabList,
} from '@headlessui/react';

//
// Tab Item framer motion variant
//
export function TabItem({
  children,
  className,
  motionClassName,
  motionLayoutId,
  ...props
}: React.PropsWithChildren<{
  className?: string;
  motionClassName?: string;
  motionLayoutId?: string;
  [key: string]: any;
}>) {
  return (
    <Tab
      className={({ selected }) =>
        clsx(
          'relative pb-4 text-sm capitalize tracking-wide text-gray focus:outline-none lg:text-base',
          selected && 'tab-text-shadow !text-white',
          className,
        )
      }
      {...props}
    >
      {({ selected }) => (
        <>
          <span className="md:px-0">{children}</span>
          {selected && (
            <motion.span
              className={clsx(
                'absolute bottom-0 left-0 right-0 z-10 h-0.5 w-full rounded-full bg-gray-dark lg:h-1',
                motionClassName,
              )}
              layoutId={motionLayoutId}
            />
          )}
        </>
      )}
    </Tab>
  );
}

//
// Tab Panels
//
export function TabPanels({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <HeadlessTabPanels className={className}>
      <>{children}</>
    </HeadlessTabPanels>
  );
}

//
// Tab Panel
//
export function TabPanel({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <HeadlessTabPanel className={className}>{children}</HeadlessTabPanel>;
}

//
// Tab Panel
//
export function Tablist({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <HeadlessTabList className={className}>{children}</HeadlessTabList>;
}
