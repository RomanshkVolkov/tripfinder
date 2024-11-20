'use client';

import clsx from 'clsx';
import { Testimonial } from '@/types';
import Rate from '@/components/ui/rating';

export default function TestimonialCard({
  name,
  description,
  location,
  rating,
  className = '',
}: Testimonial) {
  return (
    <div
      className={clsx(
        'card-gradient rounded-xl border-2 border-gray-200 px-6 py-6 3xl:px-8 3xl:py-8 4xl:px-12 4xl:py-10',
        className,
      )}
    >
      <p className="mb-5 border-b border-gray-200 pb-5 text-sm leading-[22px] text-[#222] md:leading-6 xl:text-base xl:leading-7 4xl:text-lg">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-gray-dark 3xl:text-base 4xl:text-lg">
            {name}
          </h3>
          <span className="text-sm capitalize leading-7 text-[#222] 3xl:text-base">
            {location}
          </span>
        </div>
        <Rate
          allowHalf
          allowClear
          defaultValue={rating}
          characterClassName="h-[14px] w-[14px] 3xl:h-[18px] 3xl:w-[18px]"
        />
      </div>
    </div>
  );
}
