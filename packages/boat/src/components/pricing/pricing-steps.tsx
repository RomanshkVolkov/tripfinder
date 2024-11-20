'use client';

import {
  ChatBubbleLeftRightIcon,
  BoltIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import Text from '@/components/ui/typography/text';

const steps = [
  {
    icon: <ChatBubbleLeftRightIcon className="h-auto w-9 md:w-11" />,
    title: 'Share team inboxes',
    text: 'Browse our 5,000 designer dresses and accessories online or at our Melbourne warehouse.',
  },
  {
    icon: <BoltIcon className="h-auto w-9 md:w-11" />,
    title: 'Deliver instant answers',
    text: 'Browse our 5,000 designer dresses and accessories online or at our Melbourne warehouse.',
  },
  {
    icon: <Square3Stack3DIcon className="h-auto w-9 md:w-11" />,
    title: 'Manage your team',
    text: 'Browse our 5,000 designer dresses and accessories online or at our Melbourne warehouse.',
  },
];

export default function PricingSteps() {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container-fluid grid w-full !max-w-[1296px] justify-center gap-x-4 py-4 sm:grid-cols-2 md:py-8 lg:grid-cols-3 lg:gap-6 lg:py-12 2xl:py-16 3xl:px-0">
        {steps.map((item) => (
          <div key={item.title} className="py-11 text-center xl:py-14">
            <div className="flex items-center justify-center">{item.icon}</div>
            <Text tag="h5" className="mt-9 text-base xl:mt-11 xl:text-xl">
              {item.title}
            </Text>
            <Text className="m-auto mt-3 w-full max-w-[227px] text-sm capitalize leading-[22px] text-gray-dark md:max-w-[260px] xl:leading-7">
              {item.text}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
