import clsx from 'clsx';

const helperTextClasses = {
  size: {
    sm: 'text-[10px] mt-0.5',
    DEFAULT: 'text-xs mt-0.5',
    lg: 'text-xs mt-1',
    xl: 'text-sm mt-1',
  },
};

export interface FieldHelperTextProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  tag?: 'div' | 'span';
  size?: keyof typeof helperTextClasses.size;
  className?: string;
}

export default function FieldHelperText({
  size,
  tag = 'div',
  children,
  className,
}: React.PropsWithChildren<FieldHelperTextProps>) {
  let Component = tag;
  return (
    <Component
      role="alert"
      className={clsx(size && helperTextClasses.size[size], className)}
    >
      {children}
    </Component>
  );
}
