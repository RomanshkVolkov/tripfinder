'use client';

import { Provider } from 'jotai';
import AddListing from '@/components/add-listing/add-listing';
import ProgressBar from '@/components/ui/progress-bar';

export default function AddListingPage() {
  return (
    <Provider>
      <div className="flex flex-grow flex-col">
        <AddListing />
        <ProgressBar />
      </div>
    </Provider>
  );
}
