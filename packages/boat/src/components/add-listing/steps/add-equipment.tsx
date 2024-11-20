'use client';

import { vendorData } from 'public/data/listing-details';
import { z } from 'zod';
import Image from 'next/image';
import { useAtom, useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AdvancedCheckbox from '@/components/ui/form-fields/advanced-checkbox';
import FieldHelperText from '@/components/ui/form-fields/field-helper-text';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { storeAtom, stepAtom } from '@/components/add-listing/add-listing';
import Text from '@/components/ui/typography/text';

const EquipmentSchema = z.object({
  equipment: z
    .string()
    .array()
    .min(5, { message: 'Minimum 5 items required!' }),
});

type EquipmentSchemaType = z.infer<typeof EquipmentSchema>;

export default function AddEquipment() {
  const setStep = useSetAtom(stepAtom);
  const [store, setStore] = useAtom(storeAtom);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EquipmentSchemaType>({
    defaultValues: {
      equipment: store.equipment,
    },
    resolver: zodResolver(EquipmentSchema),
  });

  function handleEquipment(data: any) {
    setStore({
      ...store,
      equipment: data.equipment,
    });
    console.log(data);
    setStep(6);
  }

  return (
    <div className="w-full md:w-[448px] xl:w-[648px]">
      <form noValidate onSubmit={handleSubmit((data) => handleEquipment(data))}>
        <Text
          tag="h3"
          className="mb-4 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
        >
          On Board Equipments
        </Text>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {vendorData.equipment.map((item, index) => (
            <AdvancedCheckbox
              key={`equipment-${index}`}
              value={item.name}
              className="card-gradient w-full cursor-pointer rounded-lg border border-gray-lighter py-4 text-center lg:rounded-xl xl:p-6 xl:text-left"
              inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-gray-lighter [&:checked:enabled~span]:border [&:checked:enabled~span]:border-gray-dark"
              {...register('equipment')}
            >
              <div className="relative inline-block h-8 w-8">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4   text-sm font-bold xl:text-base">
                {item.name}
              </p>
            </AdvancedCheckbox>
          ))}
        </div>
        <FieldHelperText className="text-xs font-normal text-red">
          {errors.equipment?.message}
        </FieldHelperText>
        <CreateListingFooter onBack={() => setStep(4)} />
      </form>
    </div>
  );
}
