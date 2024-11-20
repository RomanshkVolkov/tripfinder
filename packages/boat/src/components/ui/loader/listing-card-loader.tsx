'use client';

import ContentLoader from '@/components/ui/loader/content-loader';

interface CardBlockLoaderTypes {
  className?: string;
}

function CardBlockLoader({ className, ...props }: CardBlockLoaderTypes) {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 450 490"
      backgroundColor="#f1f1f1"
      foregroundColor="#dddddd"
      className={className}
      uniqueKey="listing-card-loader"
      {...props}
    >
      <rect x="0" y="0" rx="12" ry="12" width="450" height="340" />
      <rect x="0" y="364" rx="4" ry="4" width="300" height="18" />
      <rect x="0" y="394" rx="4" ry="4" width="350" height="18" />
      <rect x="0" y="424" rx="4" ry="4" width="300" height="18" />
      <rect x="250" y="470" rx="4" ry="4" width="200" height="18" />
      <rect x="0" y="470" rx="4" ry="4" width="200" height="18" />
    </ContentLoader>
  );
}

export default function ListingCardLoader() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
      <CardBlockLoader />
      <CardBlockLoader className="hidden sm:block" />
      <CardBlockLoader className="hidden md:block" />
      <CardBlockLoader className="hidden lg:block" />
    </div>
  );
}
