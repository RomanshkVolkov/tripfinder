'use client';

import { vendorData } from 'public/data/listing-details';
import Image from 'next/image';
import { InstaSolidIcon } from '@/components/icons/instagram-solid-icon';
import { TwitterIcon } from '@/components/icons/twitter-icon';
import Text from '@/components/ui/typography/text';

export default function VendorProfileCard() {
  return (
    <div className="relative flex items-center justify-center px-4 text-center md:mt-8 md:h-[380px] md:justify-between md:overflow-hidden md:rounded-lg md:px-0 md:shadow-card lg:h-[410px] 2xl:mt-12 2xl:h-[460px]">
      <div className="z-10 mt-20 flex h-auto w-full max-w-[343px] flex-col items-center justify-center rounded-lg bg-white p-8 shadow-card md:mt-0 md:h-full md:rounded-none md:shadow-none 2xl:max-w-[537px]">
        <div className="relative inline-block h-[120px] w-[120px] overflow-hidden rounded-full lg:h-40 lg:w-40">
          <Image
            src={vendorData.vendor.img}
            alt={vendorData.vendor.name}
            fill
            priority
            sizes="(min-width: 320) 100vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <Text tag="h3" className="mt-5 text-lg">
          Hi, I’m {vendorData.vendor.name}
        </Text>
        <Text className="mt-2 !text-gray">{vendorData.vendor.username}</Text>
        <a
          rel="noreferrer"
          href="https://instagram.com"
          className="relative mt-5 inline-flex items-center text-base font-normal"
        >
          <InstaSolidIcon className="mr-2 h-3 w-3" />
          {vendorData.vendor.instagramUserName}
          <span className="absolute bottom-0 left-0 w-full border-t border-gray-dark"></span>
        </a>
        <a
          rel="noreferrer"
          href="https://twitter.com"
          className="relative mt-2 inline-flex items-center text-base font-normal"
        >
          <TwitterIcon className="mr-2 h-3 w-3" />
          {vendorData.vendor.twitterUserName}
          <span className="absolute bottom-0 left-0 w-full border-t border-gray-dark"></span>
        </a>
      </div>
      <div className="absolute inset-0 h-80 md:relative md:h-full md:w-full">
        <Image
          src={vendorData.vendor.coverImage}
          alt={vendorData.vendor.name}
          fill
          sizes="(min-width: 320) 100vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
