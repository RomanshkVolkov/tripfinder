'use client';

import ChangePassword from '@/components/settings/form/change-password';
import SocialAccount from '@/components/settings/login-security/social-account';
import DeviceHistory from '@/components/settings/login-security/device-history';
import DeactiveAccount from '@/components/settings/login-security/deactive-account';

export default function LoginSecurity() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:gap-12">
      <ChangePassword />
      <SocialAccount />
      <DeviceHistory />
      <DeactiveAccount />
    </div>
  );
}
