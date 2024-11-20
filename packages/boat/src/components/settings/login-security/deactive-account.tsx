'use client';

import Button from '@/components/ui/button';
import Text from '@/components/ui/typography/text';

export default function DeactiveAccount() {
  return (
    <div>
      <Text
        tag="h3"
        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
      >
        Account
      </Text>
      <div className="flex justify-between">
        <div className="flex gap-4 lg:items-center lg:gap-5">
          <Text tag="h6" className="text-sm capitalize">
            Deactivate your account
          </Text>
        </div>
        <Button
          variant="text"
          className="flex-shrink-0 !p-0 !font-bold capitalize text-red focus:!ring-0 md:text-base"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
