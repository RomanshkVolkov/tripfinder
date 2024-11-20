'use client';

import { atomWithStorage } from 'jotai/utils';
import { atom, useAtomValue } from 'jotai';
import dynamic from 'next/dynamic';

const CreateListing = dynamic(
  () => import('@/components/add-listing/steps/create-listing'),
);
const BoatInfo = dynamic(
  () => import('@/components/add-listing/steps/boat-info'),
);
const AddBoatPhotos = dynamic(
  () => import('@/components/add-listing/steps/upload-photos'),
);
const AddLocation = dynamic(
  () => import('@/components/add-listing/steps/add-location'),
);
const AddEquipment = dynamic(
  () => import('@/components/add-listing/steps/add-equipment'),
);
const AddSpecification = dynamic(
  () => import('@/components/add-listing/steps/add-specification'),
);
const StepsEnd = dynamic(
  () => import('@/components/add-listing/steps/steps-end'),
);

export const stepAtom = atom(1);
export const storeAtom = atomWithStorage('addNewBoat', {
  boatName: '',
  boatType: '',
  pricePerDay: 10,
  boatDescription: '',
  beadRooms: 0,
  bathRooms: 0,
  guests: 1,
  location: '',
  phoneNumber: '',
  equipment: [],
  images: [],
  specification: {
    engine: '',
    engineTorque: '',
    fuelSystem: '',
    boreStroke: '',
    infotainmentSystem: '',
    displacement: '',
    fuelCapacity: '',
    compressionRatio: '',
    luggageCapacity: '',
    fuelEconomy: '',
    weight: '',
  },
});

export default function AddListing() {
  let stepComponent;
  const step = useAtomValue(stepAtom);
  switch (step) {
    case 1:
      stepComponent = <CreateListing />;
      break;
    case 2:
      stepComponent = <BoatInfo />;
      break;
    case 3:
      stepComponent = <AddBoatPhotos />;
      break;
    case 4:
      stepComponent = <AddLocation />;
      break;
    case 5:
      stepComponent = <AddEquipment />;
      break;
    case 6:
      stepComponent = <AddSpecification />;
      break;
    case 7:
      stepComponent = <StepsEnd />;
      break;
  }

  return (
    <div className="flex flex-grow items-center justify-center px-4 pb-24 pt-10">
      {stepComponent}
    </div>
  );
}
