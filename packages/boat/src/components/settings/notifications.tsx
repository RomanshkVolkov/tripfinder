'use client';

import { useState } from 'react';
import AdvancedCheckbox from '@/components/ui/form-fields/advanced-checkbox';
import Checkbox from '@/components/ui/form-fields/checkbox';
import Text from '@/components/ui/typography/text';

const notificationsAllowed = [
  {
    id: 'rand01',
    title: 'Comments',
    description: 'Get notified when someones posts a comment on a posting.',
    checked: true,
  },
  {
    id: 'rand02',
    title: 'Candidates',
    description: 'Get notified when a candidate applies for a job.',
    checked: false,
  },
  {
    id: 'rand03',
    title: 'offers',
    description: 'Get notified when a candidate accepts or rejects an offer.',
    checked: true,
  },
];

const pushNotifications = [
  {
    id: 'everything',
    text: 'Everything',
    description: 'Send Every changes as a push notification.',
  },
  {
    id: 'sameasemail',
    text: 'Same as email',
    description: 'Send Every changes as a push notification.',
  },
  {
    id: 'nopushnotifications',
    text: 'No push notifications',
    description: 'Send Every changes as a push notification.',
  },
];

interface AdvancedCardPropsTypes {
  checked: boolean;
  onChange: () => void;
  title?: string;
  description?: string;
}

function SelectBoxCard({
  checked,
  onChange,
  title,
  description,
}: AdvancedCardPropsTypes) {
  return (
    <AdvancedCheckbox
      name="payment-secondary"
      value="single"
      className="border-secondary-lighter card-gradient w-full rounded-xl border p-4 text-sm hover:cursor-pointer hover:border-gray-dark lg:p-6"
      inputClassName="[&:checked~span]:!border-gray-dark"
      checked={checked}
      onChange={onChange}
    >
      <div className="flex items-center justify-between gap-4 lg:gap-6">
        <div>
          <Text tag="h6" className="text-sm capitalize">
            {title}
          </Text>
          <Text className="mt-2 leading-6 text-gray">{description}</Text>
        </div>
        <Checkbox
          checked={checked}
          variant="outline"
          className="self-start"
          inputClassName="lg:h-6 lg:w-6 !border-gray-dark"
          iconClassName="bg-gray-dark rounded-lg lg:h-6 lg:w-6"
          onChange={onChange}
        />
      </div>
    </AdvancedCheckbox>
  );
}

export default function Notifications() {
  const [notifications, setNotifications] = useState(
    notificationsAllowed[0].id,
  );
  const [state, setState] = useState(pushNotifications[0].id);
  return (
    <div>
      <div className="mb-4 grid grid-cols-1 gap-4 border-b border-gray-lighter pb-4 lg:mb-6 lg:gap-6 lg:pb-6">
        <Text tag="h3" className="text-xl capitalize">
          Notifications
        </Text>
        <Text tag="h4">By Email</Text>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-4 lg:mb-12 lg:gap-6">
        {notificationsAllowed.map((item) => (
          <SelectBoxCard
            key={`payments-${item.id}`}
            checked={notifications === item.id ? true : false}
            onChange={() => setNotifications(item.id)}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Text
        tag="h4"
        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl capitalize lg:mb-6"
      >
        Push Notifications
      </Text>
      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        {pushNotifications.map((item) => (
          <SelectBoxCard
            key={`notifications-${item.id}`}
            checked={state === item.id ? true : false}
            onChange={() => setState(item.id)}
            title={item.text}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
