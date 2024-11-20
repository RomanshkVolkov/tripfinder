'use client';

import { useState } from 'react';
import clsx from 'clsx';
import DatePicker, { DatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '@/components/ui/form-fields/input';

const calendarContainerStyles = {
  base: '[&.react-datepicker]:shadow-lg [&.react-datepicker]:border-gray-100 [&.react-datepicker]:rounded-md',
  monthContainer: {
    padding: '[&.react-datepicker>div]:pt-5 [&.react-datepicker>div]:pb-3',
  },
};

const prevNextButtonStyles = {
  base: '[&.react-datepicker>button]:items-baseline [&.react-datepicker>button]:top-7',
  border:
    '[&.react-datepicker>button]:border [&.react-datepicker>button]:border-solid [&.react-datepicker>button]:border-muted [&.react-datepicker>button]:rounded-md',
  size: '[&.react-datepicker>button]:h-[22px] [&.react-datepicker>button]:w-[22px]',
  children: {
    position: '[&.react-datepicker>button>span]:top-0',
    border:
      '[&.react-datepicker>button>span]:before:border-t-[1.5px] [&.react-datepicker>button>span]:before:border-r-[1.5px] [&.react-datepicker>button>span]:before:border-muted',
    size: '[&.react-datepicker>button>span]:before:h-[7px] [&.react-datepicker>button>span]:before:w-[7px]',
  },
};

const timeOnlyStyles = {
  base: '[&.react-datepicker--time-only>div]:pr-0 [&.react-datepicker--time-only>div]:w-28',
};

export type DateTimeProps = DatePickerProps & {
  startIcon?: React.ReactNode;
  startIconClassName?: string;
  endIcon?: React.ReactNode;
  label?: string;
  error?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
  labelClassName?: string;
  containerClassName?: string;
};

/** We used `react-datepicker` package to build DateTime component.
 * See their [official documentation](https://reactdatepicker.com/) for more info.
 */

const DateTime = ({
  label,
  customInput,
  showPopperArrow = false,
  dateFormat = 'd MMMM yyyy',
  onCalendarOpen,
  onCalendarClose,
  calendarClassName,
  startIcon,
  startIconClassName,
  endIcon,
  error,
  inputClassName,
  inputContainerClassName,
  labelClassName,
  className,
  ...props
}: DateTimeProps) => {
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const handleCalenderOpen = () => setIsCalenderOpen(true);
  const handleCalenderClose = () => setIsCalenderOpen(false);

  return (
    <div className={clsx(className)}>
      <label
        className={clsx(
          'block   text-base font-bold text-gray-dark',
          labelClassName,
        )}
      >
        {label}
      </label>
      <DatePicker
        customInput={
          customInput || (
            <Input
              className={clsx(
                'mt-0 [&>label>div]:!p-0',
                inputContainerClassName,
              )}
              inputClassName={inputClassName}
              size="DEFAULT"
              startIcon={startIcon}
              startIconClassName={startIconClassName}
              error={error}
            />
          )
        }
        className="mt-2"
        showPopperArrow={showPopperArrow}
        dateFormat={dateFormat}
        onCalendarOpen={onCalendarOpen || handleCalenderOpen}
        onCalendarClose={onCalendarClose || handleCalenderClose}
        calendarClassName={clsx(
          calendarContainerStyles.base,
          calendarContainerStyles.monthContainer.padding,
          prevNextButtonStyles.base,
          prevNextButtonStyles.border,
          prevNextButtonStyles.size,
          prevNextButtonStyles.children.position,
          prevNextButtonStyles.children.border,
          prevNextButtonStyles.children.size,
          timeOnlyStyles.base,
          calendarClassName,
        )}
        {...props}
      />
    </div>
  );
};

DateTime.displayName = 'DateTime';
export default DateTime;
