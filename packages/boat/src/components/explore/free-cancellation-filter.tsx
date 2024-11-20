'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useQueryParam } from '@/hooks/use-query-param';
import Switch from '@/components/ui/form-fields/switch';

export default function FreeCancellation() {
  const searchParams = useSearchParams();
  const cancel = searchParams?.get('freeCancellation');
  const [freeCancellation, setFreeCancellation] = useState<boolean>(
    Boolean(cancel),
  );
  const { updateQueryparams } = useQueryParam();

  // updates query
  useEffect(() => {
    updateQueryparams('freeCancellation', freeCancellation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freeCancellation]);

  // reset
  useEffect(() => {
    if (!cancel) {
      setFreeCancellation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cancel]);

  return (
    <Switch
      labelPlacement="left"
      label="Free Cancellation"
      checked={freeCancellation}
      onChange={() => setFreeCancellation(!freeCancellation)}
      handlerClassName="w-full items-center justify-between"
      labelClassName="font-bold text-sm lg:text-base text-gray-dark"
      switchClassName="peer-focus/switch:!ring-offset-0 focus:!ring-0"
    />
  );
}
