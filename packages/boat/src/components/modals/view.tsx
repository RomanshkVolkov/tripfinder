'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { Fragment, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { useModal, MODAL_VIEW } from '@/components/modals/context';
import Button from '@/components/ui/button';

// dynamic imports
const SignIn = dynamic(() => import('@/components/auth/sign-in'));
const SignUp = dynamic(() => import('@/components/auth/sign-up'));
const AddReview = dynamic(() => import('@/components/ui/modals/add-review'));
const ReportListing = dynamic(
  () => import('@/components/ui/modals/report-listing'),
);
const ContactHost = dynamic(
  () => import('@/components/ui/modals/contact-host'),
);
const ShareModal = dynamic(() => import('@/components/ui/modals/share-modal'));
const Searchbox = dynamic(() => import('@/components/ui/search-box'));

function renderModalContent(view: MODAL_VIEW | string) {
  switch (view) {
    case 'SIGN_IN':
      return <SignIn className="!m-0 !p-0" />;
    case 'SIGN_UP':
      return <SignUp className="!m-0 !p-0" />;
    case 'ADD_REVIEW':
      return <AddReview />;
    case 'REPORT_LISTING':
      return <ReportListing />;
    case 'CONTACT_HOST':
      return <ContactHost />;
    case 'SHARE':
      return <ShareModal />;
    case 'SEARCH_MODAL':
      return <Searchbox className="mx-auto sm:min-w-[500px]" />;
    default:
      return null;
  }
}

export default function ModalContainer() {
  const { open, view, closeModal } = useModal();
  const pathName = usePathname();
  useEffect(() => {
    closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className={clsx(
          'fixed inset-0 z-[9999] h-full w-full overflow-y-auto overflow-x-hidden bg-gray-dark bg-opacity-40 p-4 text-center',
          view === 'LIGHT_GALLERY' && '!bg-opacity-100',
        )}
        onClose={closeModal}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-[9999] cursor-pointer" />
        </TransitionChild>

        {/* This element is to trick the browser into centering the modal contents. */}
        {view && view !== 'SEARCH_MODAL' && (
          <span className="inline-block h-full align-middle" aria-hidden="true">
            &#8203;
          </span>
        )}

        {/* This element is need to fix FocusTap headless-ui warning issue */}
        <div className="sr-only">
          <Button
            size="sm"
            onClick={closeModal}
            className="opacity-50 hover:opacity-80 "
          >
            <span></span>
          </Button>
        </div>

        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-105"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-105"
        >
          <DialogPanel as={Fragment}>
            <div className="relative z-[9999] inline-block w-full text-left align-middle sm:w-auto">
              {view && renderModalContent(view)}
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
