'use client';

import { BellIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import ActionIcon from '@/components/ui/action-icon';
import Text from '@/components/ui/typography/text';
import Avatar from '@/components/ui/avatar';

interface ChatHeaderProps {
  currentChat: any;
  onClick?: () => void;
}

export default function ChatHeader({ currentChat, onClick }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-lighter py-3">
      <div className="flex items-center gap-3">
        <button onClick={onClick} className="mr-3 md:hidden">
          <ChevronLeftIcon className="h-auto w-4" />
        </button>
        <Avatar src={currentChat.image} size="40" />
        <div>
          <Text className="overflow-ellipsis whitespace-nowrap text-sm font-normal text-gray md:text-base">
            {currentChat.name}
          </Text>
        </div>
        {currentChat.isActive && (
          <span className="block h-2 w-2 rounded-full bg-green-500"></span>
        )}
      </div>
      <ActionIcon variant="outline" rounded="full">
        <BellIcon className="h-auto w-5" />
      </ActionIcon>
    </div>
  );
}
