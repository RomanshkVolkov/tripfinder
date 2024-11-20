'use client';

import { FileWithPath } from 'react-dropzone';
import { Fragment } from 'react';
import Image from 'next/image';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';

type Props = {
  file: FileWithPath;
  onDelete: () => void;
};

export default function UploadedPhotoPreview({ file, onDelete }: Props) {
  return (
    <div className="relative h-[180px] w-full transition-all duration-200 xs:h-[230px] md:h-56 xl:h-[260px]">
      <Image
        src={URL.createObjectURL(file)}
        alt={URL.createObjectURL(file)}
        fill
        priority
        className="rounded-md object-cover"
      />
      <Menu as="div" className="absolute right-2 top-2 inline-block ">
        <div>
          <MenuButton className="rounded-lg bg-white px-2 py-1 text-gray-dark hover:bg-gray-lightest">
            <EllipsisHorizontalIcon className="h-auto w-5" />
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 top-full min-w-[160px] rounded-lg bg-white shadow-lg xl:mt-2 xl:min-w-[192px]">
            <div className="rounded-lg p-2">
              <MenuItem
                as="button"
                type="button"
                className="w-full rounded-md p-2 text-left text-sm font-semibold hover:bg-gray-lightest xl:text-base"
              >
                Make cover photo
              </MenuItem>
              <MenuItem
                as="button"
                type="button"
                className="w-full rounded-md p-2 text-left text-sm font-semibold text-red hover:bg-gray-lightest xl:text-base"
                onClick={onDelete}
              >
                Delete
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
