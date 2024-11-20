'use client';

import clsx from 'clsx';
import { useState } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { ArrowDownIcon } from '@/components/icons/arrow-down';
import Radio from '@/components/ui/form-fields/radio';
import Counter from '@/components/ui/counter';
import Button from '@/components/ui/button';

interface selectedProps {
  adults: number;
  child: number;
  pets: boolean;
}

interface SelecBoxProps {
  className?: string;
  label?: string;
  defaultSelected: selectedProps;
  labelClassName?: string;
  onChange: ({}: selectedProps) => void;
}

export default function SelectBox({
  className,
  defaultSelected,
  onChange,
}: SelecBoxProps) {
  const [adults, setAdults] = useState(defaultSelected.adults);
  const [child, setChild] = useState(defaultSelected.child);
  const [pets, setPets] = useState(defaultSelected.pets);

  return (
    <div className={className}>
      <Listbox as="div">
        <div className="relative">
          <ListboxButton as="div">
            {({ open }) => (
              <button
                className={clsx(
                  'flex h-16 w-full cursor-pointer items-center justify-between rounded-b-lg border border-gray-lighter bg-white px-4 py-2.5 text-left uppercase text-gray-dark focus:outline-none xl:py-3',
                  open && 'border-gray-dark ring-[1px] ring-gray-900/20',
                )}
              >
                <span className="block">
                  {adults + child} <span className="ml-2">Guests</span>
                </span>
                <span
                  className={clsx(
                    'transition-transform duration-200',
                    open ? '-rotate-180' : 'rotate-0',
                  )}
                >
                  <ArrowDownIcon className="h-4 w-4 font-bold text-gray" />
                </span>
              </button>
            )}
          </ListboxButton>
          <ListboxOptions className="absolute left-0 mt-1 grid w-full grid-cols-1 gap-3 rounded-lg border border-gray-lighter bg-white p-6 text-base shadow-lg ring-1 ring-gray-lightest">
            <div className="flex w-full items-center justify-between">
              <div className="  text-sm xl:text-base">
                <h5 className="font-bold text-gray-dark">Adults</h5>
                <p className="font-normal text-gray xl:mt-1">Age 18+</p>
              </div>
              <Counter
                count={adults}
                countBy={1}
                onCount={(val) => setAdults(val)}
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="  text-sm xl:text-base">
                <h5 className="font-bold text-gray-dark">Children</h5>
                <p className="font-normal text-gray xl:mt-1">Age 1-7</p>
              </div>
              <Counter
                count={child}
                countBy={1}
                onCount={(val) => setChild(val)}
              />
            </div>
            <div className="flex items-center justify-between">
              <h5 className="  text-base font-bold text-gray-dark">Pets</h5>
              <div className="flex items-center gap-3 xl:gap-7">
                <Radio
                  readOnly
                  label="Yes"
                  checked={pets}
                  onChange={() => setPets(!pets)}
                  className="[&>div>div]:!p-0"
                  labelClassName="!text-sm xl:!text-base"
                  inputClassName={clsx(
                    pets &&
                      '!border-gray-lightest focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark',
                  )}
                />
                <Radio
                  readOnly
                  label="No"
                  checked={!pets}
                  onChange={() => setPets(!pets)}
                  className="[&>div>div]:!p-0"
                  labelClassName="!text-sm xl:!text-base"
                  inputClassName={clsx(
                    !pets &&
                      '!border-gray-lightest focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark',
                  )}
                />
              </div>
            </div>
            <ListboxOption className="mt-4" value={0}>
              <Button
                variant="solid"
                className="w-full"
                onClick={() =>
                  onChange({
                    adults: adults,
                    child: child,
                    pets: pets,
                  })
                }
              >
                Apply
              </Button>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
