import ExploreListings from '@/components/explore/explore-listings';
import FilterTopbar from '@/components/explore/filter-topbar';
import Filter from '@/components/explore/filter';
import { Suspense } from 'react';
import Loader from '@/components/ui/loader/loader';

export default function ExplorePage() {
  return (
    <div className="container-fluid mb-12 pt-6 lg:mb-16">
      <FilterTopbar />
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[330px_5fr] 3xl:gap-12">
        <Suspense fallback={<Loader />}>
          <Filter className="hidden xl:block" />
        </Suspense>
        <ExploreListings />
      </div>
    </div>
  );
}
