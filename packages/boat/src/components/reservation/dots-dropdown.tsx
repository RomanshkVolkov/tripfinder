'use client';

import { Fragment } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import {
  EllipsisHorizontalIcon,
  PencilIcon,
  ViewfinderCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';

interface MenuItemProps {
  onClick?: (e: any) => void;
}

const dropdown = ['edit', 'preview', 'delete'];

export default function DotsDropdown({ onClick }: MenuItemProps) {
  return (
    <Menu>
      <MenuButton className="text-gray-dark">
        <EllipsisHorizontalIcon className="h-auto w-5" />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        portal={true}
        modal={false}
        className="min-w-36 rounded-lg bg-white z-50 border border-gray-200 p-1 shadow-lg"
      >
        {dropdown.map((item) => (
          <MenuItem
            key={`reservation-${item}`}
            as="button"
            type="button"
            className="flex w-full items-center gap-3 rounded-md py-2 px-3 text-left text-sm capitalize hover:bg-gray-lightest"
            onClick={onClick}
            id={item}
          >
            {item === 'edit' && <PencilIcon className="size-4" />}
            {item === 'preview' && <ViewfinderCircleIcon className="size-4" />}
            {item === 'delete' && <TrashIcon className="size-4" />} {item}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
