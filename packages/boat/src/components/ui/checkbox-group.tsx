'use client';

import clsx from 'clsx';
import Checkbox from '@/components/ui/form-fields/checkbox';
import Text from '@/components/ui/typography/text';

interface CheckboxPropsType {
  data: { id: string; label: string; checked: boolean }[];
  label: string;
  labelClassName?: string;
  onChange: (data: {}) => void;
}

export default function CheckboxGroup({
  data,
  label,
  labelClassName,
  onChange,
}: CheckboxPropsType) {
  return (
    <div>
      {label && (
        <Text
          tag="span"
          className={clsx(
            'block text-base font-bold capitalize text-gray-dark',
            labelClassName,
          )}
        >
          {label}
        </Text>
      )}

      {data.map((item) => (
        <Checkbox
          onChange={(e) => onChange(item)}
          key={item.id}
          name={item.label}
          label={item.label}
          size="lg"
          inputClassName="!text-gray-dark"
          labelClassName="!text-base !capitalize !text-gray !font-normal"
          labelPlacement="start"
          className="mb-3"
          containerClassName="justify-between"
          checked={item.checked}
          // {...register('remember')}
        />
      ))}
    </div>
  );
}
