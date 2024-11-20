'use client';

import { z } from 'zod';
import { useAtom, useSetAtom } from 'jotai';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { storeAtom, stepAtom } from '@/components/add-listing/add-listing';
import PhoneNumber from '@/components/ui/form-fields/phone-number';
import { MapMarkerIcon } from '@/components/icons/map-marker';
import Input from '@/components/ui/form-fields/input';
import Text from '@/components/ui/typography/text';
import MapView from '@/components/ui/map-view';

const FormDataSchema = z.object({
  phoneNumber: z.string().min(7, { message: 'Minimum 7 digits!' }),
  location: z.string().optional(),
});

type FormDataType = z.infer<typeof FormDataSchema>;

export default function AddLocation() {
  const setStep = useSetAtom(stepAtom);
  const [store, setStore] = useAtom(storeAtom);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: {
      phoneNumber: store.phoneNumber,
      location: store.location,
    },
    resolver: zodResolver(FormDataSchema),
  });

  function handleFormData(data: any) {
    setStore({
      ...store,
      location: data.location,
      phoneNumber: data.phoneNumber,
    });
    console.log(data);
    setStep(5);
  }

  return (
    <div className="w-full md:w-[448px]  xl:w-[648px]">
      <form noValidate onSubmit={handleSubmit((data) => handleFormData(data))}>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field: { onChange, value } }) => (
            <PhoneNumber
              country="us"
              label="Phone Number"
              onChange={onChange}
              value={value}
              size="lg"
              error={errors?.phoneNumber?.message}
              inputClassName="!pl-12 sm:!pl-14"
              buttonClassName="step-form-phone-input"
              labelClassName="!font-normal lg:text-base"
              className="relative z-20"
            />
          )}
        />
        <div className="mt-12 lg:mt-16">
          <Text
            tag="h3"
            className="mb-4 mt-8 text-lg font-medium md:!text-xl 2xl:!text-2xl"
          >
            Where’s your boat located?
          </Text>
          <div className="relative">
            <Input
              type="text"
              size="xl"
              className="absolute left-4 right-4 top-4 z-10 h-10 leading-10 md:h-14 md:leading-[56px]"
              inputClassName="!text-sm lg:!text-base pl-[50px] !bg-white"
              labelClassName="lg:!text-base !mb-2 text-gray-dark"
              startIcon={<MapMarkerIcon className="z-10 h-5 w-5" />}
              startIconClassName="left-2"
              placeholder="Enter your location..."
              {...register('location')}
            />
            <div className="overflow-hidden rounded-xl">
              <MapView mapContainerClassName="w-full h-[230px] sm:h-[400px] xl:h-[600px]" />
            </div>
          </div>
        </div>
        <CreateListingFooter onBack={() => setStep(3)} />
      </form>
    </div>
  );
}
