import VendorProfileCard from '@/components/ui/cards/vendor-profile-card';
import ProfileListBlock from '@/components/profile/profile-list-block';

export default function page() {
  return (
    <>
      <div className="container-fluid !px-0 sm:!px-6 2xl:!px-7 3xl:!px-8 4xl:!px-16">
        <VendorProfileCard />
      </div>
      <div className="container-fluid">
        <ProfileListBlock />
      </div>
    </>
  );
}
