'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Routes } from '@/config/routes';
import { LogoIcon } from '@/components/icons/logo';

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  return (
    <Link
      href={Routes.public.home}
      className={clsx(
        'brand-logo inline-flex w-full max-w-[120px] text-black focus:outline-none sm:text-white xl:max-w-[125px] 2xl:max-w-[135px] 3xl:max-w-[150px]',
        className,
      )}
      {...props}
    >
      <LogoIcon className="w-full" />
    </Link>
  );
};

export default Logo;
