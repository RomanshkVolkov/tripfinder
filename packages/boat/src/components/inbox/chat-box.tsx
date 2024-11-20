'use client';

interface ShowChats {
  chats?: any[];
}

export default function ChatBox({ chats }: ShowChats) {
  return (
    <div className="max-h-[374px] flex-grow overflow-y-auto md:max-h-[478px]">
      {chats?.map((item) => (
        <div key={item.id} className="my-2">
          <p className="inline-block rounded-full bg-gray-lightest px-5 py-1 text-sm text-gray-dark md:text-base">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
