'use client';

import Calendar from '@/components/listing-details/calendar/calendar';
import Section from '@/components/ui/section';

export default function CalenderBlock() {
  const dates = {
    checkin: new Date(),
    checkout: new Date(new Date().setDate(new Date().getDate() + 12)),
  };

  return (
    <Section
      className="py-5 xl:py-7"
      title="Availability"
      titleClassName="text-xl md:!text-[22px] 2xl:!text-2xl mb-2"
      description="Santa Maria Maggiore, Milazzo"
      descriptionClassName="!text-gray !text-base"
    >
      <ul className="pt-4 md:pt-6">
        <li className="flex items-center gap-3 text-sm text-gray-dark">
          {' '}
          <span className="block h-4 w-4 rounded-sm bg-[#eaeaea]"></span>
          Booked Dates
        </li>
      </ul>
      <Calendar
        dates={dates}
        noMonth={3}
        className="mt-7 min-h-[324px] md:min-h-[400px] xl:min-h-[424px]"
        monthContainerClassName="month"
      />
    </Section>
  );
}
