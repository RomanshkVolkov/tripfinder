'use client';

import clsx from 'clsx';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useModal } from '@/components/modals/context';
import ActionIcon from '@/components/ui/action-icon';

export default function SearchIconBtn({
  className = 'lg:hidden',
}: {
  className?: string;
}) {
  const { openModal } = useModal();
  return (
    <ActionIcon
      variant="text"
      className={clsx('focus:!ring-0', className)}
      onClick={() => openModal('SEARCH_MODAL')}
    >
      <MagnifyingGlassIcon className="h-6 w-5 sm:w-6" />
    </ActionIcon>
  );
}
