'use client';

import { useRouter } from 'next/navigation';
import { PlusIcon } from '@heroicons/react/24/solid';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';
import { Routes } from '@/config/routes';

export default function DashboardHero() {
  const router = useRouter();
  return (
    <div className="mt-8 flex items-center justify-between lg:mt-12 2xl:mt-16">
      <div>
        <Text tag="h3" className="text-xl">
          Hello, Helene
        </Text>
        <Text className="mt-2 text-sm text-gray lg:mt-3">@frankiehelene</Text>
      </div>
      <div>
        <Button
          size="xl"
          rounded="pill"
          className="!p-2 capitalize text-white sm:rounded-md sm:!px-8 sm:!py-[10px]"
          onClick={() => router.push(Routes.public.addListing)}
        >
          <PlusIcon className="h-auto w-5 sm:mr-3" />
          <span className="hidden sm:block">Add listing</span>
        </Button>
      </div>
    </div>
  );
}
