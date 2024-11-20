import clsx from 'clsx';

const classes = {
  h1: 'md:text-h1 font-bold text-gray-dark',
  h2: 'md:text-h2 font-bold text-gray-dark',
  h3: 'md:text-h3 font-bold text-gray-dark',
  h4: 'md:text-h4 font-bold text-gray-dark',
  h5: 'md:text-h5 font-bold text-gray-dark',
  h6: 'md:text-h6 font-bold text-gray-dark',
  p: 'text-gray-dark text-sm md:text-base',
  i: '',
  b: '',
  q: 'text-quote',
  em: '',
  strong: '',
  small: '',
  span: '',
  del: '',
  mark: '',
  abbr: 'cursor-help',
  pre: 'border-2 border-gray-300 py-3 px-4 rounded-xl bg-gray-100',
  code: 'border border-gray-300 py-2 px-3 rounded-md shadow',
  kbd: 'bg-gray-100 border border-gray-300 text-gray-900 rounded-lg leading-none inline-flex items-center justify-center text-sm py-1.5 px-2',
  blockquote: 'border-l-4 border-gray-300 text-quote py-3 px-4',
  sub: '',
  sup: '',
};

export interface TextProps {
  /**  */
  tag?: keyof typeof classes;
  /** title attribute only appear when tag is `abbr` */
  title?: string;
  /** Add custom classes for extra style */
  className?: string;
}

export default function Text({
  tag = 'p',
  title,
  children,
  className,
}: React.PropsWithChildren<TextProps>) {
  let Component = tag;
  if (tag === 'abbr' && title === undefined) {
    console.warn('title attribute is missing for abbr tag.');
  }
  return (
    <Component
      {...(title && { title })}
      className={clsx(classes[tag], className)}
    >
      {children}
    </Component>
  );
}

Text.displayName = 'Text';
