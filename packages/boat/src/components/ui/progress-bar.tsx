'use client';

import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { stepAtom } from '@/components/add-listing/add-listing';

export default function ProgressBar() {
  const step = useAtomValue(stepAtom);
  return (
    <div
      className={clsx(
        'fixed inset-x-0 bottom-[60px] z-20 w-full bg-gray-lighter lg:bottom-[72px]',
        step === 7 && 'hidden',
      )}
    >
      <span
        className="block h-[3px] bg-gray-dark transition-all duration-200"
        style={{ width: `${(100 / 7) * step}%` }}
      ></span>
    </div>
  );
}
