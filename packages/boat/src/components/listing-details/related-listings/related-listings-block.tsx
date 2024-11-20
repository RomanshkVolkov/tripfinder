'use client';

import { topBoats } from 'public/data/top-boats';
import ListingCard from '@/components/ui/cards/listing';
import SeeMore from '@/components/ui/see-more';
import Section from '@/components/ui/section';

export default function RelatedListingBlock() {
  return (
    <Section
      className="pt-5 xl:pt-7"
      headerClassName="items-end gap-5"
      title="Similar yachts you may like"
      titleClassName="text-xl md:!text-[22px] 2xl:!text-2xl"
      rightElement={<SeeMore className="hidden md:block" />}
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 pt-7 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:gap-y-10">
        {topBoats.slice(5, 9).map((item, index) => (
          <ListingCard
            id={`related-listing-${index}`}
            key={`related-listing-${index}`}
            slides={item.thumbnail}
            time={item.time}
            caption={item.caption}
            title={item.title}
            slug={item.slug}
            location={item.location}
            price={item.price}
            ratingCount={item.ratingCount}
            rating={item.rating}
            user={item.user}
          />
        ))}
      </div>
    </Section>
  );
}
