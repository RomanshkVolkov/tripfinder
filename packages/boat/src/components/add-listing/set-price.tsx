'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import ActionIcon from '@/components/ui/action-icon';
import Text from '@/components/ui/typography/text';

interface SetPriceTypes {
  value: number;
  countBy: number;
  onChange: (key: number) => void;
}

export default function SetPrice({ value, countBy, onChange }: SetPriceTypes) {
  return (
    <div className="card-gradient flex items-center justify-between rounded-lg border border-gray-lighter px-6 py-5 text-sm text-gray md:text-base lg:rounded-xl lg:p-9">
      <div className="flex items-center gap-2">
        <Text tag="h3" className="text-2xl">
          ${value}
        </Text>
        per day
      </div>
      <div className="flex items-center gap-2">
        <ActionIcon
          size="sm"
          variant="outline"
          rounded="lg"
          className="!h-6 !w-6 !p-1 sm:!h-9 sm:!w-9"
          onClick={() => value > 0 && onChange(value - countBy)}
        >
          <MinusIcon className="h-4 w-4 xl:h-5 xl:w-5" />
        </ActionIcon>
        <ActionIcon
          size="sm"
          variant="outline"
          rounded="lg"
          className="!h-6 !w-6 !p-1 sm:!h-9 sm:!w-9"
          onClick={() => onChange(value + countBy)}
        >
          <PlusIcon className="h-4 w-4 xl:h-5 xl:w-5" />
        </ActionIcon>
      </div>
    </div>
  );
}
