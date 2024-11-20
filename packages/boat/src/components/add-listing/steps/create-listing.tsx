'use client';

import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useRouter } from 'next/navigation';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { stepAtom, storeAtom } from '@/components/add-listing/add-listing';
import { DuplicateIcon } from '@/components/icons/duplicate-icon';
import { CakeIcon } from '@/components/icons/cake-icon';
import Text from '@/components/ui/typography/text';

export default function CreateListing() {
  const router = useRouter();
  const setStep = useSetAtom(stepAtom);
  const setStore = useSetAtom(storeAtom);
  return (
    <>
      <div className="w-full md:w-[548px] xl:w-[648px]">
        <Text tag="h2" className="text-xl md:!text-2xl 2xl:!text-3xl">
          Welcome back Helene
        </Text>
        <Text
          tag="h3"
          className="mt-8 text-lg font-medium md:!text-xl 2xl:!text-2xl"
        >
          Start a new listing
        </Text>
        <div>
          <div
            onClick={() => {
              setStore(RESET);
              setStep(2);
            }}
            className="card-gradient mt-4 flex cursor-pointer items-center gap-5 rounded-md border border-gray-lighter p-6 font-bold text-gray-dark transition duration-200 hover:shadow-card md:p-8 lg:mt-6 lg:p-10 lg:text-xl 2xl:rounded-lg 2xl:p-12"
          >
            <CakeIcon className="h-auto w-8" />
            Create a new listing
          </div>
          <div className="card-gradient mt-4 flex cursor-pointer items-center gap-5 rounded-md border border-gray-lighter p-6 font-bold text-gray-dark transition duration-200 hover:shadow-card md:p-8 lg:mt-6 lg:p-10 lg:text-xl 2xl:rounded-lg 2xl:p-12">
            <DuplicateIcon className="h-auto w-8" />
            Duplicate an existing listing
          </div>
        </div>
      </div>
      <CreateListingFooter onBack={router.back} onNext={() => setStep(2)} />
    </>
  );
}
