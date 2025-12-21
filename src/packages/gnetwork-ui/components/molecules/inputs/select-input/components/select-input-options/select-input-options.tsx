'use client';

import type { SelectItem } from '../../interface';
import type { SelectInputOptionsProps } from './select-input-options.props';

import * as SelectPrimitive from '@radix-ui/react-select';

import { SelectInputLabel } from '../select-input-label';
import { SelectInputItem } from '../select-input-item';

const SelectGroup = SelectPrimitive.Group;

export const SelectInputOptions = ({
  indicator = '',
  options = [],
}: Readonly<SelectInputOptionsProps>) => (
  <SelectGroup>
    {indicator && <SelectInputLabel>{indicator}</SelectInputLabel>}
    {options?.map((option: SelectItem) => (
      <SelectInputItem
        key={option?.value}
        disabled={option?.disabled}
        value={option?.value}
      >
        {option?.label}
      </SelectInputItem>
    ))}
  </SelectGroup>
);
