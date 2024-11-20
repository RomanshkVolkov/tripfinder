'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Input from '@/components/ui/form-fields/input';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';

const AddnewPaymentMethodSchema = z.object({
  fullName: z.string().min(1, { message: 'This field is required!' }),
  cardNumber: z
    .string()
    .min(12, { message: 'This number is not valid!' })
    .max(12, { message: 'This number is not valid!' }),
  email: z
    .string()
    .min(1, { message: 'The email is required!' })
    .email({ message: 'The email is invalid!' }),
  ccv: z.string().min(4, { message: 'This field is required!' }),
});

type AddnewPaymentMethodType = z.infer<typeof AddnewPaymentMethodSchema>;

export default function AddnewPaymentMethod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddnewPaymentMethodType>({
    resolver: zodResolver(AddnewPaymentMethodSchema),
  });

  function handleAddPaymentMethod(data: any) {
    console.log('Data:', data);
  }

  return (
    <div>
      <Text
        tag="h3"
        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl capitalize lg:mb-6"
      >
        Add new payment method
      </Text>
      <form
        noValidate
        onSubmit={handleSubmit((data) => handleAddPaymentMethod(data))}
        className="mt-4 lg:mt-6"
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2 lg:gap-y-4">
          <Input
            type="text"
            label="Full name"
            placeholder="Full name"
            labelClassName="!font-normal lg:text-base"
            {...register('fullName')}
            error={errors.fullName?.message}
          />
          <Input
            type="number"
            label="Card number"
            placeholder="1111 2222 3333 4444"
            labelClassName="!font-normal lg:text-base"
            {...register('cardNumber')}
            error={errors.cardNumber?.message}
          />
          <Input
            type="text"
            label="Expiy date"
            placeholder="Your email"
            labelClassName="!font-normal lg:text-base"
            {...register('email')}
            error={errors.email?.message}
          />
          <Input
            type="text"
            label="CCV"
            placeholder="Your number"
            labelClassName="!font-normal lg:text-base"
            {...register('ccv')}
            error={errors.ccv?.message}
          />
        </div>
        <div className="mt-8 flex items-center justify-between gap-3 xl:mt-12">
          <Button
            type="button"
            size="xl"
            variant="outline"
            className="w-full border-gray-dark hover:bg-gray-dark hover:text-white md:w-auto"
          >
            Cancle
          </Button>
          <Button type="submit" size="xl" className="w-full md:w-auto">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
