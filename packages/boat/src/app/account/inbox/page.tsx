'use client';

import { chatData } from 'public/data/chatData';
import { useState } from 'react';
import ChatSidebar from '@/components/inbox/chat-sidebar';
import ChatHeader from '@/components/inbox/chat-header';
import ChatInput from '@/components/inbox/chat-input';
import ChatBox from '@/components/inbox/chat-box';
import clsx from 'clsx';

type chatDataType = {
  id: Date;
  text: string;
}[];

export default function InboxPage() {
  const [chat, setChat] = useState('');
  const [currentChat, setCurrentChat] = useState(chatData[0]);
  const [data, setData] = useState<chatDataType>([]);
  const [toggler, setToggler] = useState(false);

  function handleCurrentChat(id: string) {
    setToggler(!toggler);
    chatData.forEach((item) => {
      if (item.id === id) {
        setCurrentChat(item);
      }
    });
    setData([]);
  }

  // handle submit when submit text
  function handleSubmit(e: any) {
    e.preventDefault();
    if (chat === '') {
      return false;
    }
    setData([
      ...data,
      {
        id: new Date(),
        text: chat,
      },
    ]);
    setChat('');
  }

  return (
    <div className="container-fluid w-full py-8 md:py-12 xl:py-16">
      <div className="relative mx-auto grid min-h-[500px] w-full !max-w-7xl grid-cols-1 gap-0 overflow-hidden rounded-xl md:min-h-[600px] md:grid-cols-[200px_auto] md:shadow-card xl:grid-cols-[250px_auto] 3xl:grid-cols-[300px_auto]">
        <ChatSidebar
          className={clsx(
            'absolute inset-0 z-10 opacity-100 transition-all duration-500 md:static',
            toggler &&
              'translate-y-full opacity-50 md:translate-y-0 md:opacity-100',
          )}
          activeChatClassName="bg-white"
          currentChat={currentChat}
          onClick={handleCurrentChat}
        />
        <div className="flex flex-col pb-2 md:px-5 ">
          <ChatHeader
            currentChat={currentChat}
            onClick={() => setToggler(!toggler)}
          />
          <ChatBox chats={data} />
          <ChatInput
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
