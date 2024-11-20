'use client';

import clsx from 'clsx';
import { useAtom } from 'jotai';
import { Routes } from '@/config/routes';
import { useRouter, useSearchParams } from 'next/navigation';
import Manufacturer from '@/components/explore/manufacturer';
import LocationInputFilter from '@/components/explore/location-input-filter';
import FreeCancellation from '@/components/explore/free-cancellation-filter';
import BoatTypeFilter from '@/components/explore/boat-type-filter';
import WithCrewFilter from '@/components/explore/with-crew-filter';
import TripdateFilter from '@/components/explore/tripdate-filter';
import CategoryFilter from '@/components/explore/category-filter';
import DistanceFilter from '@/components/explore/distance-filter';
import PriceFilter from '@/components/explore/price-filter';
import GuestFilter from '@/components/explore/guest-filter';
import { drawerStateAtom } from '@/components/drawers/view';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';
import { Suspense, useEffect, useState } from 'react';
import Loader from '../ui/loader/loader';

interface FilterTypes {
  className?: string;
}

export default function Filter({ className }: FilterTypes) {
  const router = useRouter();
  let [drawerSate, setDrawerState] = useAtom(drawerStateAtom);
  const searchParams = useSearchParams();
  let params = searchParams?.toString();
  const [state, setState] = useState(false);

  // reset button true or false
  useEffect(() => {
    if (params) {
      setState(true);
    } else {
      setState(false);
    }
  }, [params]);

  return (
    <div
      className={clsx('h-full overflow-y-auto bg-white xl:px-0.5', className)}
    >
      <div className="mb-4 flex items-center justify-between px-5 py-2 pt-3 uppercase md:px-7 xl:px-0 xl:pt-0">
        <Text tag="h5" className="leading-8">
          Filter
        </Text>
        {state && (
          <Button
            type="reset"
            variant="text"
            className="hidden !p-0 text-base text-gray focus:!ring-0 sm:block"
            onClick={() => router.push(Routes.public.explore)}
          >
            Reset
          </Button>
        )}
        <Button
          type="reset"
          variant="text"
          className="!p-0 text-base text-gray focus:!ring-0 sm:hidden"
          onClick={() =>
            setDrawerState({
              ...drawerSate,
              isOpen: false,
            })
          }
        >
          Close
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-8 px-5 pb-3 md:px-7 xl:p-0 xl:pb-0">
        <Suspense fallback={<Loader />}>
          <LocationInputFilter />
          <TripdateFilter />
          <BoatTypeFilter />
          <CategoryFilter />
          <DistanceFilter />
          <Manufacturer />
          <PriceFilter />
          <GuestFilter />
          <WithCrewFilter />
          <FreeCancellation />
        </Suspense>
      </div>
      <div className="sticky inset-x-0 bottom-0 z-10 mt-4 flex items-center justify-between bg-white px-5 py-3 uppercase shadow-card sm:hidden md:px-7 xl:px-0">
        <div>
          {state && (
            <Button
              type="reset"
              variant="text"
              className="!p-0 text-base text-gray underline focus:!ring-0"
              onClick={() => router.push(Routes.public.explore)}
            >
              Reset
            </Button>
          )}
        </div>
        <Button
          variant="solid"
          rounded="DEFAULT"
          size="xl"
          className="!px-4 font-semibold"
          onClick={() =>
            setDrawerState({
              ...drawerSate,
              isOpen: false,
            })
          }
        >
          Show Items
        </Button>
      </div>
    </div>
  );
}
