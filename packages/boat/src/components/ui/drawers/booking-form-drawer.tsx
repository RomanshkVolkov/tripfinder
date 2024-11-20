'use client';

import { vendorData } from 'public/data/listing-details';
import { reviewsData } from 'public/data/reviews';
import { useAtom } from 'jotai';
import { XMarkIcon } from '@heroicons/react/24/solid';
import BookingForm from '@/components/listing-details/booking-form/booking-form';
import { drawerStateAtom } from '@/components/drawers/view';
import ActionIcon from '@/components/ui/action-icon';

export default function BookingFormModal() {
  const [drawerSate, setDrawerState] = useAtom(drawerStateAtom);
  return (
    <div className="w-full bg-white">
      <div className="container-fluid sticky top-0 z-10 flex h-14 w-full items-center justify-end bg-white shadow-sm">
        <ActionIcon
          variant="outline"
          size="sm"
          rounded="full"
          className="md:h-8 md:w-8"
          onClick={() =>
            setDrawerState({
              ...drawerSate,
              isOpen: false,
            })
          }
        >
          <XMarkIcon className="h-4 w-4" />
        </ActionIcon>
      </div>
      <BookingForm
        price={vendorData.price}
        averageRating={reviewsData.stats.averageRating}
        totalReviews={reviewsData.stats.totalReview}
        className="mx-auto mt-5 w-full max-w-lg !border-none !shadow-none"
      />
    </div>
  );
}
