'use client';

import { useEffect } from 'react';
import useAuth from '@/hooks/use-auth';
import { Routes } from '@/config/routes';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/header/dashboard';
import MobileNav from '@/components/ui/mobile-nav';
import Footer from '@/components/footer/footer';

export default function UserLayout({ children }: React.PropsWithChildren<{}>) {
  const router = useRouter();
  // const { isAuthorized } = useAuth();

  // Note: need this check if someone manually clear their cookie from browser
  // useEffect(() => {
  //   if (!isAuthorized) {
  //     router.push(Routes.public.home);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthorized]);

  return (
    <>
      <DashboardHeader />
      <main className="flex-grow">{children}</main>
      <Footer className="hidden md:block" />
      <MobileNav />
    </>
  );
}
