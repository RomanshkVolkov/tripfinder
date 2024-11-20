import { useEffect, useState } from 'react';
import { getDaysInMonth } from '@/components/listing-details/calendar/get-days';
import {
  MonthDataTypes,
  MonthPropsTypes,
} from '@/components/listing-details/calendar/calendar-types';

export default function Months({
  dates,
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  monthContainerClassName,
  weekNameClassName = 'mt-8 grid grid-cols-7 gap-0 text-center text-sm font-semibold text-gray-dark md:text-base',
}: MonthPropsTypes) {
  // month change state
  const [changeMonth, setChangeMonth] = useState({
    showMonth: month,
    showYear: year,
  });

  // console log to see the data
  const [printDate, setPrintDate] = useState<MonthDataTypes>();

  // month and year to show on the screen
  useEffect(() => {
    setChangeMonth({
      showMonth: month,
      showYear: year,
    });
  }, [month, year]);

  // get dates from props dates
  let x = dates?.checkin;
  let y = dates?.checkout;

  // set day class name based on dates from props
  useEffect(() => {
    const { currentMonth, currentData } = getDaysInMonth(
      changeMonth.showMonth,
      changeMonth.showYear,
    );
    let newCurrentData = currentData?.map((item) => {
      let c = item.time;
      if (
        dates?.checkin?.getDate() === item?.time?.getDate() &&
        dates?.checkin?.getMonth() === item?.time?.getMonth()
      ) {
        return { ...item, className: 'calender-start-range' };
      }
      if (
        dates?.checkout?.getDate() === item?.time?.getDate() &&
        dates?.checkout?.getMonth() === item?.time?.getMonth()
      ) {
        return { ...item, className: 'calender-end-range' };
      }
      if (x && y && c && x < c && y > c) {
        return { ...item, className: 'between-range' };
      }
      return { ...item, className: '' };
    });
    setPrintDate({
      currentMonth: currentMonth,
      currentData: newCurrentData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates, changeMonth]);

  return (
    <div className={monthContainerClassName}>
      <h3 className="text-center text-base font-bold capitalize text-gray-dark xl:text-xl">
        <span>{printDate?.currentMonth}</span>
        <span className="ml-3">{changeMonth.showYear}</span>
      </h3>
      <div className={weekNameClassName}>
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-y-1 text-center xl:gap-y-3">
        {printDate?.currentData?.map((item, index) => (
          <div key={`${item?.date}-${item?.day}-${index}`}>
            <div
              className={`p-[12px] text-sm font-normal text-gray-dark md:text-base ${item.className}`}
            >
              {item.date && item.date < 10 ? (
                <span>0{item.date}</span>
              ) : (
                <span>{item.date}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
