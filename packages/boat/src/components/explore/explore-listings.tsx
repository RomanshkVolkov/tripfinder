'use client';

import { useState } from 'react';
import { topBoats } from 'public/data/top-boats';
import ListingCard from '@/components/ui/cards/listing';
import Button from '@/components/ui/button';

export default function ExploreListings() {
  const [list, setList] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setList((prevList) => prevList + 10);
      setIsLoading(false);
    }, 600);
  }
  return (
    <div>
      <div className="mt-1 grid grid-cols-1 gap-x-5 gap-y-8 xs:grid-cols-2 lg:grid-cols-3 3xl:gap-y-10 4xl:grid-cols-4">
        {topBoats.slice(0, list).map((item, index) => (
          <ListingCard
            key={`explore-boat-${index}`}
            id={`explore-boat-${index}`}
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
      {topBoats.length >= list && (
        <Button
          size="xl"
          type="button"
          isLoading={isLoading}
          onClick={() => handleLoadMore()}
          className="relative bottom-0 left-1/2 z-30 mx-auto mt-16 -translate-x-1/2 px-6 py-2.5 md:sticky md:bottom-10 md:text-base xl:relative xl:bottom-0"
        >
          Load more
        </Button>
      )}
    </div>
  );
}
