'use client';

import { vendorData } from 'public/data/listing-details';
import { reviewsData } from 'public/data/reviews';
import { z } from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import { addDays } from 'date-fns';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DateTime from '@/components/ui/form-fields/date-time-picker';
import PhoneNumber from '@/components/ui/form-fields/phone-number';
import Textarea from '@/components/ui/form-fields/textarea';
import { CalenderIcon } from '@/components/icons/calender';
import { useModal } from '@/components/modals/context';
import Input from '@/components/ui/form-fields/input';
import ActionIcon from '@/components/ui/action-icon';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';
import Rate from '@/components/ui/rating';
import { Routes } from '@/config/routes';
import { useState } from 'react';
import clsx from 'clsx';

const ContactHostSchema = z.object({
  startDate: z.date().min(new Date(), { message: 'Select a date.' }),
  endDate: z.date().min(new Date(), { message: 'Select end date!' }),
  firstName: z.string().min(1, { message: 'First name is required!' }),
  lastName: z.string().min(1, { message: 'Last name is required!' }),
  email: z
    .string()
    .min(1, { message: 'The email is required!' })
    .email({ message: 'The email is invalid!' }),
  phoneNumber: z.string().min(7, { message: 'Minimum 7 digits!' }),
  message: z.string().min(1, { message: 'Message field is required!' }),
});

type ContactHostModalType = z.infer<typeof ContactHostSchema>;

export default function ContactHost() {
  const { closeModal } = useModal();
  const { vendor } = vendorData;
  const { stats } = reviewsData;
  const [state, setState] = useState(false);
  const [stateTwo, setStateTwo] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactHostModalType>({
    resolver: zodResolver(ContactHostSchema),
  });

  function handleReservation(data: any) {
    console.log('Data:', data);
    closeModal();
  }

  return (
    <div className="mx-auto w-full max-w-full rounded-lg bg-white p-4 xs:w-[480px] sm:w-[600px] sm:p-6 md:w-[648px] md:rounded-xl md:p-8 xl:p-12">
      <div className="flex items-center justify-between">
        <Text tag="h3" className="text-base leading-8 md:!text-xl">
          Contact
        </Text>
        <ActionIcon
          size="sm"
          variant="outline"
          className="border-none !p-0 focus:!ring-0"
          onClick={closeModal}
        >
          <XMarkIcon className="h-6 w-6" />
        </ActionIcon>
      </div>
      <div className="mt-3 flex items-center justify-between border-b border-gray-lighter pb-3 md:mt-7 md:pb-7">
        <div>
          <Text tag="h6" className="text-sm uppercase md:!text-base">
            <Link href={Routes.public.inbox}>{vendor.name}</Link>
          </Text>
          <div className="mt-1 flex items-center md:mt-2">
            <Rate allowHalf allowClear defaultValue={stats.averageRating} />
            <p className="ml-3   text-sm text-gray-dark md:text-base">
              <span>(</span> {vendor.totalReview} <span>)</span>
            </p>
          </div>
        </div>
        <Link href={Routes.public.userID('user1')}>
          <div className="relative h-12 w-12 overflow-hidden rounded-full md:h-[60px] md:w-[60px]">
            <Image
              src={vendor.img}
              alt={vendor.name}
              fill
              className="absolute object-cover"
            />
          </div>
        </Link>
      </div>
      <form
        noValidate
        onSubmit={handleSubmit((data) => handleReservation(data))}
      >
        <div className="grid grid-cols-2 gap-3 border-gray-lighter py-3 md:border-b md:py-6">
          <Controller
            name="startDate"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DateTime
                label="Trip start date"
                placeholderText="Select Date"
                minDate={new Date()}
                selected={value}
                onChange={onChange}
                onFocus={(e) => e.target.blur()}
                dateFormat="eee dd / LL / yy"
                startIcon={
                  <CalenderIcon className="h-4 w-4 text-gray xl:h-5 xl:w-5" />
                }
                startIconClassName="sm:left-2"
                error={errors?.startDate?.message}
                inputClassName={clsx(
                  '!text-gray text-xs xl:text-sm sm:pl-12',
                  state &&
                    '!border !border-gray-1000 !ring-[1px] !ring-gray-900/20',
                )}
                labelClassName="!text-sm md:!text-base mb-1.5"
                onCalendarOpen={() => setState(true)}
                onCalendarClose={() => setState(false)}
              />
            )}
          />
          <Controller
            name="endDate"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DateTime
                label="Trip end date"
                placeholderText="Select Date"
                minDate={addDays(new Date(), 1)}
                selected={value}
                onFocus={(e) => e.target.blur()}
                onChange={onChange}
                dateFormat="eee dd / LL / yy"
                startIcon={
                  <CalenderIcon className="h-4 w-4 text-gray xl:h-5 xl:w-5" />
                }
                startIconClassName="sm:left-2"
                error={errors?.endDate?.message}
                inputClassName={clsx(
                  '!text-gray text-xs xl:text-sm sm:pl-12',
                  stateTwo &&
                    '!border !border-gray-1000 !ring-[1px] !ring-gray-900/20',
                )}
                labelClassName="!text-sm md:!text-base mb-1.5"
                onCalendarOpen={() => setStateTwo(true)}
                onCalendarClose={() => setStateTwo(false)}
              />
            )}
          />
        </div>
        <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 md:mt-6 md:gap-y-4">
          <Input
            label="First name"
            placeholder="Fabio"
            labelClassName="!text-sm md:!text-base"
            {...register('firstName')}
            error={errors?.firstName?.message}
          />
          <Input
            label="Last name"
            placeholder="Jaction"
            labelClassName="!text-sm md:!text-base"
            {...register('lastName')}
            error={errors?.lastName?.message}
          />
          <Input
            type="email"
            label="Email"
            placeholder="dummy@dummy.com"
            labelClassName="!text-sm md:!text-base"
            {...register('email')}
            error={errors?.email?.message}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneNumber
                size="DEFAULT"
                country="us"
                label="Phone Number"
                labelClassName="!text-sm md:!text-base font-bold mb-[6px]"
                buttonClassName="contact-host-phone-input"
                inputClassName="!pl-14"
                onChange={onChange}
                value={value}
                error={errors?.phoneNumber?.message}
              />
            )}
          />
        </div>
        <Textarea
          className="mt-4"
          label="Your message"
          textareaClassName="w-full min-h-[100px] md:min-h-[160px] focus:border-gray-dark py-3 !px-5"
          labelClassName="!text-sm md:!text-base font-bold text-gray-dark"
          {...register('message')}
          error={errors?.message?.message}
        />
        <div className="mt-4 flex md:mt-8 lg:mt-12 ">
          <Button
            type="submit"
            size="lg"
            className="ml-auto !w-24 py-[9px] !font-bold"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
