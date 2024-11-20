'use client';

import { topBoats } from 'public/data/top-boats';
import { Fragment, useState } from 'react';
import { TabGroup } from '@headlessui/react';
import { TabItem, Tablist, TabPanel, TabPanels } from '@/components/ui/tab';
import DirectContactCard from '@/components/profile//direct-contact-card';
import ListingCard from '@/components/ui/cards/listing';
import Contact from '@/components/profile/contact';
import Text from '@/components/ui/typography/text';

const tabData = [
  {
    title: 'Listing',
    path: 'listing',
  },
  {
    title: 'Favourite',
    path: 'favourite',
  },
  {
    title: 'Contact',
    path: 'contact',
  },
];

export default function ProfileListBlock() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="my-12 lg:my-16">
      <TabGroup
        as={Fragment}
        selectedIndex={selected}
        onChange={(val) => setSelected(val)}
      >
        <Tablist className="relative flex w-full items-center gap-8 lg:gap-14">
          {tabData?.map((item) => (
            <TabItem key={item.path} motionLayoutId="profileTab">
              {item.title}
            </TabItem>
          ))}
          <div className="absolute bottom-0 left-0 h-0.5 w-full rounded-xl bg-gray-lightest lg:h-1"></div>
        </Tablist>
        <TabPanels className="mt-5 lg:mt-8">
          <TabPanel>
            <div className="md:gap- grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 sm:gap-y-7 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-8">
              {topBoats.slice(0, 12).map((item, index) => (
                <ListingCard
                  id={`profile-listing-cards-${index}`}
                  key={`profile-listing-cards-${index}`}
                  slides={item.thumbnail}
                  time={item.time}
                  caption={item.caption}
                  title={item.title}
                  slug={item.slug}
                  location={item.location}
                  price={item.price}
                  ratingCount={item.ratingCount}
                  rating={item.rating}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:gap- grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 sm:gap-y-7 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-8">
              {topBoats.slice(0, 4).map((item, index) => (
                <ListingCard
                  id={`profile-favourite-cards-${index}`}
                  key={`profile-favourite-cards-${index}`}
                  slides={item.thumbnail}
                  time={item.time}
                  caption={item.caption}
                  title={item.title}
                  slug={item.slug}
                  location={item.location}
                  price={item.price}
                  ratingCount={item.ratingCount}
                  rating={item.rating}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <Text tag="h4" className="text-xl">
              Send Message
            </Text>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-[1fr_0.5fr]">
              <Contact />
              <DirectContactCard />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
