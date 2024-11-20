'use client';

import Image from 'next/image';
import SubscriptionForm from '@/components/ui/form-fields/subscription-form';
import Text from '@/components/ui/typography/text';

export default function ComingSoon() {
  return (
    <div className="fixed inset-0 grid grid-cols-1 items-center justify-center md:grid-cols-2">
      <div className="px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16">
        <Text tag="h2" className="text-xl">
          We are creating something amazing
        </Text>
        <Text className="mt-4 md:mt-6">
          We will launce our page soon. In the meantime. Stay with us
        </Text>
        <div className="mt-10 md:mt-16">
          <SubscriptionForm className="w-full max-w-lg" />
        </div>
      </div>
      <div className="relative hidden h-full w-full md:block">
        <Image
          src="/images/coming-soon.png"
          alt="coming soon"
          fill
          className="bg-gray-lighter object-cover"
        />
      </div>
    </div>
  );
}
