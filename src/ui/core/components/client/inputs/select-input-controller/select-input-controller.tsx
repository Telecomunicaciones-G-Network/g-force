'use client';

import type { FieldValues } from 'react-hook-form';
import type { SelectInputControllerProps } from './select-input-controller.props';

import { Controller } from 'react-hook-form';

import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';

export const SelectInputController = <T extends FieldValues = FieldValues>({
  control,
  defaultValue,
  id,
  name,
  onClear,
  rules,
  ...rest
}: Readonly<SelectInputControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field, fieldState }) => (
      <SelectInput
        {...field}
        error={!!fieldState.error}
        id={id || name}
        message={fieldState.error?.message}
        onValueChange={(value) => {
          field.onChange(value);
          onClear?.();
        }}
        {...rest}
      />
    )}
    rules={rules}
  />
);
