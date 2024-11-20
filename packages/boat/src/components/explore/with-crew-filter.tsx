'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useQueryParam } from '@/hooks/use-query-param';
import Switch from '@/components/ui/form-fields/switch';

export default function WithCrewFilter() {
  const searchParams = useSearchParams();
  const crew = searchParams?.get('withCrew');
  const [withCrew, setWithCrew] = useState<boolean>(Boolean(crew));
  const { updateQueryparams } = useQueryParam();

  // updates query
  useEffect(() => {
    updateQueryparams('withCrew', withCrew);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withCrew]);

  // reset
  useEffect(() => {
    if (!crew) {
      setWithCrew(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crew]);

  return (
    <Switch
      label="With Crew"
      checked={withCrew}
      labelPlacement="left"
      onChange={() => setWithCrew(!withCrew)}
      handlerClassName="w-full items-center justify-between"
      labelClassName="font-bold text-sm lg:text-base text-gray-dark"
      switchClassName="peer-focus/switch:!ring-offset-0 focus:!ring-0"
    />
  );
}
