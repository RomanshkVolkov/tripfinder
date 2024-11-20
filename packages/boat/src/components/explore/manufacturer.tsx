'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQueryParam } from '@/hooks/use-query-param';
import { ManufacturerThreeIcon } from '@/components/icons/manufacturer/manufacturer-three';
import { ManufacturerFourIcon } from '@/components/icons/manufacturer/manufacturer-four';
import { ManufacturerFiveIcon } from '@/components/icons/manufacturer/manufacturer-five';
import { ManufacturerOneIcon } from '@/components/icons/manufacturer/manufacturer-one';
import { ManufacturerTwoIcon } from '@/components/icons/manufacturer/manufacturer-two';
import { ManufacturerSixIcon } from '@/components/icons/manufacturer/manufacturer-six';
import AdvancedCheckbox from '@/components/ui/form-fields/advanced-checkbox';
import Text from '@/components/ui/typography/text';

const manufactures = [
  {
    value: 'yatch-1',
    icon: <ManufacturerOneIcon className="m-auto h-[60px] w-[60px]" />,
    checked: false,
  },
  {
    value: 'yatch-2',
    icon: <ManufacturerTwoIcon className="m-auto h-[60px] w-[60px]" />,
    checked: false,
  },
  {
    value: 'yatch-3',
    icon: <ManufacturerThreeIcon className="m-auto h-[60px] w-[60px]" />,
    checked: false,
  },
  {
    value: 'yatch-4',
    icon: <ManufacturerFourIcon className="m-auto h-[60px] w-[60px]" />,
    checked: false,
  },
  {
    value: 'yatch-5',
    icon: <ManufacturerFiveIcon className="m-auto h-[60px] w-[60px]" />,
    checked: false,
  },
  {
    value: 'yatch-6',
    icon: <ManufacturerSixIcon className="m-auto h-[60px] w-[60px]" />,
    checked: false,
  },
];

interface ItemProps {
  value: string;
  icon: React.ReactNode;
  checked: boolean;
}

export default function Manufacturer() {
  const searchParams = useSearchParams();
  const manf = searchParams?.get('manufacturer');
  const [selected, setSelected] = useState<ItemProps[]>(manufactures);
  const { updateQueryparams } = useQueryParam();

  const handleInputChange = (item: any) => {
    const updatedItems = [...selected];
    const foundItem = updatedItems.find((elem) => elem.value === item.value);
    if (foundItem) {
      foundItem.checked = !foundItem.checked;
    }
    setSelected(updatedItems);
  };

  // if initial query
  useEffect(() => {
    let m = manf?.split(',');
    const updatedItems = [...selected];
    updatedItems.map((elem) => {
      if (m?.includes(elem.value)) elem.checked = true;
    });
    setSelected(updatedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // updates query
  useEffect(() => {
    const checkedItems = [];
    for (const item of selected) {
      if (item.checked) checkedItems.push(item.value);
    }
    updateQueryparams('manufacturer', checkedItems.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  // reset
  useEffect(() => {
    if (!manf) {
      const updatedItems = [...selected];
      updatedItems.map((elem) => (elem.checked = false));
      setSelected(updatedItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manf]);

  return (
    <div>
      <Text
        tag="span"
        className="mb-2 block text-sm font-bold capitalize text-gray-dark lg:text-base"
      >
        Manufacturer
      </Text>
      <div className="grid grid-cols-3 gap-3">
        {selected.map((item, index: number) => (
          <AdvancedCheckbox
            key={`manufacture-${index}`}
            name="manufacturer"
            value={item.value}
            onChange={() => handleInputChange(item)}
            className="border-primary-lighter flex w-full flex-col space-y-6 rounded-xl border px-2 py-2 text-gray-600 hover:cursor-pointer hover:border-primary 2xl:py-3.5"
            inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-primary [&:checked:enabled~span]:border-primary"
            checked={item.checked}
          >
            {item.icon}
          </AdvancedCheckbox>
        ))}
      </div>
    </div>
  );
}
