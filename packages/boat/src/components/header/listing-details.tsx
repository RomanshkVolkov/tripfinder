'use client';

import { Suspense, useRef } from 'react';
import useAuth from '@/hooks/use-auth';
import { addScrollingClass } from '@/utils/add-scrolling-class';
import SearchIconBtn from '@/components/ui/search-icon-btn';
import SideNavButton from '@/components/ui/side-nav-button';
import ProfileMenu from '@/components/header/profile-menu';
import { useModal } from '@/components/modals/context';
import Searchbox from '@/components/ui/search-box';
import Button from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { useIsMounted } from '@/hooks/use-is-mounted';
import Loader from '@/components/ui/loader/loader';

export default function ListingDetailsHeader() {
  const mounted = useIsMounted();
  const { openModal } = useModal();
  const { isAuthorized } = useAuth();
  const headerRef = useRef(null);
  addScrollingClass(headerRef);

  return (
    <header
      ref={headerRef}
      className="dashboard-header sticky top-0 z-30 flex h-16 w-full bg-white md:flex md:items-center lg:h-[72px] 2xl:h-20 4xl:h-24"
    >
      <div className="container-fluid grid w-full grid-cols-2 items-center gap-0 lg:grid-cols-3 3xl:!px-12">
        <div className="flex items-center gap-2 md:gap-4 2xl:gap-5">
          <SideNavButton className="!block" />
          <Logo className="!text-gray-dark" />
        </div>
        <Suspense fallback={<Loader />}>
          <Searchbox className="hidden lg:block" />
        </Suspense>
        <div className="flex items-center justify-end gap-5">
          <SearchIconBtn />
          <ProfileMenu className="hidden md:block" />
        </div>
      </div>
    </header>
  );
}
