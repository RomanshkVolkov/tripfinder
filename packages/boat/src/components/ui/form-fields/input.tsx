'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';
import FieldError from '@/components/ui/form-fields/field-error';
import FieldHelperText from '@/components/ui/form-fields/field-helper-text';
import InputIconOnClear from '@/components/ui/form-fields/field-clear-btn';

const containerClasses = {
  base: 'flex flex-col',
};

const labelClasses = {
  size: {
    sm: 'text-xs mb-1',
    DEFAULT: 'text-sm mb-1.5',
    lg: 'text-sm mb-2',
    xl: 'text-base mb-2',
  },
};

const inputClasses = {
  base: 'block peer w-full bg-transparent font-normal focus:outline-none focus:ring-[1px] transition duration-200 disabled:bg-gray-100 disabled:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200',
  error:
    'border-red not-read-only:hover:enabled:!border-red not-read-only:focus:enabled:!border-red not-read-only:focus:!ring-red/30',
  size: {
    sm: 'px-2.5 py-1 text-xs h-8 leading-[32px]',
    DEFAULT:
      'px-4 py-2 text-sm h-10 lg:h-11 2xl:h-12 leading-[40px] lg:leading-[44px] 2xl:leading-[48px]',
    lg: 'px-5 py-2 text-base h-12 leading-[48px]',
    xl: 'px-6 py-2.5 text-base h-14 leading-[56px]',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-full',
  },
  variant: {
    active: {
      base: 'border bg-gray-0 placeholder:opacity-80 read-only:focus:ring-0',
      color: {
        DEFAULT:
          'border-gray-900 focus:enabled:border-gray-1000 focus:ring-gray-900/20 text-gray-1000',
        primary:
          'border-primary focus:enabled:border-primary focus:ring-primary/30 text-primary-dark',
        secondary:
          'border-secondary focus:enabled:border-secondary focus:ring-secondary/30 text-secondary-dark',
        danger:
          'border-red focus:enabled:border-red focus:ring-red/30 text-red-dark',
        info: 'border-blue focus:enabled:border-blue focus:ring-blue/30 text-blue-dark',
        success:
          'border-green focus:enabled:border-green focus:ring-green/30 text-green-dark',
        warning:
          'border-orange focus:enabled:border-orange-dark/70 focus:ring-orange/30 text-orange-dark',
      },
    },
    flat: {
      base: 'border border-0 placeholder:opacity-90 read-only:focus:ring-0',
      color: {
        DEFAULT:
          'bg-gray-200/70 not-read-only:hover:enabled:bg-gray-200/90 focus:ring-gray-900/20 text-gray-1000 placeholder:text-gray-600',
        primary:
          'bg-primary-lighter/70 not-read-only:hover:enabled:bg-primary-lighter/90 focus:ring-primary/30 text-primary-dark',
        secondary:
          'bg-secondary-lighter/70 not-read-only:hover:enabled:bg-secondary-lighter/90 focus:ring-secondary/30 text-secondary-dark',
        danger:
          'bg-red-lighter/70 not-read-only:hover:enabled:bg-red-lighter/90 focus:ring-red/30 text-red-dark',
        info: 'bg-blue-lighter/70 not-read-only:hover:enabled:bg-blue-lighter/90 focus:ring-blue/30 text-blue-dark',
        success:
          'bg-green-lighter/70 not-read-only:hover:enabled:bg-green-lighter/90 focus:ring-green/30 text-green-dark',
        warning:
          'bg-orange-lighter/80 not-read-only:hover:enabled:bg-orange-lighter/90 focus:ring-orange/30 text-orange-dark',
      },
    },
    outline: {
      base: 'bg-transparent border border-gray-300 read-only:border-gray-300 read-only:focus:ring-0 placeholder:text-gray-500',
      color: {
        DEFAULT:
          'not-read-only:hover:enabled:border-gray-1000 focus:border-gray-1000 not-read-only:focus:enabled:border-gray-1000 focus:ring-gray-900/20',
        primary:
          'not-read-only:hover:enabled:border-primary not-read-only:focus:enabled:border-primary focus:ring-primary/30',
        secondary:
          'not-read-only:hover:enabled:border-secondary not-read-only:focus:enabled:border-secondary focus:ring-secondary/30',
        danger:
          'not-read-only:hover:enabled:border-red not-read-only:focus:enabled:border-red focus:ring-red/30',
        info: 'not-read-only:hover:enabled:border-blue not-read-only:focus:enabled:border-blue focus:ring-blue/30',
        success:
          'not-read-only:hover:enabled:border-green not-read-only:focus:enabled:border-green focus:ring-green/30',
        warning:
          'not-read-only:hover:enabled:border-orange not-read-only:focus:enabled:border-orange-dark/70 focus:ring-orange/30',
      },
    },
    text: {
      base: 'border-0 bg-transparent',
      color: {
        DEFAULT:
          'hover:text-gray-1000 focus:ring-gray-900/20 placeholder:text-gray-500',
        primary: 'hover:text-primary-dark focus:ring-primary/30 text-primary',
        secondary:
          'hover:text-secondary-dark focus:ring-secondary/30 text-secondary',
        danger: 'hover:text-red-600 focus:ring-red/30 text-red',
        info: 'hover:text-blue-dark focus:ring-blue/30 text-blue',
        success:
          'hover:text-green-dark focus:ring-green/30 text-green placeholder:opacity-100',
        warning:
          'hover:text-orange-dark focus:ring-orange/30 text-orange placeholder:opacity-100',
      },
    },
  },
};

// apply only when input has clearable input
const inputClearableClasses = {
  base: 'rtl:pr-[inherit]',
  size: {
    sm: 'pr-8 rtl:pl-8',
    DEFAULT: 'pr-10 rtl:pl-10',
    lg: 'pr-11 rtl:pl-11',
    xl: 'pr-12 rtl:pl-12',
  },
  hasEndIcon: {
    sm: 'pr-14 rtl:pl-14',
    DEFAULT: 'pr-16 rtl:pl-16',
    lg: 'pr-[4.5rem] rtl:pl-[4.5rem]',
    xl: 'pr-20 rtl:pl-20',
  },
};

// apply only when input has startIcon or endIcon
const inputClassesWithIcon = {
  iconSize: {
    sm: 'w-8',
    DEFAULT: 'w-10',
    lg: 'w-12',
    xl: 'w-14',
  },
  startPadding: {
    base: 'rtl:pl-[inherit]',
    size: {
      sm: 'pl-8 rtl:pr-8',
      DEFAULT: 'pl-10 rtl:pr-10',
      lg: 'pl-12 rtl:pr-12',
      xl: 'pl-14 rtl:pr-14',
    },
  },
  endPadding: {
    base: 'rtl:pr-[inherit]',
    size: {
      sm: 'pr-8 rtl:pl-8',
      DEFAULT: 'pr-10 rtl:pl-10',
      lg: 'pr-12 rtl:pl-12',
      xl: 'pr-14 rtl:pl-14',
    },
  },
};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  type?: 'text' | 'email' | 'url' | 'search' | 'password' | 'number';
  variant?: keyof typeof inputClasses.variant;
  size?: keyof typeof inputClasses.size;
  rounded?: keyof typeof inputClasses.rounded;
  color?: keyof (typeof inputClasses.variant)['active']['color'];
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  clearable?: boolean;
  onClearClick?: (event: React.MouseEvent) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  startIconClassName?: string;
  startIconClickable?: boolean;
  endIconClickable?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  helperClassName?: string;
  errorClassName?: string;
  helperText?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      variant = 'outline',
      size = 'DEFAULT',
      rounded = 'DEFAULT',
      color = 'DEFAULT',
      disabled,
      placeholder,
      label,
      error,
      clearable,
      onClearClick,
      startIcon,
      endIcon,
      startIconClassName,
      startIconClickable,
      endIconClickable,
      labelClassName,
      inputClassName,
      errorClassName,
      helperClassName,
      helperText,
      ...inputProps
    },
    ref,
  ) => {
    const variantStyle = inputClasses.variant[variant];
    return (
      <div className={clsx(containerClasses.base, className)}>
        <label className="block   text-base font-bold leading-7">
          {label && (
            <span
              className={clsx('block', labelClasses.size[size], labelClassName)}
            >
              {label}
            </span>
          )}
          <div
            className={clsx('relative', [
              (startIcon || endIcon || clearable) && inputClasses.size[size],
            ])}
          >
            {startIcon && (
              <div
                className={clsx(
                  'absolute left-0 top-0 flex h-full items-center justify-center bg-transparent p-1 leading-normal rtl:left-auto rtl:right-0',
                  startIconClickable
                    ? 'z-[2] cursor-pointer'
                    : 'pointer-events-none',
                  inputClassesWithIcon.iconSize[size],
                  startIconClassName,
                )}
              >
                {startIcon}
              </div>
            )}
            <input
              ref={ref}
              type={type}
              disabled={disabled}
              spellCheck="false"
              // placeholder is a required prop for the clearable input component even if the user does not set any
              placeholder={placeholder ? placeholder : 'Screen reader only'}
              className={clsx(
                inputClasses.base,
                inputClasses.size[size],
                inputClasses.rounded[rounded],
                variantStyle.base,
                variantStyle.color[color],
                // hide/invisible fallback screen reader only placeholder
                !placeholder && 'placeholder:opacity-0',
                clearable && inputClearableClasses.base,
                clearable &&
                  (endIcon
                    ? inputClearableClasses.hasEndIcon[size]
                    : inputClearableClasses.size[size]),
                [
                  (clearable || startIcon || endIcon) && 'absolute inset-0',
                  startIcon && inputClassesWithIcon.startPadding.size[size],
                  endIcon && inputClassesWithIcon.endPadding.size[size],
                  error && inputClasses.error,
                  inputClassName,
                ],
              )}
              {...inputProps}
            />
            {clearable && (
              <InputIconOnClear
                size="xl"
                onClick={onClearClick}
                hasSuffix={Boolean(endIcon)}
                className={clsx(
                  'absolute right-2 top-1/2 -translate-y-1/2',
                  inputClearableClasses,
                )}
              />
            )}
            {endIcon && (
              <div
                className={clsx(
                  'absolute right-0 top-0 flex h-full items-center justify-center bg-transparent p-1 leading-normal rtl:left-0 rtl:right-auto',
                  endIconClickable
                    ? 'z-[2] cursor-pointer'
                    : 'pointer-events-none',
                  inputClassesWithIcon.iconSize[size],
                )}
              >
                {endIcon}
              </div>
            )}
          </div>
        </label>
        {!error && helperText && (
          <FieldHelperText size={size} className={helperClassName}>
            {helperText}
          </FieldHelperText>
        )}
        {error && (
          <FieldError size={size} error={error} className={errorClassName} />
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
