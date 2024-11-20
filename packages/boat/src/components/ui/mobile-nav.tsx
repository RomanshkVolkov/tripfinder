'use client';

import Link from 'next/link';
import { useAtom } from 'jotai';
import useAuth from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import {
  HomeIcon,
  UserCircleIcon,
  HeartIcon,
  Bars3CenterLeftIcon,
} from '@heroicons/react/24/outline';
import { Routes } from '@/config/routes';
import { MobileMenuSearchIcon } from '@/components/icons/mobile-menu-search';
import { drawerStateAtom } from '@/components/drawers/view';
import { useModal } from '@/components/modals/context';
import ActionIcon from '@/components/ui/action-icon';

export default function MobileNav() {
  const { isAuthorized } = useAuth();
  const router = useRouter();
  const { openModal } = useModal();
  const [drawerSate, setDrawerState] = useAtom(drawerStateAtom);
  return (
    <div className="sticky inset-x-0 bottom-0 z-30 grid h-16 w-full grid-cols-5 items-center justify-center gap-2 bg-white shadow-menu-shadow md:hidden">
      <div className="flex items-center justify-center">
        <Link href={Routes.public.home} className="inline-block hover:text-red">
          <HomeIcon className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={Routes.public.explore}
          className="inline-block hover:text-red"
        >
          <MobileMenuSearchIcon className="h-5 w-5" />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => router.push(Routes.public.dashboard)}
          className="inline-block hover:text-red"
        >
          <UserCircleIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={Routes.public.dashboard}
          className="inline-block hover:text-red"
        >
          <HeartIcon className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <ActionIcon
          variant="text"
          className="inline-block hover:text-red focus:!ring-0"
          onClick={() =>
            setDrawerState({
              ...drawerSate,
              isOpen: true,
              placement: 'right',
              view: 'SIDE_MENU',
            })
          }
        >
          <Bars3CenterLeftIcon className="h-6 w-6 rotate-180" />
        </ActionIcon>
      </div>
    </div>
  );
}
