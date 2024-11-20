'use client';

import clsx from 'clsx';
import SignUpForm from '@/components/auth/signup-form';
import SocialLogin from '@/components/auth/social-login';

export default function SignUp({ className }: { className?: string }) {
  return (
    <div className={clsx('container mb-12 mt-8 px-4 lg:mb-16', className)}>
      <div className="m-auto w-full max-w-[496px] rounded-lg border border-gray-200 bg-white p-6 pt-9 sm:p-12">
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold uppercase leading-[48px] text-primary">
            Sign Up
          </h2>
          <p className="text-base leading-5 text-gray">
            Welcome Back! Please enter your details
          </p>
        </div>
        <SignUpForm />
        <SocialLogin />
      </div>
    </div>
  );
}
