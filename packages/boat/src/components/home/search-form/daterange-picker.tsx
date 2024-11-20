'use client';

import clsx from 'clsx';
import { ReactElement, useState } from 'react';
import DatePicker, { DatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DatePickerInputType = {
  label: string;
  icon?: ReactElement;
  containerClass?: string;
} & DatePickerProps;

export default function DatePickerInput({
  label,
  icon,
  containerClass,
  ...props
}: DatePickerInputType) {
  const [state, setState] = useState(false);

  return (
    <div className={clsx('relative', containerClass)}>
      {icon ? (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 sm:pl-6">
          {icon}
        </div>
      ) : null}
      <label
        className={clsx(
          'pointer-events-none absolute left-[60px] top-4 origin-[0] -translate-y-2 scale-90 transform text-gray-dark duration-300 xl:text-base 3xl:text-lg',
        )}
      >
        {label}
      </label>
      <DatePicker
        className={clsx(
          'block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2 pl-[60px] pt-6 text-sm font-semibold text-gray-dark transition duration-200 focus:outline-none focus:ring-0 md:pb-2.5 md:pt-6 md:text-base lg:rounded-xl 3xl:pb-3 3xl:pt-7 3xl:text-lg',
          props.className,
          state && '!border-gray-1000 !ring-[1px] !ring-gray-900/20',
        )}
        onFocus={(e) => e.target.blur()}
        onCalendarOpen={() => setState(true)}
        onCalendarClose={() => setState(false)}
        {...props}
      />
    </div>
  );
}
