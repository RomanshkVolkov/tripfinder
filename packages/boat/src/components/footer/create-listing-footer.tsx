'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Button from '@/components/ui/button';

interface BackNextFooterTypes {
  onNext?: () => void;
  onBack?: () => void;
}

export default function CreateListingFooter({
  onNext,
  onBack,
}: BackNextFooterTypes) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 w-full bg-white">
      <div className="container-fluid flex items-center justify-between py-3 lg:py-4">
        <Button
          type="button"
          variant="text"
          className="!px-0 text-sm !font-bold capitalize focus:!ring-0 lg:text-base"
          onClick={onBack}
        >
          <ChevronLeftIcon className="mr-2 h-auto w-4" />
          Back
        </Button>
        <Button
          type="submit"
          className="text-sm !font-bold capitalize focus:!ring-0 lg:text-base"
          onClick={onNext}
        >
          Next <ChevronRightIcon className="ml-2 h-auto w-4" />
        </Button>
      </div>
    </div>
  );
}
