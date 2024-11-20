'use client';

import { useState } from 'react';
import { MasterCardIcon } from '@/components/icons/payment-methods/mastercard';
import AdvancedCheckbox from '@/components/ui/form-fields/advanced-checkbox';
import { PaypalIcon } from '@/components/icons/payment-methods/paypal';
import { VisaIcon } from '@/components/icons/payment-methods/visa';
import Checkbox from '@/components/ui/form-fields/checkbox';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';

const paymentMethods = [
  {
    cardType: 'visa',
    label: 'Visa ending in 1234',
    icon: <VisaIcon className="h-9 w-[60px] md:h-12 md:w-20" />,
    default: true,
    validity: '16/11/25',
  },
  {
    cardType: 'mastercard',
    label: 'Mastercard ending in 1234',
    icon: <MasterCardIcon className="h-9 w-[60px] md:h-12 md:w-20" />,
    default: false,
    validity: '16/11/25',
  },
  {
    cardType: 'paypal',
    label: 'PayPal ending in 1234',
    icon: <PaypalIcon className="h-9 w-[60px] md:h-12 md:w-20" />,
    default: false,
    validity: '16/11/25',
  },
];

export default function PaymentsPayouts() {
  const [state, setState] = useState(paymentMethods[0].cardType);
  return (
    <div>
      <Text
        tag="h3"
        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl capitalize lg:mb-6"
      >
        Payment Methods
      </Text>
      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        {paymentMethods.map((item, index) => (
          <AdvancedCheckbox
            key={`payment-${index}`}
            name="payment-secondary"
            value="single"
            className="border-secondary-lighter card-gradient w-full rounded-xl border p-4 text-sm hover:cursor-pointer hover:border-gray-dark lg:p-6"
            inputClassName="[&:checked~span]:!border-gray-dark"
            checked={state === item.cardType ? true : false}
            onChange={() => setState(item.cardType)}
          >
            <div className="flex items-center justify-between gap-4 lg:gap-6">
              {item.icon}
              <div className="flex-grow">
                <Text tag="h6" className="mb-1">
                  {item.label}
                </Text>
                <Text className="mb-2 text-xs leading-5 text-gray md:!text-sm md:leading-6">
                  {item.validity}
                </Text>
                <Button
                  type="button"
                  variant="text"
                  className="!p-0 text-xs leading-5 text-gray focus:!ring-0 md:text-sm md:leading-6"
                >
                  {item.default ? 'Default card' : 'Set as default'}
                </Button>
              </div>
              <Checkbox
                checked={state === item.cardType ? true : false}
                onChange={() => setState(item.cardType)}
                variant="outline"
                className="self-start"
                inputClassName="lg:h-6 lg:w-6 border-gray-dark"
                iconClassName="bg-gray-dark rounded-lg lg:h-6 lg:w-6"
              />
            </div>
          </AdvancedCheckbox>
        ))}
      </div>
    </div>
  );
}
