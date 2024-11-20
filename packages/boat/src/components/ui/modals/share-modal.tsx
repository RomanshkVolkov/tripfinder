'use client';

import { useEffect, useState } from 'react';
import Text from '@/components/ui/typography/text';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import {
  ChatBubbleOvalLeftIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { TwitterOutlineIcon } from '@/components/icons/twitter-outline-icon';
import { TelegramIcon } from '@/components/icons/telegram-icon';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { EmailIcon } from '@/components/icons/email-icon';
import { useModal } from '@/components/modals/context';
import ActionIcon from '@/components/ui/action-icon';

const list = [
  {
    icon: <ChatBubbleOvalLeftIcon className="h-6 w-6" />,
    path: 'https://facebook.com',
    color: '#6A0AB5',
    text: 'Chat',
  },
  {
    icon: <TelegramIcon className="h-6 w-6" />,
    path: 'https://telegram.com',
    color: '#2DA3DE',
    text: 'Telegram',
  },
  {
    icon: <WhatsappIcon className="h-6 w-6" />,
    path: 'https://whatsapp.com',
    color: '#03B603',
    text: 'Whatsapp',
  },
  {
    icon: <TwitterOutlineIcon className="h-6 w-6" />,
    path: 'https://twitter.com',
    color: '#1DA1F2',
    text: 'Twitter',
  },
  {
    icon: <EmailIcon className="h-6 w-6" />,
    path: 'https://email.com',
    color: '#B9422A',
    text: 'Email',
  },
];

export default function ShareModal() {
  const { closeModal } = useModal();
  const [copied, setCopied] = useState(false);
  const [state, setState] = useState(
    'https://www.figma.com/file/NlfVhYygR9mAQasa',
  );

  useEffect(() => {
    if (copied) {
      navigator.clipboard.writeText(state);
      setTimeout(() => {
        setCopied(!copied);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [copied]);

  return (
    <div className="relative z-50 mx-auto w-full max-w-full overflow-hidden rounded-xl bg-white p-4 xs:w-[480px] sm:w-[520px] sm:p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <Text tag="h3" className="text-base leading-8 md:!text-xl">
          Share with
        </Text>
        <ActionIcon
          size="sm"
          variant="outline"
          className="border-none !p-0 focus:!ring-0"
          onClick={closeModal}
        >
          <XMarkIcon className="h-6 w-6" />
        </ActionIcon>
      </div>
      <div className="mt-7 flex items-center justify-between">
        {list.map((item, index) => (
          <div key={`social-media-${index}`} className="group text-center">
            <a
              target="_blank"
              href={item.path}
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200 group-hover:shadow-md sm:h-16 sm:w-16 xl:h-[72px] xl:w-[72px]"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </a>
            <p className="mt-4   text-xs font-normal text-gray-dark sm:text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <Text tag="h3" className="mt-8 text-base leading-8 md:!text-xl">
        Or share with link
      </Text>
      <div className="mt-4 flex w-full items-center justify-between gap-4 rounded-lg bg-gray-lightest p-2 sm:px-5 sm:py-4 md:mt-7">
        <p className="w-3/4 overflow-clip text-ellipsis   text-sm font-normal text-gray">
          {state}
        </p>
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => setCopied(!copied)}
          className="focus:!ring-0"
          title="copy link"
        >
          {copied ? (
            <CheckCircleIcon className="h-6 w-6 rounded-full bg-white text-green-400" />
          ) : (
            <DocumentDuplicateIcon className="h-6 w-6 text-gray" />
          )}
        </ActionIcon>
      </div>
    </div>
  );
}
