'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';
import RcRate from 'rc-rate';
import type { RateProps as RcRateProps } from 'rc-rate/lib/Rate';
import type { StarProps as RcStarProps } from 'rc-rate/lib/Star';
import { StarIcon } from '@heroicons/react/24/solid';

const labelClasses = {
  size: {
    sm: 'text-xs mb-1',
    DEFAULT: 'text-sm mb-1.5',
    lg: 'text-sm mb-2',
    xl: 'text-base mb-2',
  },
};

const rateClasses = {
  base: 'flex items-center [&>li]:cursor-pointer [&.rc-rate-disabled>li]:cursor-default [&>li]:relative [&>li]:mr-0.5 rtl:[&>li]:ml-0.5 [&>li]:inline-block text-gray-200',
  size: {
    sm: 'h-4 w-4',
    DEFAULT: 'h-[18px] w-[18px]',
    lg: 'h-5 w-5',
    xl: 'h-[22px] w-[22px]',
  },
  firstStar:
    '[&>li>div>.rc-rate-star-first]:absolute [&>li>div>.rc-rate-star-first]:left-0 rtl:[&>li>div>.rc-rate-star-first]:right-0 [&>li>div>.rc-rate-star-first]:top-0 [&>li>div>.rc-rate-star-first]:w-1/2 [&>li>div>.rc-rate-star-first]:h-full [&>li>div>.rc-rate-star-first]:overflow-hidden',
  color:
    '[&>.rc-rate-star-half>div>.rc-rate-star-first]:text-gray-dark [&>.rc-rate-star-full>div]:text-gray-dark',
  transition:
    '[&>li>div]:transition-all [&>li>div]:duration-300 [&>.rc-rate-star:hover]:scale-110',
};

export interface RateProps
  extends Omit<RcRateProps, 'character' | 'className'> {
  label?: string;
  size?: keyof typeof rateClasses.size;
  character?: React.ReactNode | Array<React.ReactNode>;
  characterClassName?: string;
  tooltips?: Array<string>;
  helperText?: React.ReactNode;
  error?: string;
  labelClassName?: string;
  rateClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  className?: string;
}

const Rate = forwardRef<any, RateProps>(
  (
    {
      size = 'DEFAULT',
      disabled = false,
      character = <StarIcon />,
      label,
      tooltips,
      error,
      helperText,
      labelClassName,
      characterClassName,
      errorClassName,
      helperClassName,
      rateClassName,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={clsx('aegon-rate', className)}>
        {label && (
          <div
            className={clsx('block', labelClasses.size[size], labelClassName)}
          >
            {label}
          </div>
        )}
        <RcRate
          ref={ref}
          disabled={disabled}
          character={({ index }: RcStarProps) => (
            <div
              className={clsx(
                '[&>svg]:fill-current',
                rateClasses.size[size],
                characterClassName,
              )}
            >
              {Array.isArray(character)
                ? character[index as number]
                : character}
            </div>
          )}
          className={clsx(
            rateClasses.base,
            rateClasses.firstStar,
            rateClasses.color,
            !disabled && rateClasses.transition,
            rateClassName,
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red">{error}</p>}
      </div>
    );
  },
);

Rate.displayName = 'Rate';
export default Rate;
