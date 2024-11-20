import { InstructionIconOne } from '@/components/icons/instruction/instruction-one';
import { InstructionIconTwo } from '@/components/icons/instruction/instruction-two';
import { InstructionIconThree } from '@/components/icons/instruction/instruction-three';
import { InstructionIconFour } from '@/components/icons/instruction/instruction-four';

export const instructions = [
  {
    title: 'Find the perfect boat',
    description:
      'Browse our 5,000 designer dresses and accessories online or at our Melbourne warehouse.',
    icon: (
      <InstructionIconOne />
    ),
  },
  {
    title: 'Select a captain',
    description:
      'Find your perfect look among thousands of fashion pieces, here available for rent and purchase',
    icon: (
      <InstructionIconTwo />
    ),
  },
  {
    title: 'Many Pickup Locations',
    description:
      'Enjoy wearing it at your special event for a few days, or purchase it to make it part of your wardrobe',
    icon: (
      <InstructionIconThree />
    ),
  },
  {
    title: 'Satisfied Customers',
    description:
      'Simply pop your dress back in the free prepaid satchel provided. We now handle all the dry cleaning.',
    icon: (
      <InstructionIconFour />
    ),
  },
];