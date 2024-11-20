'use client';

import Text from '@/components/ui/typography/text';
import Section from '@/components/ui/section';

interface DescriptionBlockProps {
  description: string;
}

export default function DescriptionBlock({
  description,
}: DescriptionBlockProps) {
  return (
    <Section className="py-5 lg:py-6 xl:py-7">
      <Text className="!text-base !leading-7 !text-secondary">
        {description}
      </Text>
    </Section>
  );
}
