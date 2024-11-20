import { Format } from '@/components/listing-details/calendar/format';
import { monthNames } from '@/components/listing-details/calendar/calendar-constants';

export function getDaysInMonth(
  month: number,
  year: number,
  normal?: boolean,
  sameDay?: boolean,
): {
  currentMonth: string;
  currentData: any[];
} {
  let date = new Date(year, month);
  let days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  const arr = days.map((ele) => {
    if (
      sameDay &&
      Format(new Date(), 'YYYY-MM-DD') === Format(ele, 'YYYY-MM-DD')
    ) {
      return {
        active: true,
        day: new Date(ele).getDay(),
        date: new Date(ele).getDate(),
        time: new Date(ele),
      };
    }
    if (new Date() > ele) {
      if (normal) {
        return {
          active: true,
          day: new Date(ele).getDay(),
          date: new Date(ele).getDate(),
          time: new Date(ele),
        };
      }
      return {
        active: false,
        day: new Date(ele).getDay(),
        date: new Date(ele).getDate(),
        time: new Date(ele),
      };
    }
    return {
      active: true,
      day: new Date(ele).getDay(),
      date: new Date(ele).getDate(),
      time: new Date(ele),
    };
  });

  let fillerArr = [0, 1, 2, 3, 4, 5, 6];
  let daysArr = [...fillerArr.slice(0, arr[0].time.getDay()), ...arr];

  return { currentMonth: monthNames[month], currentData: daysArr };
}
