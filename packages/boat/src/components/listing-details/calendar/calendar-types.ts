export type CalendarPropsTypes = {
  dates?: {
    checkin?: Date;
    checkout?: Date;
  };
  noMonth?: number;
  className?: string;
  mobile?: boolean;
  blocked?: any[];
  sameDay?: number;
  monthContainerClassName?: string;
};

export type MonthPropsTypes = {
  dates?: {
    checkin?: Date;
    checkout?: Date;
  };
  month?: number;
  year?: number;
  monthContainerClassName?: string;
  weekNameClassName?: string;
};

export type MonthDataTypes = {
  currentMonth?: string;
  currentData?: DayDataTypes[];
};

export type DayDataTypes = {
  active?: boolean;
  day?: number;
  date?: number;
  time?: Date;
  className?: string;
};
