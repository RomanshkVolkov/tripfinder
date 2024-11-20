import clsx from 'clsx';
import { forwardRef } from 'react';
import FieldHelperText from '@/components/ui/form-fields/field-helper-text';
import FieldError from '@/components/ui/form-fields/field-error';

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

const textareaClasses = {
  base: 'block peer bg-transparent focus:outline-none focus:ring-[1px] focus:ring-opacity-50 transition duration-200 disabled:bg-gray-50 disabled:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200',
  error:
    'border-red not-read-only:hover:enabled:!border-red not-read-only:focus:enabled:!border-red not-read-only:focus:!ring-red/30',
  size: {
    sm: 'px-2.5 py-1 text-xs',
    DEFAULT: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2 text-base',
    xl: 'px-6 py-2.5 text-base',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  },
  variant: {
    active: {
      base: 'border bg-gray-0 placeholder:opacity-80 read-only:focus:ring-0',
      color: {
        DEFAULT:
          'border-gray-900 focus:enabled:border-gray-1000 focus:ring-gray-900/30 text-gray-1000',
        primary:
          'border-primary focus:enabled:border-primary focus:ring-primary/30 text-primary-dark',
        secondary:
          'border-secondary focus:enabled:border-secondary focus:ring-secondary/30 text-secondary-dark',
        danger:
          'border-red focus:enabled:border-red focus:ring-red/30 text-red-dark',
        info: 'border-blue focus:enabled:border-blue focus:ring-blue/30 text-info-dark',
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
          'bg-gray-200/70 not-read-only:hover:enabled:bg-gray-200/90 focus:ring-gray-900/30 text-gray-1000 placeholder:text-gray-600',
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
      base: 'border-0',
      color: {
        DEFAULT:
          'hover:text-gray-1000 focus:ring-gray-900/30 placeholder:text-gray-500',
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

export interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  /** Set custom rows */
  rows?: number;
  /** Set custom cols */
  cols?: number;
  /** Set custom max length of character */
  maxLength?: number;
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Default value in textarea */
  children?: React.ReactNode;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof labelClasses.size;
  /** The variants of the component are: */
  variant?: keyof typeof textareaClasses.variant;
  /** Change textarea color */
  color?: keyof (typeof textareaClasses.variant)['active']['color'];
  /** Set field label */
  label?: string;
  /** The rounded variants are: */
  rounded?: keyof typeof textareaClasses.rounded;
  /** Show error message using this prop */
  error?: string;
  /** Use labelClassName prop to do some addition style for the field label */
  labelClassName?: string;
  /** Add custom classes for the input filed extra style */
  textareaClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
}

/**
 * A basic widget for getting the user textarea. Here is the API documentation of the Textarea component.
 * And the rest of the props are the same as the original html textarea field.
 * You can use props like `disabled`, `placeholder`, `rows`, `cols`, `maxLength` etc.
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'outline',
      size = 'DEFAULT',
      rounded = 'DEFAULT',
      color = 'DEFAULT',
      label,
      error,
      className,
      labelClassName,
      textareaClassName,
      helperClassName,
      errorClassName,
      helperText,
      ...textareaProps
    },
    ref,
  ) => {
    const variantStyle = textareaClasses.variant[variant];
    return (
      <div className={clsx(containerClasses.base, className)}>
        <label className="block">
          {label && (
            <span
              className={clsx('block', labelClasses.size[size], labelClassName)}
            >
              {label}
            </span>
          )}
          <textarea
            ref={ref}
            className={clsx(
              textareaClasses.base,
              textareaClasses.size[size],
              textareaClasses.rounded[rounded],
              variantStyle.base,
              variantStyle.color[color],
              error && textareaClasses.error,
              textareaClassName,
            )}
            {...textareaProps}
          />
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

Textarea.displayName = 'Textarea';
export default Textarea;
