'use client';

import { SpecificationTypes } from '@/types';
import RevealContent from '@/components/ui/revel-content';
import Section from '@/components/ui/section';

interface SpecificationsProps {
  specifications: SpecificationTypes;
}

export default function SpecificationBlock({
  specifications,
}: SpecificationsProps) {
  return (
    <Section
      className="py-5 xl:py-7"
      title="specifications"
      titleClassName="text-xl md:!text-[22px] 2xl:!text-2xl mb-2 md:mb-0"
    >
      <RevealContent defaultHeight={290} buttonText="View more">
        <div className="mt-1">
          {specifications.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-1 gap-[2px] border-b border-gray-lighter py-2 leading-6 sm:grid-cols-2 sm:gap-1 sm:py-3 md:py-4 lg:grid-cols-1 lg:gap-2 xl:grid-cols-2"
            >
              <span className="text-gray opacity-80 sm:text-secondary sm:opacity-100 lg:text-gray lg:opacity-80 xl:text-secondary xl:opacity-100">
                {item.name}
              </span>
              <span className="text-secondary sm:text-end lg:text-left xl:text-end">
                {item.details}
              </span>
            </div>
          ))}
        </div>
      </RevealContent>
    </Section>
  );
}
