'use client';

import { atom, useSetAtom, useAtomValue } from 'jotai';

export type GALLERY_VIEW = 'MODAL_GALLERY';

const galleryAtom = atom({
  open: false,
  view: 'MODAL_GALLERY',
  initialSlide: 1,
});

export function useGallery() {
  let gallery = useAtomValue(galleryAtom);
  let setGallery = useSetAtom(galleryAtom);

  function openGallery(view: GALLERY_VIEW, initialSlide?: number) {
    setGallery({
      ...gallery,
      view,
      open: true,
      initialSlide: initialSlide ?? 1,
    });
  }

  function closeGallery() {
    setGallery({
      ...gallery,
      open: false,
    });
  }

  return {
    ...gallery,
    openGallery,
    closeGallery,
  };
}
