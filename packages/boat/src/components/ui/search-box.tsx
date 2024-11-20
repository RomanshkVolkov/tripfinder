'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import InputIconOnClear from '@/components/ui/form-fields/field-clear-btn';
import { useQueryParam } from '@/hooks/use-query-param';
import { useModal } from '@/components/modals/context';
import ActionIcon from '@/components/ui/action-icon';

interface SearchboxProps {
  className?: string;
}

export default function Searchbox({ className }: SearchboxProps) {
  const { closeModal } = useModal();
  const searchParams = useSearchParams();
  const search = searchParams?.get('q');
  let [state, setState] = useState('');
  const { updateQueryparams, clearFilter } = useQueryParam();
  const [isClearable, setIsClearable] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (state) {
      updateQueryparams('q', state);
      closeModal();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // clearable icon true or false
  useEffect(() => {
    if (state) {
      setIsClearable(true);
    } else {
      setIsClearable(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // if already exists in the url
  useEffect(() => {
    if (search) {
      setState(search);
    } else {
      setState('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <form
      noValidate
      className={clsx('relative w-full max-w-sm xl:max-w-[600px]', className)}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="h-full w-full rounded-full border-2 border-gray-lighter py-3 pl-4 pr-[72px] text-base font-semibold shadow-none outline-0 transition-all duration-200 placeholder:text-gray focus:border-gray-dark focus:outline-0 focus:ring-0 focus:ring-gray-lighter 3xl:py-3.5 3xl:pl-6 3xl:pr-20"
        placeholder="Search..."
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <ActionIcon
        rounded="full"
        className="absolute right-[6px] top-1/2 -translate-y-1/2 !rounded-full text-white 3xl:!h-10 3xl:!w-10"
        onClick={handleSubmit}
      >
        <MagnifyingGlassIcon className="h-4 w-4 xl:h-5 xl:w-5" />
      </ActionIcon>
      {isClearable && (
        <InputIconOnClear
          size="xl"
          className="absolute right-12 top-1/2 -translate-y-1/2 scale-125 3xl:right-14"
          onClick={() => {
            setState('');
            if (search) {
              clearFilter(['q']);
            }
          }}
        />
      )}
    </form>
  );
}
