'use client';

import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';

const socialInfo = [
  {
    id: 'google',
    title: 'google',
    status: true,
  },
  {
    id: 'twitter',
    title: 'twitter',
    status: false,
  },
  {
    id: 'facebook',
    title: 'facebook',
    status: false,
  },
  {
    id: 'github',
    title: 'github',
    status: false,
  },
];

export default function SocialAccount() {
  return (
    <div>
      <Text
        tag="h3"
        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl capitalize lg:mb-6"
      >
        Social Account
      </Text>
      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        {socialInfo.map((item) => (
          <div
            key={item.id}
            className="card-gradient flex items-center justify-between rounded-xl border border-gray-lighter p-6"
          >
            <div>
              <Text tag="h6" className="text-sm capitalize">
                {item.title}
              </Text>
              <Text className="mt-2 capitalize text-gray">
                {item.status ? 'connected' : 'not connected'}
              </Text>
            </div>
            <Button
              size="sm"
              variant={item.status ? 'outline' : 'solid'}
              className="capitalize transition-transform duration-100 focus:!ring-0"
            >
              {item.status ? 'disconnect' : 'connect'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
