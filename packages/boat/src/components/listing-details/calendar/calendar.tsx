import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { CalendarPropsTypes } from '@/components/listing-details/calendar/calendar-types';
import Months from '@/components/listing-details/calendar/months';

export default function Calendar({
  dates,
  noMonth,
  className,
  monthContainerClassName,
}: CalendarPropsTypes) {
  //   show months
  const [nShow, setNShow] = useState([
    {
      m: dates?.checkin ? dates?.checkin.getMonth() : new Date().getMonth(),
      y: dates?.checkin
        ? dates?.checkin.getFullYear()
        : new Date().getFullYear(),
    },
  ]);

  // number of month based set show months
  useEffect(() => {
    const arr = [...nShow];
    while (true) {
      if (arr.length === noMonth) {
        break;
      }
      if (arr[arr.length - 1].m === 11) {
        arr.push({
          m: 0,
          y: arr[arr.length - 1].y + 1,
        });
      } else {
        arr.push({
          m: arr[arr.length - 1].m + 1,
          y: arr[arr.length - 1].y,
        });
      }
    }
    setNShow(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noMonth]);

  //   next month
  function nextMonths() {
    const newArr = nShow.map((ele: any) => {
      if (ele.m === 11) {
        return {
          m: 0,
          y: ele.y + 1,
        };
      }
      return {
        m: ele.m + 1,
        y: ele.y,
      };
    });
    setNShow(newArr);
  }

  //   previous month
  const prevMonths = () => {
    const newArr = nShow.map((ele) => {
      if (ele.m === 0) {
        return {
          m: 11,
          y: ele.y - 1,
        };
      }
      return {
        m: ele.m - 1,
        y: ele.y,
      };
    });
    setNShow(newArr);
  };

  return (
    <div className={clsx('relative w-full', className)}>
      <button
        onClick={prevMonths}
        className="absolute -top-1.5 left-0 rounded-full p-2 text-sm hover:bg-gray-lightest"
      >
        <ChevronLeftIcon className="h-auto w-5" />
      </button>
      <button
        onClick={nextMonths}
        className="absolute -top-1.5 right-0 rounded-full p-2 text-sm hover:bg-gray-lightest"
      >
        <ChevronRightIcon className="h-auto w-5" />
      </button>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:gap-10 3xl:grid-cols-3">
        {nShow.map((item, index) => (
          <Months
            key={`month-${item.m}-${index}`}
            dates={dates}
            month={item.m}
            year={item.y}
            monthContainerClassName={monthContainerClassName}
          />
        ))}
      </div>
    </div>
  );
}
