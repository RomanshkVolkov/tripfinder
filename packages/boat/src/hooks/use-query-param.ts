'use client';

import { atom, useAtom } from 'jotai';
import { Routes } from '@/config/routes';
import { useRouter } from 'next/navigation';
import { makeQueryString } from '@/utils/makeQueryString';

const queryAtom = atom('');

export function useQueryParam(pathname: string = Routes.public.explore) {
  const [query, setQuery] = useAtom(queryAtom);
  const router = useRouter();

  const clearFilter = (key: string[]) => {
    let url = new URL(location.href);
    key.forEach((item) => url.searchParams.delete(item));
    setQuery(url.search);
    router.push(`${pathname}${url.search}`, {
      scroll: false,
    });
  };

  const setQueryparams = (data: any) => {
    let queryString = '';
    if (typeof data !== 'string') {
      queryString = makeQueryString(data);
    }
    setQuery(queryString);
  };

  const updateQueryparams = (key: string, value: string | number | boolean) => {
    if (!value) {
      clearFilter([key]);
      return;
    }
    const url = new URL(location.href);
    url.searchParams.set(key, value.toString());
    setQuery(url.search);
    router.push(`${pathname}${url.search}`, {
      scroll: false,
    });
  };

  return {
    query,
    setQueryparams,
    updateQueryparams,
    clearFilter,
  };
}
