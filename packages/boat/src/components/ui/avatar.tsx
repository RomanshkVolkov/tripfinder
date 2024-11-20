'use client';

import type { ReactAvatarProps } from 'react-avatar';
import clsx from 'clsx';
import ReactAvatar from 'react-avatar';
export { ConfigProvider, Cache } from 'react-avatar';

const classes = {
  base: 'object-cover',
  rounded: {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    full: 'rounded-full',
  },
};

interface AvatarProps extends ReactAvatarProps {
  rounded?: keyof typeof classes.rounded;
}

const Avatar = ({ className, rounded = 'full', ...props }: AvatarProps) => {
  return (
    <ReactAvatar
      className={clsx(
        className,
        classes.base,
        classes.rounded[rounded],
        props.onClick && 'cursor-pointer',
      )}
      {...props}
    />
  );
};

// Avatar.displayName = 'Avatar';
export default Avatar;
