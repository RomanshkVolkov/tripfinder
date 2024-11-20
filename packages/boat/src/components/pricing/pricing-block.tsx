'use client';

import { useState } from 'react';
import PricingCard from '@/components/pricing/pricing-card';
import PricingHero from '@/components/pricing/pricing-hero';
import {
  pricingDataMonthly,
  pricingDataAnnualy,
} from 'public/data/pricing-card';

export default function PricingBlock() {
  const [state, setState] = useState('monthly');
  return (
    <div>
      <PricingHero state={state} onClick={(value) => setState(value)} />
      <div className="container-fluid grid w-full !max-w-[1296px] gap-4 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:py-20 3xl:px-0 3xl:py-24">
        <PricingCard
          pricingData={
            state === 'monthly'
              ? pricingDataMonthly.litePlan
              : pricingDataAnnualy.litePlan
          }
        />
        <PricingCard
          pricingData={
            state === 'monthly'
              ? pricingDataMonthly.proPlan
              : pricingDataAnnualy.proPlan
          }
        />
        <PricingCard
          pricingData={
            state === 'monthly'
              ? pricingDataMonthly.ultimatePlan
              : pricingDataAnnualy.ultimatePlan
          }
        />
      </div>
    </div>
  );
}
