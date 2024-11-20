'use client';

import { VendorTypes } from '@/types';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { HeartIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { ShareIcon } from '@/components/icons/share-icon';
import { useModal } from '@/components/modals/context';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';

interface ListingDetailsHeroBlockProps {
  vendor: VendorTypes;
}

// share icons
function ShareIcons() {
  const { openModal } = useModal();
  return (
    <div className="mt-1 hidden items-center gap-3 bg-white md:flex 3xl:gap-6">
      <Button
        className="!border-none !bg-gray-lightest !p-4 text-gray-dark hover:!bg-gray-dark hover:text-white"
        size="sm"
        variant="outline"
        rounded="pill"
        onClick={() => openModal('SHARE')}
      >
        <ShareIcon className="h-auto w-5" />
      </Button>
      <Button
        className="!border-none !bg-gray-lightest !p-4 text-gray-dark hover:!bg-gray-dark hover:text-white"
        size="sm"
        variant="outline"
        rounded="pill"
      >
        <HeartIcon className="h-auto w-5" />
      </Button>
    </div>
  );
}

function ShareMenu() {
  const { openModal } = useModal();
  return (
    <Menu as="div" className="relative md:hidden">
      <div>
        <MenuButton className="h-6 w-6 rounded-full border-none outline-none hover:ring-2 hover:ring-gray-lighter">
          <EllipsisHorizontalIcon className="h-6 w-6" />
        </MenuButton>
        <MenuItems className="absolute right-0">
          <div className="flex w-[150px] flex-col rounded-lg bg-white py-1 shadow-card">
            <MenuItem>
              <button
                onClick={() => openModal('SHARE')}
                className="border-gray-lightest py-2 text-base font-medium text-gray-dark hover:bg-gray-lightest"
              >
                Share Now
              </button>
            </MenuItem>
            <MenuItem>
              <button className="border-gray-lightest py-2 text-base font-medium text-gray-dark hover:bg-gray-lightest">
                Add to wishlist
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </div>
    </Menu>
  );
}

export default function ListingDetailsHeroBlock({
  vendor,
}: ListingDetailsHeroBlockProps) {
  return (
    <div className="flex justify-between border-b border-gray-lighter pb-6 md:pb-8 2xl:pb-10">
      <div>
        <p className="text-gray-dark">{vendor.location}</p>
        <Text
          tag="h2"
          className="mt-2 !text-2xl uppercase !leading-7 md:!text-[26px] md:!leading-10 2xl:!text-[28px] 4xl:!text-3xl"
        >
          {vendor.boatName}
        </Text>
        <div className="mt-3 flex items-center gap-2 leading-4 text-gray-dark md:mt-4">
          <p>{vendor.boatGuests} guests</p>
          <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-gray-dark"></span>
          <p>{vendor.boatCabins} cabins</p>
          <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-gray-dark"></span>
          <p>{vendor.boatBathrooms} bathrooms</p>
        </div>
      </div>
      <div className="relative">
        <ShareMenu />
        <ShareIcons />
      </div>
    </div>
  );
}
