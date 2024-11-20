'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQueryParam } from '@/hooks/use-query-param';
import Text from '@/components/ui/typography/text';
import Counter from '@/components/ui/counter';

export default function GuestFilter() {
  const searchParams = useSearchParams();
  const p = searchParams?.get('guestCount');
  const [peopleCount, setPeopleCount] = useState(Number(p) ?? 0);
  const { updateQueryparams } = useQueryParam();

  // sets the url params
  useEffect(() => {
    updateQueryparams('guestCount', peopleCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peopleCount]);

  // reset
  useEffect(() => {
    if (!p) {
      setPeopleCount(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p]);

  return (
    <div className="flex items-center justify-between py-2">
      <Text className="block !text-sm font-bold capitalize text-gray-dark lg:!text-base">
        Number of people
      </Text>
      <Counter
        count={peopleCount}
        countBy={1}
        onCount={(val) => setPeopleCount(val)}
        buttonClassName="rounded-md !px-1 w-[30px]"
      />
    </div>
  );
}
