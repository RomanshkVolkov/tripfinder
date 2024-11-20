'use client';

import { useRef } from 'react';
import { addScrollingClass } from '@/utils/add-scrolling-class';
import SearchIconBtn from '@/components/ui/search-icon-btn';
import Menu from '@/components/header/menu';
import Logo from '@/components/ui/logo';

export default function TransparentHeader() {
  const headerRef = useRef(null);
  addScrollingClass(headerRef);

  return (
    <header
      ref={headerRef}
      className="transparent-header fixed left-0 top-0 z-[100] transition-all flex w-full justify-between bg-white px-4 py-3.5 sm:bg-transparent sm:px-6 lg:py-6 2xl:px-7 3xl:px-8 4xl:px-16 4xl:py-9"
    >
      <Logo />
      <div className="flex items-center">
        <SearchIconBtn className="sm:!text-white md:hidden" />
        <Menu />
      </div>
    </header>
  );
}
