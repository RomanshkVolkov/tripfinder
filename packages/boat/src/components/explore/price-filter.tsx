'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQueryParam } from '@/hooks/use-query-param';
import RangeSlider from '@/components/ui/range-slider';
import Text from '@/components/ui/typography/text';

export default function PriceFilter() {
  const { updateQueryparams } = useQueryParam();
  const searchParams = useSearchParams();
  const price = searchParams?.get('price');
  let [range, setRange] = useState({ min: 0, max: 1000 });

  function handleRangeChange(value: any) {
    setRange({
      min: value[0],
      max: value[1],
    });
  }
  function handleMaxChange(max: number) {
    setRange({
      ...range,
      max: max || range.min,
    });
  }
  function handleMinChange(min: number) {
    setRange({
      ...range,
      min: min || 0,
    });
  }

  useEffect(() => {
    let cp: any = price?.split('-');
    if (cp) {
      setRange({
        min: Number(cp && cp[0] | range.min),
        max: Number(cp && cp[1] | range.max),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateQueryparams('price', `${range.min}-${range.max}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  return (
    <div>
      <Text
        tag="span"
        className="mb-3 block text-sm font-bold capitalize text-gray-dark lg:text-base"
      >
        Price per day
      </Text>
      <div className="xl:px-3">
        <RangeSlider
          range
          min={0}
          max={1000}
          value={[range.min, range.max]}
          dots={false}
          size="lg"
          onChange={(value: any) => handleRangeChange(value)}
          className={clsx('[&>.rc-slider-step]:hidden')}
        />
      </div>
      <div className="mt-5 grid grid-cols-2 items-center justify-between gap-5 text-sm font-bold">
        <div className="overflow-hidden rounded-lg border border-gray-lighter bg-gray-lightest py-2">
          <p className="px-3 pt-1 text-gray-400">Min</p>
          <input
            type="number"
            value={range.min}
            onChange={(e) => handleMinChange(parseInt(e.target.value))}
            className="w-full border-none bg-gray-lightest p-3 pb-1 pt-0 text-sm outline-none focus:shadow-none focus:ring-0"
            min={0}
            max={range.max}
            readOnly
          />
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-lighter bg-gray-lightest py-2">
          <p className="px-3 pt-1 text-gray-400">Max</p>
          <input
            type="number"
            value={range.max}
            onChange={(e) => handleMaxChange(parseInt(e.target.value))}
            className="w-full border-none bg-gray-lightest p-3 pb-1 pt-0 text-sm outline-none focus:shadow-none focus:ring-0"
            min={range.min}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
