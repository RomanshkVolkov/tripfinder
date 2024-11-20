'use client';

import Image from 'next/image';
import useAuth from '@/hooks/use-auth';
import { Routes } from '@/config/routes';
import { useRouter } from 'next/navigation';
import { useModal } from '@/components/modals/context';
import Text from '@/components/ui/typography/text';
import Section from '@/components/ui/section';
import Button from '@/components/ui/button';

export default function ChatBlock() {
  const router = useRouter();
  const { isAuthorized } = useAuth();
  const { openModal } = useModal();
  function handleClick() {
    if (isAuthorized) {
      router.push(Routes.public.inbox);
    } else {
      openModal('SIGN_IN');
    }
  }

  return (
    <Section className="py-5 xl:py-7">
      <div className="flex justify-between">
        <div>
          <Text
            tag="h3"
            className="mb-3 text-xl capitalize md:mb-2 md:!text-[22px] 2xl:!text-2xl"
          >
            Still have questions?
          </Text>
          <p className="mb-8 leading-6 text-gray">
            Get a fast response about property amenities, check-in times, and
            general questions.
          </p>
          <Button
            size="xl"
            variant="outline"
            className="w-full !border-gray-dark !px-4 !py-[8px] !font-bold text-gray-dark hover:bg-gray-dark hover:text-white md:w-auto md:border-gray lg:!px-[28px] lg:!py-[14px]"
            onClick={handleClick}
          >
            Chat now
          </Button>
        </div>
        <div className="relative hidden h-40 w-64 md:block">
          <Image
            src="/images/questions.png"
            alt="questions"
            fill
            sizes="(min-width: 320) 100vw, 100vw"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </Section>
  );
}
