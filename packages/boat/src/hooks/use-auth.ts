'use client';

import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

interface UserType {
  name: string;
  avatar: string;
  role: string;
}

const demoUser = {
  name: 'Jhon Doe',
  avatar:
    'https://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png',
  role: 'admin',
};

const isLoggedIn =
  typeof window !== 'undefined'
    ? localStorage.getItem('isAuthorized')
    : 'false';
const userAtom = atomWithStorage<Partial<UserType>>('loggedUser', {});
const authorizationAtom = atomWithStorage('isAuthorized', Boolean(isLoggedIn));

export default function useAuth() {
  const [isAuthorized, setAuthorized] = useAtom(authorizationAtom);
  const [user, setUser] = useAtom(userAtom);

  return {
    isAuthorized,
    user,
    authorize() {
      setAuthorized(true);
      setUser(demoUser);
    },
    unauthorize() {
      setAuthorized(false);
      setUser({});
    },
  };
}
