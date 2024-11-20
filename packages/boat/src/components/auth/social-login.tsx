'use client';

import useAuth from '@/hooks/use-auth';
import Button from '@/components/ui/button';
import { AppleIcon } from '@/components/icons/apple';
import { FBIcon } from '@/components/icons/facebook';
import { GoogleIcon } from '@/components/icons/google';
import { useModal } from '@/components/modals/context';

export default function SocialLogin() {
  const { closeModal } = useModal();
  const { authorize } = useAuth();

  const handleSocialLogin = () => {
    authorize();
    closeModal();
  };

  return (
    <>
      <Button
        onClick={handleSocialLogin}
        type="button"
        variant="outline"
        size="xl"
        className="mb-3 w-full"
      >
        <FBIcon className="mr-5" />
        Sign up with Facebook
      </Button>
      <Button
        onClick={handleSocialLogin}
        type="button"
        variant="outline"
        size="xl"
        className="mb-3 w-full"
      >
        <GoogleIcon className="mr-5" />
        Sign up with Google
      </Button>

      <Button
        onClick={handleSocialLogin}
        type="button"
        variant="outline"
        size="xl"
        className="w-full"
      >
        <AppleIcon className="mr-5" />
        Sign up with Apple
      </Button>
    </>
  );
}
