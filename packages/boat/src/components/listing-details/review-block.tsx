'use client';

import { ReviewTypes, ReviewStatsTypes } from '@/types';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import ReviewCard from '@/components/ui/cards/review-card';
import ReviewStat from '@/components/ui/cards/review-stat';
import { useModal } from '@/components/modals/context';
import Section from '@/components/ui/section';
import Button from '@/components/ui/button';
import Text from '../ui/typography/text';

interface ReviewBlockTypes {
  reviewsData: {
    stats: ReviewStatsTypes;
    reviews: ReviewTypes[];
  };
}

export default function ReviewBlock({ reviewsData }: ReviewBlockTypes) {
  const { openModal } = useModal();
  return (
    <Section
      id="reviews"
      title="35 reviews"
      className="scroll-mt-20 py-5 xl:py-7"
      titleClassName="text-xl md:!text-[22px] 2xl:!text-2xl hidden md:block"
      rightElement={
        <Button
          size="xl"
          variant="outline"
          className="hidden !border-gray-dark !px-4 !py-[10px] !text-sm !font-bold !leading-[18px] text-gray-dark hover:bg-gray-1000 hover:text-white md:block md:border-gray md:!text-base lg:!px-[30px] lg:!py-[14px]"
          onClick={() => openModal('ADD_REVIEW')}
        >
          Add Review
        </Button>
      }
    >
      <Text tag="h2" className="mb-2 flex items-center gap-2 text-xl md:hidden">
        <StarIcon className="h-auto w-6" />
        4.9 - 35 Reviews
      </Text>
      <ReviewStat stats={reviewsData.stats} />
      <div className="md:mt-8">
        {reviewsData.reviews
          .slice(0, 3)
          .map((item: ReviewTypes, index: number) => (
            <ReviewCard
              key={`review-${index}`}
              avatar={item.avatar}
              name={item.name}
              date={item.date}
              location={item.location}
              rating={item.rating}
              review={item.review}
            />
          ))}
      </div>
      <div className="mt-8 hidden items-center justify-between md:flex xl:mt-12">
        <Button size="lg" variant="text" className="!p-0 !ring-0">
          <span className="flex items-center gap-6 font-medium text-gray-dark drop-shadow-sm hover:text-gray">
            <ArrowLeftIcon className="h-auto w-6" />
            Previous Page
          </span>
        </Button>
        <Button size="lg" variant="text" className="!p-0 !ring-0">
          <span className="flex items-center gap-6 font-medium text-gray-dark drop-shadow-sm hover:text-gray">
            Next Page
            <ArrowRightIcon className="h-auto w-6" />
          </span>
        </Button>
      </div>
    </Section>
  );
}
