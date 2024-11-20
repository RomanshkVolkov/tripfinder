'use client';

import clsx from 'clsx';
import { Fragment } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import InputIconOnClear from '@/components/ui/form-fields/field-clear-btn';

const buttonClasses = {
  base: 'relative flex w-full cursor-pointer items-center text-left text-sm capitalize text-gray',
  variant: {
    outline: {
      base: 'py-[9px] 2xl:py-3 px-4 rounded-md border border-gray-lighter placeholder:text-gray-500 bg-white focus:outline-none',
    },
  },
};

const arrowIconClasses = {
  outline: 'right-5',
  text: 'right-0',
};

export type OptionsType = {
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

interface SelectBoxPropsType {
  options: OptionsType[];
  className?: string;
  optionIcon?: boolean;
  label?: string;
  value: { label: string; [key: string]: any };
  labelClassName?: string;
  buttonClassName?: string;
  arrowIconClassName?: string;
  optionsContainerClassName?: string;
  ClearableClassName?: string;
  onChange: (value: unknown) => void;
  onClearClick?: (event: React.MouseEvent) => void;
  variant?: keyof typeof buttonClasses.variant;
  clearable?: boolean;
}

export default function SelectBox({
  label,
  value,
  options,
  onChange,
  clearable,
  className,
  onClearClick,
  labelClassName,
  buttonClassName,
  arrowIconClassName,
  optionIcon = false,
  variant = 'outline',
  ClearableClassName,
  optionsContainerClassName,
}: SelectBoxPropsType) {
  return (
    <div className={clsx('relative', className)}>
      <label
        htmlFor="countries_disabled"
        className={clsx(
          'block text-base font-bold text-gray-dark',
          labelClassName,
        )}
      >
        {label}
      </label>
      <Listbox value={value} onChange={onChange}>
        <ListboxButton as="div">
          {({ open, value }) => (
            <button
              className={clsx(
                buttonClasses.base,
                buttonClasses.variant[variant].base,
                buttonClassName,
                open && '!border-gray-1000 !ring-[1px] !ring-gray-900/20',
              )}
            >
              {optionIcon && <span className="block pr-4">{value.icon}</span>}
              <span className="block flex-grow truncate">{value.label}</span>
              <span
                className={clsx(
                  'absolute inset-y-0 flex items-center transition-transform duration-200',
                  arrowIconClasses[variant],
                  open && 'rotate-180',
                  arrowIconClassName,
                )}
              >
                <ChevronDownIcon
                  className="h-5 w-5 text-gray"
                  aria-hidden="true"
                />
              </span>
              {clearable && (
                <>
                  {value && (
                    <InputIconOnClear
                      size="xl"
                      onClick={onClearClick}
                      className={clsx(
                        'absolute right-12 top-1/2 -translate-y-1/2 bg-transparent',
                        ClearableClassName,
                      )}
                    />
                  )}
                </>
              )}
            </button>
          )}
        </ListboxButton>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            className={clsx(
              'absolute top-full z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
              optionsContainerClassName,
            )}
          >
            {options.map((item, index) => (
              <ListboxOption
                key={index}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pr-4 disabled:opacity-50 ${
                    active ? 'bg-gray-lightest' : 'text-gray-dark'
                  } ${optionIcon ? 'pl-10' : 'pl-4'}`
                }
                value={item}
                disabled={item.disabled}
              >
                {({ selected }) => (
                  <>
                    {optionIcon && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-[18px]  text-gray-light">
                        {item.icon}
                      </span>
                    )}
                    <span
                      className={clsx('block truncate font-normal text-gray', {
                        'font-medium': selected,
                        'pl-3.5': optionIcon,
                      })}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
}
