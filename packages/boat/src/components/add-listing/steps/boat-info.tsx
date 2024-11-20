'use client';

import { boatTypes } from 'public/data/boat-types';
import { z } from 'zod';
import Image from 'next/image';
import { useAtom, useSetAtom } from 'jotai';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FieldHelperText from '@/components/ui/form-fields/field-helper-text';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { storeAtom, stepAtom } from '@/components/add-listing/add-listing';
import AdvancedRadio from '@/components/ui/form-fields/advanced-radiobox';
import Textarea from '@/components/ui/form-fields/textarea';
import SetPrice from '@/components/add-listing/set-price';
import Text from '@/components/ui/typography/text';
import Counter from '@/components/ui/counter';

const BoatSchema = z.object({
  boatName: z
    .string()
    .min(1, { message: 'This field is required!' })
    .max(24, { message: 'Reached your letter limit.' }),
  boatType: z.string().min(1, { message: 'This field is required!' }),
  pricePerDay: z.number().min(10, { message: 'Minimum price 10!' }),
  boatDescription: z
    .string()
    .min(1, { message: 'This field is requred!' })
    .max(450, { message: 'Reached your letter limit.' }),
  beadRooms: z.number().optional(),
  bathRooms: z.number().optional(),
  guests: z.number().min(1, { message: 'Minimum 1 guest required!' }),
});

type BoatSchemaType = z.infer<typeof BoatSchema>;

export default function BoatInfo() {
  const setStep = useSetAtom(stepAtom);
  const [store, setStore] = useAtom(storeAtom);
  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors },
  } = useForm<BoatSchemaType>({
    defaultValues: {
      boatName: store.boatName,
      boatType: store.boatType,
      pricePerDay: store.pricePerDay,
      boatDescription: store.boatDescription,
      beadRooms: store.beadRooms,
      bathRooms: store.bathRooms,
      guests: store.guests,
    },
    resolver: zodResolver(BoatSchema),
  });

  function handleBoatDetails(data: any) {
    setStore({
      ...store,
      boatName: data.boatName,
      boatType: data.boatType,
      pricePerDay: data.pricePerDay,
      boatDescription: data.boatDescription,
      beadRooms: data.beadRooms,
      bathRooms: data.bathRooms,
      guests: data.guests,
    });
    console.log(data);
    setStep(3);
  }

  return (
    <div className="w-full md:w-[448px] xl:w-[648px]">
      <form
        noValidate
        onSubmit={handleSubmit((data) => handleBoatDetails(data))}
      >
        <Textarea
          variant="outline"
          label="Now, let's give your boat a title"
          labelClassName="!mb-4 !text-lg !font-medium md:!text-xl lg:!mb-6 2xl:!text-2xl"
          textareaClassName="h-[72px] lg:h-20 w-full resize-none lg:rounded-xl"
          maxLength={24}
          {...register('boatName')}
          error={errors.boatName?.message}
        />
        <p className="mt-1 text-sm font-normal lg:mt-2 lg:text-base">
          {watch('boatName')?.length ?? 0}
          /24
        </p>
        <Text
          tag="h3"
          className="mb-4 mt-12 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
        >
          What type of boat you will have?
        </Text>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {boatTypes.map((item) => (
            <AdvancedRadio
              key={item.name}
              value={item.name}
              className="card-gradient cursor-pointer rounded-lg border border-gray-lighter py-4 text-center lg:rounded-xl xl:p-6 xl:text-left"
              inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-gray-lighter [&:checked:enabled~span]:border [&:checked:enabled~span]:border-gray-dark"
              {...register('boatType')}
            >
              <div className="relative inline-block h-8 w-8">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4   text-sm font-bold lg:text-base">
                {item.name}
              </p>
            </AdvancedRadio>
          ))}
        </div>
        <FieldHelperText className="text-xs font-normal text-red">
          {errors.boatType?.message}
        </FieldHelperText>
        <Text
          tag="h3"
          className="mb-4 mt-12 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
        >
          Now, Set your price
        </Text>
        <Controller
          name="pricePerDay"
          control={control}
          render={({ field: { onChange, value } }) => (
            <SetPrice value={value} countBy={1} onChange={onChange} />
          )}
        />
        <FieldHelperText className="text-xs font-normal text-red">
          {errors.pricePerDay?.message}
        </FieldHelperText>
        <Textarea
          variant="outline"
          className="mt-12"
          label="Create your description"
          maxLength={450}
          labelClassName="!mb-4 !text-lg !font-medium md:!text-xl lg:!mb-6 2xl:!text-2xl"
          textareaClassName="h-[72px] lg:h-20 w-full resize-none lg:rounded-xl"
          {...register('boatDescription')}
          error={errors.boatDescription?.message}
        />
        <p className="mt-1 text-sm font-normal lg:mt-2 lg:text-base">
          {watch('boatDescription')?.length ?? 0}
          /450
        </p>
        <Text
          tag="h3"
          className="mb-4 mt-12 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
        >
          Share some basic about your boat
        </Text>
        <div className="grid grid-cols-1 gap-2 lg:gap-3">
          <Controller
            name="beadRooms"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="card-gradient flex items-center justify-between rounded-lg border border-gray-lighter p-6 lg:rounded-xl lg:p-8">
                <Text className="text-base !font-semibold">Bed rooms</Text>
                <Counter
                  count={value ? value : 0}
                  onCount={onChange}
                  countBy={1}
                  buttonClassName="rounded-lg !h-6 !w-6 !p-1 sm:!h-9 sm:!w-9"
                />
              </div>
            )}
          />
          <Controller
            name="bathRooms"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="card-gradient flex items-center justify-between rounded-lg border border-gray-lighter p-6 lg:rounded-xl lg:p-8">
                <Text className="text-base !font-semibold">Bathrooms</Text>
                <Counter
                  count={value ? value : 0}
                  onCount={onChange}
                  countBy={1}
                  buttonClassName="rounded-lg !h-6 !w-6 !p-1 sm:!h-9 sm:!w-9"
                />
              </div>
            )}
          />
          <Controller
            name="guests"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="card-gradient flex items-center justify-between rounded-lg border border-gray-lighter p-6 lg:rounded-xl lg:p-8">
                <Text className="text-base !font-semibold">Guests</Text>
                <Counter
                  count={value ? value : 0}
                  onCount={onChange}
                  countBy={1}
                  buttonClassName="rounded-lg !h-6 !w-6 !p-1 sm:!h-9 sm:!w-9"
                />
              </div>
            )}
          />
          <FieldHelperText className="text-xs font-normal text-red">
            {errors.guests?.message}
          </FieldHelperText>
        </div>
        <CreateListingFooter onBack={() => setStep(1)} />
      </form>
    </div>
  );
}
