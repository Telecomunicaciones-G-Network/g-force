'use client';

import type { FieldValues, Path, PathValue } from 'react-hook-form';
import type { CheckboxControllerProps } from './checkbox-controller.props';

import { Controller } from 'react-hook-form';
import { Checkbox } from '@gnetwork-ui/components/molecules/inputs/checkbox';

export const CheckboxController = <T extends FieldValues = FieldValues>({
  control,
  defaultValue,
  id,
  name,
  onClear,
  rules,
  ...rest
}: Readonly<CheckboxControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue as PathValue<T, Path<T>>}
    name={name}
    render={({ field: { value, onChange, ...fieldProps } }) => (
      <Checkbox
        {...fieldProps}
        checked={value}
        id={id || name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.checked);
          onClear?.();
        }}
        {...rest}
      />
    )}
    rules={rules}
  />
);
