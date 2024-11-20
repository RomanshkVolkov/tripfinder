'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';

interface LocationInputType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'text' | 'email' | 'url' | 'search' | 'password' | 'number';
  label: string;
  className?: string;
  icon: React.ReactNode;
}

const LocationInput = forwardRef<HTMLInputElement, LocationInputType>(
  ({ label, icon, className = '', ...inputProps }, ref) => {
    return (
      <div className={clsx('relative', className)}>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 sm:pl-6">
          {icon}
        </div>
        <input
          ref={ref}
          type="text"
          className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-1 pl-[60px] pt-6 font-semibold text-gray-dark focus:border-gray-dark focus:outline-none focus:ring-[1px] focus:ring-gray-900/20 md:pb-2.5 md:pt-6 md:text-base lg:rounded-xl 3xl:pb-4 3xl:pt-7 4xl:pb-3 4xl:text-lg"
          placeholder=" "
          {...inputProps}
        />
        <label className="pointer-events-none absolute left-[60px] top-4 z-10 origin-[0] -translate-y-2 scale-75 transform text-gray-dark duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-2 peer-focus:scale-90 peer-focus:text-base peer-focus:text-gray 4xl:text-lg">
          {label}
        </label>
      </div>
    );
  },
);

LocationInput.displayName = 'LocationInput';
export default LocationInput;
