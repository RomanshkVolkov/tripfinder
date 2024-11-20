import DestinationBlock from '@/components/home/destination-block/destination-block';
import SubscriptionBlock from '@/components/subscription/subscription-block';
import InstructionBlock from '@/components/home/instruction-block';
import PromotionalBlock from '@/components/home/promotional-block';
import TestimonialBlock from '@/components/home/testimonial-block';
import HeroBanner from '@/components/home/hero-banner';
import NewBoats from '@/components/home/new-boats';
import TopBoats from '@/components/home/top-boats';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <DestinationBlock />
      <InstructionBlock />
      <TopBoats />
      <PromotionalBlock />
      <NewBoats />
      <TestimonialBlock />
      <SubscriptionBlock sectionClassName="4xl:!px-16" />
    </>
  );
}
