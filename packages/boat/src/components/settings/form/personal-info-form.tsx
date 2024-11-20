'use client';

import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DateTime from '@/components/ui/form-fields/date-time-picker';
import PhoneNumber from '@/components/ui/form-fields/phone-number';
import Radio from '@/components/ui/form-fields/radio';
import Input from '@/components/ui/form-fields/input';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';
import clsx from 'clsx';
import { useState } from 'react';

const PersonalInfoSchema = z.object({
  firstName: z.string().min(1, { message: 'This field is required!' }),
  lastName: z.string().min(1, { message: 'This field is required!' }),
  email: z
    .string()
    .min(1, { message: 'The email is required!' })
    .email({ message: 'The email is invalid!' }),
  phoneNumber: z.string().min(7, { message: 'Minimum 7 digits!' }),
  birthDate: z.date().optional(),
  townCity: z.string().optional(),
  zipCode: z.string().optional(),
  bio: z.string().optional(),
  gender: z.string(),
  country: z.string().optional(),
  city: z.string().optional(),
  streetAddress: z.string().optional(),
  state: z.string().optional(),
});

type PersonalInfoType = z.infer<typeof PersonalInfoSchema>;

export default function PersonalInfoForm() {
  const [state, setState] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PersonalInfoType>({
    defaultValues: {
      gender: 'male',
    },
    resolver: zodResolver(PersonalInfoSchema),
  });

  function handlePersonalInfo(data: any) {
    console.log('Data:', data);
  }

  return (
    <div>
      <Text
        tag="h3"
        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
      >
        Personal Information
      </Text>
      <form
        noValidate
        onSubmit={handleSubmit((data) => handlePersonalInfo(data))}
        className="grid grid-cols-1 gap-8 xl:gap-12"
      >
        <div>
          <div className="mb-4 grid grid-cols-1 gap-3 md:mb-6 xl:gap-4">
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="text"
                label="First name"
                placeholder="First name"
                labelClassName="!font-normal lg:text-base"
                {...register('firstName')}
                error={errors.firstName?.message}
              />
              <Input
                type="text"
                label="Last name"
                placeholder="Last name"
                labelClassName="!font-normal lg:text-base"
                {...register('lastName')}
                error={errors.lastName?.message}
              />
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <Input
                type="email"
                label="Email"
                placeholder="Email"
                labelClassName="!font-normal lg:text-base"
                {...register('email')}
                error={errors.email?.message}
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PhoneNumber
                    country="us"
                    label="Phone Number"
                    labelClassName="!font-normal lg:text-base"
                    buttonClassName="personal-info-phone-input"
                    inputClassName="!pl-14"
                    onChange={onChange}
                    value={value}
                    error={errors?.phoneNumber?.message}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Controller
                name="birthDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DateTime
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                      e.target.blur()
                    }
                    label="Date of birth"
                    selected={value}
                    onChange={onChange}
                    showMonthDropdown
                    showYearDropdown
                    yearDropdownItemNumber={30}
                    scrollableYearDropdown
                    maxDate={new Date()}
                    dateFormat="dd / LL / yy"
                    labelClassName="!font-normal !text-sm lg:!text-base mb-2"
                    placeholderText="dd/mm/yyyy"
                    inputClassName={clsx(
                      state &&
                        '!border !border-gray-dark !ring-[1px] !ring-gray-900/20',
                    )}
                    inputContainerClassName="!mt-0"
                    onCalendarOpen={() => setState(true)}
                    onCalendarClose={() => setState(false)}
                  />
                )}
              />
              <Input
                type="text"
                label="Town/city"
                placeholder="Town/city"
                labelClassName="!font-normal lg:text-base !mb-2"
                {...register('townCity')}
                error={errors.townCity?.message}
              />
              <Input
                type="number"
                label="Zip code"
                placeholder="1234"
                labelClassName="!font-normal lg:text-base"
                {...register('zipCode')}
                error={errors.zipCode?.message}
              />
              <Input
                type="text"
                label="Bio"
                placeholder="Bio"
                labelClassName="!font-normal lg:text-base"
                {...register('bio')}
                error={errors.bio?.message}
              />
            </div>
          </div>
          <Text tag="h6" className="mb-4">
            Gender
          </Text>
          <div className="flex items-center gap-8">
            <Radio
              label="Male"
              labelClassName="!ml-3 !text-gray-dark font-normal"
              inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
              value="male"
              {...register('gender')}
            />
            <Radio
              label="Female"
              value="female"
              labelClassName="!ml-3 text-gray font-normal"
              inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
              {...register('gender')}
            />
          </div>
        </div>
        <div>
          <Text
            tag="h3"
            className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
          >
            Address
          </Text>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
              <Input
                type="text"
                label="Country/region"
                placeholder="Country/region"
                labelClassName="!font-normal lg:text-base"
                {...register('country')}
                error={errors.country?.message}
              />
              <Input
                type="text"
                label="City"
                placeholder="City"
                labelClassName="!font-normal lg:text-base"
                {...register('city')}
                error={errors.city?.message}
              />
            </div>
            <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2 ">
              <Input
                type="text"
                label="Street Address"
                placeholder="Street address"
                labelClassName="!font-normal lg:text-base"
                {...register('streetAddress')}
                error={errors.streetAddress?.message}
              />
              <Input
                type="text"
                label="State"
                placeholder="State"
                labelClassName="!font-normal lg:text-base"
                {...register('state')}
                error={errors.state?.message}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <Button
            type="button"
            size="xl"
            variant="outline"
            className="w-full border-gray-dark hover:bg-gray-dark hover:text-white md:w-auto"
          >
            Cancel
          </Button>
          <Button type="submit" size="xl" className="w-full md:w-auto">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
