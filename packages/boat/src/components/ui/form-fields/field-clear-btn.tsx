'use client';

import clsx from 'clsx';

const inputIconClearClasses = {
  base: 'inline-flex shrink-0 transform items-center justify-center rounded-full p-[1px] text-gray-dark transition-all duration-200 ease-in-out',
  size: {
    sm: 'h-3.5 w-3.5',
    DEFAULT: 'h-4 w-4',
    lg: 'h-4 w-4',
    xl: 'h-[18px] w-[18px]',
  },
  hasSuffix: {
    sm: 'mr-1.5 rtl:ml-1.5 rtl:mr-[inherit]',
    DEFAULT: 'mr-2 rtl:ml-2 rtl:mr-[inherit]',
    lg: 'mr-2.5 rtl:ml-2.5 rtl:mr-[inherit]',
    xl: 'mr-2.5 rtl:ml-2.5 rtl:mr-[inherit]',
  },
};

interface InputIconClearProps {
  hasSuffix?: boolean;
  size?: keyof typeof inputIconClearClasses.size;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}

export default function InputIconOnClear({
  size,
  onClick,
  hasSuffix,
  className,
}: InputIconClearProps) {
  return (
    <span
      onClick={onClick}
      className={clsx(
        'input-clear-btn cursor-pointer', // must contain this CSS class in this component
        inputIconClearClasses.base,
        size && [
          inputIconClearClasses.size[size],
          hasSuffix && inputIconClearClasses.hasSuffix[size],
        ],
        className,
      )}
    >
      {/* HeroIcon: x-mark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-auto"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </span>
  );
}
