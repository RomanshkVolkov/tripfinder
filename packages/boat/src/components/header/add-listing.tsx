'use client';

import { useRef } from 'react';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { addScrollingClass } from '@/utils/add-scrolling-class';
import { storeAtom } from '@/components/add-listing/add-listing';
import Button from '@/components/ui/button';
import { Routes } from '@/config/routes';
import Logo from '@/components/ui/logo';

export default function AddListingHeader() {
  const router = useRouter();
  const headerRef = useRef(null);
  addScrollingClass(headerRef);
  const store = useAtomValue(storeAtom);

  function handleSaveExit() {
    console.log(store);
    router.push(Routes.public.dashboard);
  }

  return (
    <header
      ref={headerRef}
      className="addlisting-header sticky top-0 z-50 flex h-16 w-full bg-white md:flex md:items-center lg:h-[72px] 2xl:h-20 4xl:h-24"
    >
      <div className="container-fluid flex w-full items-center justify-between">
        <Logo className="!text-gray-dark" />
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="!px-3 !py-[6px] text-xs !font-semibold capitalize text-gray md:!px-4 md:!py-2 md:text-sm 2xl:!px-6 2xl:!py-[10px] 2xl:text-base"
          >
            Questions
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="!px-3 !py-[6px] text-xs !font-semibold capitalize text-gray md:!px-4 md:!py-2 md:text-sm 2xl:!px-6 2xl:!py-[10px] 2xl:text-base"
            onClick={handleSaveExit}
          >
            Save & Exit
          </Button>
        </div>
      </div>
    </header>
  );
}
