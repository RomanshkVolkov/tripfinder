'use client';

import { Fragment, useState } from 'react';
import { TabGroup } from '@headlessui/react';
import {
  IdentificationIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  BellIcon,
} from '@heroicons/react/24/outline';
import PaymentPayoutsBlock from '@/components/settings/payment-payouts/payment-payouts-block';
import LoginSecurity from '@/components/settings/login-security/login-security-block';
import PersonalInfoForm from '@/components/settings/form/personal-info-form';
import { TabItem, Tablist, TabPanel, TabPanels } from '@/components/ui/tab';
import Notifications from '@/components/settings/notifications';
import SelectBox from '@/components/ui/select-box';

// setting page tab data
const tabData = [
  {
    label: 'Personal Information',
    path: 0,
    icon: <IdentificationIcon className="h-auto w-5" />,
  },
  {
    label: 'Login & Security',
    path: 1,
    icon: <ShieldCheckIcon className="h-auto w-5" />,
  },
  {
    label: 'Payments & Payouts',
    path: 2,
    icon: <CreditCardIcon className="h-auto w-5" />,
  },
  {
    label: 'Notifications',
    path: 3,
    icon: <BellIcon className="h-auto w-5" />,
  },
];

export default function AccountSettingsPage() {
  const [selected, setSelected] = useState(tabData[0].path);
  const [state, setState] = useState(tabData[0]);

  return (
    <div className="container-fluid mt-5 grid !max-w-[1280px] grid-cols-1 gap-5 pb-10 md:mt-7 lg:grid-cols-[260px_auto] xl:mt-12 xl:grid-cols-[360px_auto] xl:gap-8 2xl:gap-12 3xl:mt-16 3xl:!px-0">
      <SelectBox
        value={state}
        className="lg:hidden"
        options={tabData}
        optionIcon={true}
        onChange={(data: any) => {
          setSelected(data.path);
          setState(data);
        }}
        buttonClassName="h-12 font-bold"
      />
      <TabGroup
        as={Fragment}
        selectedIndex={selected}
        onChange={(val) => setSelected(val)}
        vertical
      >
        <Tablist className="hidden lg:block">
          {tabData?.map((item) => (
            <TabItem
              key={item.path}
              className="w-full px-6 py-3 text-gray-dark"
              motionLayoutId="settingTab"
              motionClassName="!h-full top-0 !bg-gray-dark !text-gray-dark w-1 !rounded-lg !-z-10"
            >
              <span className="flex items-center gap-4">
                {item.icon}
                {item.label}
              </span>
            </TabItem>
          ))}
        </Tablist>
        <TabPanels>
          <TabPanel>
            <PersonalInfoForm />
          </TabPanel>
          <TabPanel>
            <LoginSecurity />
          </TabPanel>
          <TabPanel>
            <PaymentPayoutsBlock />
          </TabPanel>
          <TabPanel>
            <Notifications />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
