'use client';

import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/section';

type BannerBlockProps = {
  bgImg: string;
  title: string;
  description: string;
  className?: string;
  bgImgClassName?: string;
  contentWrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  sectionClassName?: string;
};

export default function BannerBlock({
  bgImg,
  title,
  description,
  children,
  className,
  bgImgClassName,
  sectionClassName,
  contentWrapperClassName,
  titleClassName,
  descriptionClassName,
}: React.PropsWithChildren<BannerBlockProps>) {
  return (
    <Section
      tag="div"
      className={clsx(
        'container-fluid my-12 !px-0 md:!px-6 lg:my-16 2xl:!px-7 3xl:!px-8',
        sectionClassName,
      )}
    >
      <div
        className={clsx(
          'relative md:px-12 md:py-12 lg:px-14 xl:px-20 xl:py-16 3xl:px-32 3xl:py-20 4xl:px-40 4xl:py-[88px]',
          className,
        )}
      >
        <Image
          src={bgImg}
          alt="Call to action Banner"
          className={clsx(
            'aspect-[18/5] bg-gray-lighter object-cover md:max-h-full md:rounded-2xl',
            bgImgClassName,
          )}
          quality={100}
          fill
        />
        <div className={clsx('relative', contentWrapperClassName)}>
          <h2
            className={clsx(
              'text-center text-2xl font-bold text-white md:text-left md:text-3xl xl:mb-6 3xl:text-5xl',
              titleClassName,
            )}
          >
            {title}
          </h2>
          <p
            className={clsx(
              'mb-7 leading-[1.78] text-white md:text-base xl:mb-10 3xl:text-lg',
              descriptionClassName,
            )}
          >
            {description}
          </p>
          {children}
        </div>
      </div>
    </Section>
  );
}
