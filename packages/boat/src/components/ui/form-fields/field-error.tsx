import clsx from 'clsx';

const errorTextClasses = {
  base: 'text-red',
  size: {
    sm: 'text-[10px] mt-0.5',
    DEFAULT: 'text-xs mt-0.5',
    lg: 'text-xs mt-1',
    xl: 'text-sm mt-1',
  },
};

interface FieldErrorProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  tag?: 'div' | 'span';
  error: string | null | undefined;
  size?: keyof typeof errorTextClasses.size;
  className?: string;
}

export default function FieldError({
  tag = 'div',
  error,
  size,
  className,
}: FieldErrorProps) {
  let Component = tag;
  return (
    <Component
      role="alert"
      className={clsx(
        errorTextClasses.base,
        size && errorTextClasses.size[size],
        className,
      )}
    >
      {error}
    </Component>
  );
}
