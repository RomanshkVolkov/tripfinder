'use client';

import { ReviewStatsTypes, ReviewBarTypes } from '@/types';

interface ReviewStatProps {
  stats: ReviewStatsTypes;
}

// this section is the review percentage bar
function ReviewBar({ count, percent }: ReviewBarTypes) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <p className="text-sm capitalize text-gray-dark sm:text-base">
        {count && count} Star
      </p>
      <div className="w-28 overflow-hidden rounded-lg bg-gray-lighter sm:w-[200px]">
        <div
          className="h-1 rounded-lg bg-gray-dark transition-all duration-300 sm:h-[6px]"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-xs capitalize text-gray sm:text-sm">
        {percent > 9 ? percent : `0${percent}`} %
      </p>
    </div>
  );
}

export default function ReviewStat({ stats }: ReviewStatProps) {
  return (
    <div className="mt-8 hidden items-center md:mt-8 md:flex">
      <div className="flex-shrink-0 border-r-[1px] border-gray-lighter py-3 pr-5 md:pr-14">
        <h3 className="text-center text-3xl font-bold sm:text-6xl md:text-left">
          {stats.averageRating}
        </h3>
        <p className="mt-3 text-sm capitalize md:text-base">
          {stats.totalReview} Ratings
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-3 pl-5 md:pl-14">
        {stats.stars.map((st: ReviewBarTypes) => (
          <ReviewBar key={st.count} count={st.count} percent={st.percent} />
        ))}
      </div>
    </div>
  );
}
