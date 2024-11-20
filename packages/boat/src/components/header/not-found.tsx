'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import Logo from '@/components/ui/logo';

export default function NotFoundHeader() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-30 flex h-14 w-full bg-white py-5 md:flex md:h-20 md:items-center md:bg-transparent xl:h-24">
      <div className="container-fluid flex w-full items-center justify-between">
        <Logo className="!text-gray-dark" />
        <Button
          size="sm"
          variant="outline"
          className="!bg-white !px-3 !py-[6px] text-xs !font-semibold capitalize text-gray-dark md:!px-4 md:!py-2 md:text-sm 2xl:!px-6 2xl:!py-[10px] 2xl:text-base"
          onClick={router.back}
        >
          Back to home
        </Button>
      </div>
    </header>
  );
}
