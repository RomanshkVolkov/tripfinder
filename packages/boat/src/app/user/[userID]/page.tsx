'use client';

import VendorProfileCard from '@/components/ui/cards/vendor-profile-card';
import ProfileListBlock from '@/components/profile/profile-list-block';

export default function UserPage({ params }: { params: { userID: string } }) {
  const { userID } = params;
  return (
    <div className="mb-12 lg:mb-16">
      <div className="container-fluid mb-10 !px-0 sm:!px-0 md:mb-12 md:!px-6 xl:mb-16 2xl:!px-7 3xl:!px-8 4xl:!px-16">
        <VendorProfileCard />
      </div>
      <div className="container-fluid">
        <ProfileListBlock />
      </div>
    </div>
  );
}
