'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import { useQueryParam } from '@/hooks/use-query-param';
import DateTime from '@/components/ui/form-fields/date-time-picker';
import { CalenderIcon } from '@/components/icons/calender';
import Input from '@/components/ui/form-fields/input';
import clsx from 'clsx';

export default function TripdateFilter() {
  const searchparams = useSearchParams();
  const { clearFilter, updateQueryparams } = useQueryParam();
  const [state, setState] = useState(false);

  const departureDateQuery = searchparams?.get('departureDate');
  const returnDateQuery = searchparams?.get('returnDate');

  const departureDateObj = departureDateQuery
    ? new Date(departureDateQuery)
    : null;
  const returnDateObj = returnDateQuery ? new Date(returnDateQuery) : null;

  const [departureDate, setDepartureDate] = useState<Date | null>(
    departureDateObj,
  );
  const [returnDate, setReturnDate] = useState<Date | null>(returnDateObj);

  const handleRangeChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setDepartureDate(start);
    setReturnDate(end);
    start && updateQueryparams('departureDate', format(start, 'yyyy-MM-dd'));
    end && updateQueryparams('returnDate', format(end, 'yyyy-MM-dd'));
  };

  function handleClearClick() {
    setReturnDate(null);
    setDepartureDate(null);
    clearFilter(['departureDate', 'returnDate']);
  }

  useEffect(() => {
    if (!departureDateQuery) setDepartureDate(null);
    if (!returnDateQuery) setReturnDate(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [departureDateQuery, returnDateQuery]);

  return (
    <DateTime
      label="Select Trip Date"
      onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.blur()}
      selected={departureDate}
      onChange={handleRangeChange}
      startDate={departureDate!}
      endDate={returnDate!}
      monthsShown={2}
      minDate={new Date()}
      placeholderText="Fri 11/11/22 - Fri 18/11/20"
      selectsEnd
      selectsRange
      className="date-picker-wrapper"
      popperPlacement="bottom-start"
      onCalendarOpen={() => setState(true)}
      onCalendarClose={() => setState(false)}
      customInput={
        <Input
          className="[&>label>div]:!p-0"
          inputClassName={clsx(
            '!py-3 !text-sm !pl-[48px]',
            state && '!border !border-gray-1000 !ring-[1px] !ring-gray-900/20',
          )}
          startIcon={<CalenderIcon className="h-5 w-5" />}
          startIconClassName="!left-1"
          clearable={departureDate || returnDate ? true : false}
          endIcon={true}
          onClearClick={handleClearClick}
        />
      }
      labelClassName="!text-sm lg:!text-base"
    />
  );
}
