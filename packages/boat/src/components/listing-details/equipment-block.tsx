'use client';

import Image from 'next/image';
import RevealContent from '@/components/ui/revel-content';
import Section from '@/components/ui/section';
import { EquipmentsTypes } from '@/types';

interface EquipmentTypes {
  equipment: EquipmentsTypes;
}

export default function EquipmentBlock({ equipment }: EquipmentTypes) {
  return (
    <Section
      className="py-5 pt-2 xl:py-7"
      title="On Board Equipment"
      titleClassName="text-xl md:!text-[22px] 2xl:!text-2xl mb-2"
    >
      <RevealContent defaultHeight={100} buttonText="View more">
        <div className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-3">
          {equipment.map((item) => (
            <div key={item.img} className="flex items-center">
              <div className="relative mr-3 h-6 w-6 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <p className="capitalize leading-6 !text-secondary">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </RevealContent>
    </Section>
  );
}
