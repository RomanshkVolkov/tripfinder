'use client';

import clsx from 'clsx';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import Button from '@/components/ui/button';

interface CounerProps {
  count: number;
  onCount: (key: number) => void;
  countBy: number;
  buttonClassName?: string;
}

export default function Counter({
  count,
  onCount,
  countBy,
  buttonClassName = '!rounded-full !p-2',
}: CounerProps) {
  return (
    <div className="flex items-center gap-4">
      <Button
        size="sm"
        variant="outline"
        className={clsx(buttonClassName)}
        onClick={() => count > 0 && onCount(count - countBy)}
      >
        <MinusIcon className="h-4 w-4 xl:h-5 xl:w-5" />
      </Button>
      <p className="text-4 text-center   font-normal text-gray">
        {count < 10 ? `0${count}` : count}
      </p>
      <Button
        size="sm"
        variant="outline"
        className={clsx(buttonClassName)}
        onClick={() => onCount(count + countBy)}
      >
        <PlusIcon className="h-4 w-4 xl:h-5 xl:w-5" />
      </Button>
    </div>
  );
}
