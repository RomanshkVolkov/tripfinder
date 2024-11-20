'use client';

/* eslint-disable */
import { useEffect, RefObject } from 'react';
export function addScrollingClass<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  topOffset: number = 80,
) {
  useEffect(() => {
    const element = ref?.current;
    const listener = () => {
      if (window.scrollY > topOffset) {
        element?.classList.add('is-scrolling');
      } else {
        element?.classList.remove('is-scrolling');
      }
    };
    listener();
    document.addEventListener('scroll', listener);
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);
}
