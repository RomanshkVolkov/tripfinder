'use client';

import { chatData } from 'public/data/chatData';
import { useState } from 'react';
import clsx from 'clsx';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Input from '@/components/ui/form-fields/input';
import Text from '@/components/ui/typography/text';
import Avatar from '@/components/ui/avatar';

interface Props {
  onClick?: (key: string) => void;
  activeChatClassName?: string;
  currentChat: {
    id: string;
  };
  className?: string;
}

export default function ChatSidebar({
  onClick,
  activeChatClassName,
  currentChat,
  className,
}: Props) {
  const [searchfilter, setSearchFilter] = useState('');
  const [people, setPeople] = useState(chatData);

  return (
    <div className={clsx('overflow-y-auto bg-gray-lightest', className)}>
      <div className="p-5">
        <Input
          type="text"
          size="DEFAULT"
          placeholder="Search by name"
          startIcon={<MagnifyingGlassIcon className="h-auto w-4" />}
          value={searchfilter}
          className="rounded-lg bg-white"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
      </div>
      <div>
        {people
          .filter((item) =>
            item.name.toLowerCase().includes(searchfilter.toLowerCase()),
          )
          .map((item) => (
            <div
              key={item.id}
              onClick={() => onClick && onClick(item.id)}
              className={clsx(
                'flex cursor-pointer items-center px-5 py-3 hover:bg-white',
                item.id === currentChat.id && activeChatClassName,
              )}
            >
              <Avatar src={item.image} size="40" />
              <div className="ml-3 rtl:ml-0 rtl:mr-3">
                <Text className="overflow-ellipsis whitespace-nowrap text-sm font-normal text-gray md:text-base">
                  {item.name}
                </Text>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
