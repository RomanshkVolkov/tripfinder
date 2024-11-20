'use client';

import Text from '@/components/ui/typography/text';

interface PricingCardTypes {
  data: {
    id: string;
    title: string;
    order: number | null;
    last: number;
    price: number | null;
  };
}

export default function StatCard({ data }: PricingCardTypes) {
  return (
    <div className="card-gradient rounded-lg border-2 border-gray-lighter p-6 transition-all duration-200 hover:shadow-card md:rounded-xl md:p-8 lg:p-11 2xl:p-14">
      <Text className="text-sm text-gray md:!text-sm 2xl:!text-base">
        {data.title}
      </Text>
      <Text
        tag="h2"
        className="py-2 text-xl md:!text-[22px] lg:py-4 xl:py-5 2xl:!text-[26px] 4xl:!text-3xl"
      >
        {data.order && <span>{data.order}</span>}
        {data.price && <span>${data.price}</span>}
      </Text>
      <Text className="text-sm text-gray md:!text-sm 2xl:!text-base">
        vs. {data.last} last period
      </Text>
    </div>
  );
}
