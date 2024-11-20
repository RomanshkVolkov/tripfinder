'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Input from '@/components/ui/form-fields/input';
import ActionIcon from '@/components/ui/action-icon';

interface ChatInputType {
  value: string;
  onChange: (e: any) => void;
  onSubmit?: (data: any) => void;
}

export default function ChatInput({
  value,
  onChange,
  onSubmit,
}: ChatInputType) {
  return (
    <div className="border-t border-gray-lighter pt-2 xl:pt-3">
      <form noValidate onSubmit={onSubmit} className="relative">
        <Input
          type="text"
          value={value}
          variant="outline"
          placeholder="Type your message..."
          className="rounded-lg border-gray-lighter"
          inputClassName="pr-16 pl-2 md:pl-4 lg:pr-24"
          onChange={onChange}
        />
        <ActionIcon
          onClick={onSubmit}
          className="absolute inset-y-0 right-0 top-0 !h-full w-14 cursor-pointer rounded-none rounded-r-lg text-white lg:w-20"
        >
          <PaperAirplaneIcon className="h-auto w-5" />
        </ActionIcon>
      </form>
    </div>
  );
}
