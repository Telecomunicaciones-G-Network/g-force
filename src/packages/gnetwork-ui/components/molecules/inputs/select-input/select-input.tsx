'use client';

import type { SelectInputProps } from './select-input.props';

import * as SelectPrimitive from '@radix-ui/react-select';

import { SelectInputBody } from './components/select-input-body';
import { SelectInputTrigger } from './components/select-input-trigger';

const Select = SelectPrimitive.Root;

export const SelectInput = ({
  defaultValue,
  disabled = false,
  label = 'Seleccione una opción',
  fullWidth = false,
  indicator = '',
  onValueChange,
  options = [],
  value,
  ...rest
}: Readonly<SelectInputProps>) => {
  if (!options || !Array.isArray(options) || options?.length === 0) {
    console.warn(
      'Prop options is missing or is not valid on SelectInput component. This component can not be render appropiately.',
    );
  }

  return (
    <Select
      defaultValue={defaultValue}
      disabled={disabled}
      onValueChange={onValueChange}
      value={value}
      {...rest}
    >
      <SelectInputTrigger fullWidth={fullWidth} label={label} />
      <SelectInputBody indicator={indicator} options={options} {...rest} />
    </Select>
  );
};
