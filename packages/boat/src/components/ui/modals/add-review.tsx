'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { z } from 'zod';
import Textarea from '@/components/ui/form-fields/textarea';
import { useModal } from '@/components/modals/context';
import ActionIcon from '@/components/ui/action-icon';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';
import Rate from '@/components/ui/rating';

const AddReviewSchema = z.object({
  rating: z.number().min(1, { message: 'Minimum 1 star is required.!' }),
  message: z.string().min(1, { message: 'At least say something.!' }),
});

type AddReviewModalType = z.infer<typeof AddReviewSchema>;

export default function AddReview() {
  const { closeModal } = useModal();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddReviewModalType>({
    resolver: zodResolver(AddReviewSchema),
  });

  function handleReview(data: any) {
    console.log('Rating:', data);
    closeModal();
  }

  return (
    <div className="relative z-50 mx-auto w-full max-w-full overflow-hidden rounded-xl bg-white p-6 sm:w-[520px] sm:p-8 md:w-[648px] md:p-10 lg:p-12">
      <div className="flex items-center justify-between">
        <Text tag="h3" className="text-xl leading-8 md:!text-xl">
          Add Review
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
      <form noValidate onSubmit={handleSubmit((data) => handleReview(data))}>
        <div className="mt-8">
          <Text tag="h6">Your rating</Text>
          <Controller
            name="rating"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Rate
                className="mt-3"
                allowClear
                defaultValue={0}
                value={value}
                size="xl"
                onChange={onChange}
                error={errors.rating?.message}
              />
            )}
          />
        </div>
        <Textarea
          className="mt-8"
          label="Feedback"
          textareaClassName="w-full min-h-[160px] focus:border-gray-dark py-3 !px-5"
          labelClassName="!text-base font-bold text-gray-dark"
          {...register('message')}
          error={errors?.message?.message}
        />
        <Button
          type="submit"
          size="xl"
          variant="solid"
          className="mt-4 w-full !py-[15px] !font-semibold uppercase tracking-[0.7px] sm:mt-8 lg:mt-12"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
