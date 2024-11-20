import clsx from 'clsx';
import { forwardRef } from 'react';

const containerClasses = {
  base: 'inline-flex items-center',
  labelPlacement: {
    start: '',
    end: '',
    top: 'flex-col-reverse',
    bottom: 'flex-col',
  },
};

const radioDivClasses = {
  base: 'inline-flex items-center justify-center rounded-full',
  customSize: {
    DEFAULT: 'p-3',
    sm: 'p-2',
    lg: 'p-4',
  },
  labelPlacement: {
    start: 'order-last',
  },
  color: {
    DEFAULT: 'hover:bg-gray-100',
    primary: 'hover:bg-blue-100',
    secondary: 'hover:bg-gray-200',
    danger: 'hover:bg-red-100',
    info: 'hover:bg-sky-100',
    success: 'hover:bg-green-100',
    warning: 'hover:bg-orange-100',
  },
};

const radioClasses = {
  base: 'focus:ring-0 cursor-pointer rounded-full disabled:border-opacity-50 disabled:cursor-not-allowed',
  customSize: {
    DEFAULT: 'w-5 h-5',
    sm: 'w-4 h-4',
    lg: 'w-6 h-6',
  },
  color: {
    DEFAULT: 'text-gray-700 border-gray-500',
    primary: 'text-blue-500 border-blue-600',
    secondary: 'text-gray-900 border-gray-900',
    danger: 'text-red-500 border-red-600',
    info: 'text-sky-500 border-sky-600',
    success: 'text-green-500 border-green-600',
    warning: 'text-orange-500 border-orange-600',
  },
};

const labelClasses = {
  base: 'ml-1 hover:cursor-pointer',
  customSize: {
    DEFAULT: 'font-medium',
    sm: 'text-sm',
    lg: 'text-lg',
  },
  disabled: 'text-opacity-50 cursor-not-allowed',
  labelPlacement: {
    start: 'order-first',
  },
  color: {
    DEFAULT: 'text-gray-700',
    primary: 'text-blue-500',
    secondary: 'text-gray-900',
    danger: 'text-red-500',
    info: 'text-sky-500',
    success: 'text-green-500',
    warning: 'text-orange-500',
  },
};

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customSize?: keyof typeof radioClasses.customSize;
  color?: keyof typeof radioClasses.color;
  labelPlacement?: keyof typeof containerClasses.labelPlacement;
  label?: string;
  checked?: boolean;
  isDisabled?: boolean;
  inputClassName?: string;
  labelClassName?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      children,
      className,
      inputClassName,
      labelClassName,
      customSize = 'DEFAULT',
      color = 'DEFAULT',
      labelPlacement = 'end',
      label,
      isDisabled = false,
      ...radioProps
    },
    ref,
  ) => {
    return (
      <div className={clsx(className)}>
        {children}
        <div
          className={clsx(
            containerClasses.base,
            containerClasses.labelPlacement[labelPlacement],
          )}
        >
          <div
            className={clsx(
              radioDivClasses.base,
              radioDivClasses.customSize[customSize],
              !isDisabled && radioDivClasses.color[color],
              labelPlacement === 'start' &&
                radioDivClasses.labelPlacement[labelPlacement],
            )}
          >
            <input
              type="radio"
              id={id}
              ref={ref}
              disabled={isDisabled}
              className={clsx(
                radioClasses.base,
                radioClasses.customSize[customSize],
                radioClasses.color[color],
                inputClassName,
              )}
              {...radioProps}
            />
          </div>
          {label && (
            <label
              htmlFor={id}
              className={clsx(
                labelClasses.base,
                labelClasses.customSize[customSize],
                labelClasses.color[color],
                labelPlacement === 'start' &&
                  labelClasses.labelPlacement[labelPlacement],
                isDisabled && labelClasses.disabled,
                labelClassName,
              )}
            >
              {label}
            </label>
          )}
        </div>
      </div>
    );
  },
);

Radio.displayName = 'Radio';
export default Radio;
