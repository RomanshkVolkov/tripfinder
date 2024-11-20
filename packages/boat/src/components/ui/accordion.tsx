'use client';

import clsx from 'clsx';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';
import useCollapse from '@/hooks/use-collapse';
import Text from '@/components/ui/typography/text';

interface AccordionProps {
  title?: string;
  text?: string;
}

export default function Accordion({ title, text }: AccordionProps) {
  const { open, targetEl, toggle } = useCollapse();
  return (
    <div className="w-full border-b border-b-gray-lighter py-4 lg:py-6 2xl:py-9">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between   text-base font-bold lg:text-xl 2xl:text-2xl"
      >
        <span>{title}</span>
        <span
          className={clsx(
            'transform transition-all duration-200',
            open ? 'rotate-180' : 'rotate-0',
          )}
        >
          {open ? (
            <MinusCircleIcon className="h-auto w-5 lg:w-8" />
          ) : (
            <PlusCircleIcon className="h-auto w-5 lg:w-8" />
          )}
        </span>
      </button>
      <div ref={targetEl} className="hidden pr-0 pt-4 md:pr-10 xl:pr-20">
        <Text>{text}</Text>
      </div>
    </div>
  );
}
