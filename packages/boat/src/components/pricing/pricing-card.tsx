'use client';

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Button from '@/components/ui/button';
import { CrownIcon } from '@/components/icons/crown-icon';

interface PricingCardProps {
  pricingData: {
    isSuggested: boolean;
    price: number;
    title: string;
    description: string;
    list: {
      text: string;
      inPlan: boolean;
    }[];
  };
}

export default function PricingCard({ pricingData }: PricingCardProps) {
  return (
    <div
      className={clsx(
        'relative w-full rounded-md border border-gray-lighter p-8 lg:rounded-xl lg:p-10 xl:p-12',
        pricingData.isSuggested && 'md:shadow-lg',
      )}
    >
      {pricingData.isSuggested && (
        <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md bg-[#52ACFF] px-3 py-2 text-white sm:left-12 sm:right-auto sm:top-0 sm:-translate-y-1/2">
          <CrownIcon className="h-auto w-5" />
          <span className="text-xs font-bold md:text-sm">Suggested</span>
        </div>
      )}
      <div>
        <h2 className="text-3xl font-bold leading-[-2px] text-gray-dark lg:text-[40px]">
          $ {pricingData.price}
          <span className="text-2xl font-normal">/month</span>{' '}
        </h2>
        <h3 className="mt-4 text-2xl font-bold capitalize text-gray-dark lg:mt-6 lg:text-3xl">
          {pricingData.title}
        </h3>
        <p className="mt-3 text-base font-normal text-gray-dark first-letter:capitalize">
          {pricingData.description}
        </p>
        <Button
          size="xl"
          className="mt-7 w-full !text-sm !font-bold capitalize lg:mt-9 lg:!text-base lg:!leading-[26px]"
        >
          get started
        </Button>
      </div>
      <ul className="mt-8 lg:mt-6">
        {pricingData.list.map((item) => (
          <li
            key={item.text}
            className="flex items-center py-2 text-sm font-normal capitalize leading-6 first:pt-0 last:pb-0 lg:text-base"
          >
            {item.inPlan ? (
              <CheckCircleIcon className="h-4 w-4 rounded-full bg-white text-green-400 lg:h-5 lg:w-5" />
            ) : (
              <span>
                <XCircleIcon className="h-4 w-4 rounded-full bg-white text-red lg:h-5 lg:w-5" />
              </span>
            )}
            <span className="ml-3 inline-block text-gray-dark">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
