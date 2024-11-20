'use client';

import { useRef } from 'react';
import { addScrollingClass } from '@/utils/add-scrolling-class';
import DashboardMenu from '@/components/ui/dashboard-menu';
import SearchIconBtn from '@/components/ui/search-icon-btn';
import ProfileMenu from '@/components/header/profile-menu';
import Logo from '@/components/ui/logo';

export default function DashboardHeader() {
  const headerRef = useRef(null);
  addScrollingClass(headerRef);
  return (
    <header
      ref={headerRef}
      className="dashboard-header sticky top-0 z-50 flex h-16 w-full border-b transition-all border-b-gray-lighter bg-white md:flex md:items-center lg:h-[72px] 2xl:h-20 4xl:h-20"
    >
      <div className="container-fluid flex w-full items-center justify-between">
        <Logo className="!text-gray-dark" />
        <DashboardMenu />
        <SearchIconBtn className="md:hidden" />
        <ProfileMenu className="hidden md:block" />
      </div>
    </header>
  );
}
