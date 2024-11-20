'use client';

import { vendorData } from 'public/data/listing-details';
import { reviewsData } from 'public/data/reviews';
import { useAtom } from 'jotai';
import { drawerStateAtom } from '@/components/drawers/view';
import { Staricon } from '@/components/icons/star-icon';
import Button from '@/components/ui/button';

export default function ReserveBottomMenu() {
  const [drawerSate, setDrawerState] = useAtom(drawerStateAtom);
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex w-full items-center justify-between bg-white px-4 py-3 shadow-menu-shadow sm:px-6 lg:hidden">
      <div>
        <p className="font-bold text-gray-dark">${vendorData.price} / night</p>
        <p className="inline-flex items-center gap-2 text-sm text-gray-dark">
          <Staricon className="xl:w-h-5 h-4 w-4 xl:h-5" />
          <span>{reviewsData.stats.averageRating}</span>
          <span>( {reviewsData.stats.totalReview} reviews )</span>
        </p>
      </div>
      <Button
        size="xl"
        rounded="lg"
        type="submit"
        variant="solid"
        onClick={() =>
          setDrawerState({
            ...drawerSate,
            isOpen: true,
            placement: 'bottom',
            view: 'BOOKING_FORM',
            customSize: '100%',
          })
        }
        className="font-semibold tracking-wide"
      >
        Reserve
      </Button>
    </div>
  );
}
