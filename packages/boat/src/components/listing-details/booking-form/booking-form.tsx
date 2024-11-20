'use client';

import { z } from 'zod';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SelectBox from '@/components/listing-details/booking-form/select-box';
import DateTime from '@/components/ui/form-fields/date-time-picker';
import { Staricon } from '@/components/icons/star-icon';
import Button from '@/components/ui/button';

interface BookingFormProps {
  price: number;
  averageRating: number;
  totalReviews: number;
  className?: string;
}

const list = [
  {
    title: '$215 * 3 nights',
    money: 762,
    type: 'price',
  },
  {
    title: 'Weekly discount',
    money: 117,
    type: 'discount',
  },
  {
    title: 'Cleaning fee',
    money: 52,
    type: 'cleanfee',
  },
  {
    title: 'Service fee',
    money: 65,
    type: 'servicefee',
  },
  {
    title: 'Total fee',
    money: 702,
    type: 'total',
  },
];

const BookingSchema = z
  .object({
    startDate: z.date().min(new Date(), { message: 'Invalid Start Date!' }),
    endDate: z.date().min(new Date(), { message: 'Invalid End Date!' }),
    selected: z.object({
      adults: z.number().min(1, 'Minimum 1 Adult required!'),
      child: z.number(),
      pets: z.boolean(),
    }),
  })
  .refine(({ startDate, endDate }) => startDate < endDate, {
    message: 'End Date must be greater then Start Date.',
    path: ['startDate'],
  });

type BookingSchemaType = z.infer<typeof BookingSchema>;

export default function BookingForm({
  price,
  averageRating,
  totalReviews,
  className,
}: BookingFormProps) {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingSchemaType>({
    defaultValues: {
      selected: {
        adults: 0,
        child: 0,
        pets: false,
      },
    },
    resolver: zodResolver(BookingSchema),
  });

  const [minEndDate, setMinEndDate] = useState(getValues('startDate'));
  const [focus, setFocus] = useState<boolean>(false);

  function handleBooking(data: any) {
    console.log(data);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => handleBooking(data))}
      className={clsx(
        'rounded-xl border border-gray-lighter bg-white p-8 shadow-card',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3  ">
        <p className="text-xl font-bold text-gray-dark xl:text-[22px]">
          ${price} <span className="text-base">/ night</span>
        </p>
        <p className="inline-flex flex-shrink-0 items-center gap-2">
          <Staricon className="xl:w-h-5 h-4 w-4 xl:h-5" />
          <span className="text-base font-bold text-gray-dark">
            {averageRating}
          </span>
          <span className="flex-shrink-0 text-sm font-normal text-gray-dark xl:text-base">
            ({' '}
            <a href="#reviews" rel="noopener noreferer" className="underline">
              {totalReviews} reviews
            </a>{' '}
            )
          </span>
        </p>
      </div>
      <div
        className={clsx(
          'relative mt-6 grid grid-cols-2 gap-3 rounded-t-lg border border-b-0 border-gray-lighter',
          focus && '!border-b !border-gray-dark ring-[1px] ring-gray-900/20',
        )}
        onBlur={() => setFocus(false)}
      >
        <span
          className={clsx(
            'absolute inset-y-0 left-1/2 translate-x-1/2 border-r border-gray-lighter',
            focus && '!border-gray-dark',
          )}
        ></span>
        <span className="absolute left-4 top-3 inline-block -translate-x-3 scale-75 text-sm font-semibold uppercase text-gray-dark">
          Trip Start
        </span>
        <span className="absolute right-4 top-3 inline-block translate-x-2 scale-75 text-sm font-semibold uppercase text-gray-dark">
          Trip End
        </span>
        <Controller
          name="startDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateTime
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                e.target.blur();
                setFocus(true);
              }}
              onClickOutside={() => setFocus(false)}
              placeholderText="Add date"
              minDate={new Date()}
              selected={value}
              onChange={(date) => {
                setMinEndDate(date as Date);
                onChange(date);
              }}
              selectsStart
              startDate={getValues('startDate')}
              endDate={getValues('endDate')}
              dateFormat="eee dd / LL / yy"
              popperClassName="!translate-x-0 !right-0 !top-full booking-form-calendar"
              inputClassName="border-0 !text-base text-gray-dark !h-16 pt-5"
            />
          )}
        />
        <Controller
          name="endDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateTime
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                e.target.blur();
                setFocus(true);
              }}
              onClickOutside={() => setFocus(false)}
              placeholderText="Add date"
              selected={value}
              onChange={onChange}
              selectsEnd
              minDate={minEndDate}
              endDate={getValues('endDate')}
              startDate={getValues('startDate')}
              dateFormat="eee dd / LL / yy"
              popperClassName="!translate-x-0 !right-0 !top-full booking-form-calendar booking-form-calendar-two"
              inputClassName="border-0 !text-base text-gray-dark text-end !h-16 pt-5"
            />
          )}
        />
      </div>
      <Controller
        name="selected"
        control={control}
        render={({ field: { onChange, value } }) => (
          <SelectBox defaultSelected={value} onChange={onChange} />
        )}
      />
      <p className="flex items-center justify-between text-xs text-red">
        <span>{errors.startDate?.message}</span>
        <span>{errors.endDate?.message}</span>
        <span>{errors.selected?.adults?.message}</span>
      </p>
      <Button
        size="xl"
        rounded="lg"
        type="submit"
        variant="solid"
        className="mt-4 w-full !py-[14px] text-base !font-bold uppercase tracking-widest"
      >
        reserve
      </Button>
      <ul className="mt-3 xl:mt-5">
        {list.map((item) => (
          <li
            key={item.title}
            className="flex items-center justify-between py-1.5 text-base capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0"
          >
            <span className="font-normal">{item.title}</span>
            {item.type === 'discount' ? (
              <span className="font-bold text-red">-${item.money}</span>
            ) : (
              <span className="font-bold">${item.money}</span>
            )}
          </li>
        ))}
      </ul>
    </form>
  );
}
