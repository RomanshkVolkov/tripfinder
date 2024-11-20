'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/ui/form-fields/input';
import Button from '@/components/ui/button';

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'The email is required.' })
    .email({ message: 'The email is invalid.' }),
});

type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordType>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  // TO-DO: Send data to API onSubmit.
  function handleFormSubmit(data: ForgotPasswordType) {
    console.log('Submitted data', data);
  }

  return (
    <form noValidate onSubmit={handleSubmit((d) => handleFormSubmit(d))}>
      <Input
        type="text"
        label="Email"
        className="mb-4"
        error={errors?.email?.message}
        required
        {...register('email')}
      />

      <Button type="submit" className="mb-2 w-full" size="xl">
        Send email
      </Button>
    </form>
  );
}
