'use client';

import {
  ComputerDesktopIcon,
  DeviceTabletIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';

const deviceHistory = [
  {
    id: 'random1',
    device: 'desktop',
    title: 'Windows 10.0 . Chrome',
    location: 'Santa Maria Maggiore, Milazzo .',
    time: 'November 22, 2022 at 12:15',
    logedIn: true,
  },
  {
    id: 'random2',
    device: 'desktop',
    title: 'Windows 11.0 . Firefox',
    location: 'Santa Maria Maggiore, Milazzo .',
    time: 'November 22, 2022 at 12:15',
    logedIn: true,
  },
  {
    id: 'random3',
    device: 'tablet',
    title: 'Mac OS. Safari',
    location: 'Santa Maria Maggiore, Milazzo .',
    time: 'November 22, 2022 at 12:15',
    logedIn: true,
  },
  {
    id: 'random4',
    device: 'mobile',
    title: 'Windows 10.0 . Chrome',
    location: 'Santa Maria Maggiore, Milazzo .',
    time: 'November 22, 2022 at 12:15',
    logedIn: true,
  },
];

export default function DeviceHistory() {
  return (
    <div>
      <Text
        tag="h3"
        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl capitalize lg:mb-6"
      >
        Device history
      </Text>
      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        {deviceHistory.map((item) => (
          <div
            key={item.id}
            className="card-gradient flex flex-col justify-between rounded-xl border border-gray-lighter p-6 xs:flex-row xs:items-center"
          >
            <div className="flex gap-4 lg:items-center lg:gap-5">
              <div>
                {item.device === 'desktop' && (
                  <ComputerDesktopIcon className="h-auto w-6" />
                )}
                {item.device === 'tablet' && (
                  <DeviceTabletIcon className="h-auto w-6" />
                )}
                {item.device === 'mobile' && (
                  <DevicePhoneMobileIcon className="h-auto w-6" />
                )}
              </div>
              <div>
                <Text tag="h6" className="text-sm capitalize">
                  {item.title}
                </Text>
                <Text className="mt-2 capitalize text-gray">
                  {item.location} <br className="lg:hidden" />
                  {item.time}
                </Text>
              </div>
            </div>
            <div className="mt-4 pl-10 xs:mt-0 xs:pl-0">
              {item.logedIn && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-shrink-0 capitalize !text-gray-dark focus:!ring-0"
                >
                  Log out
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
