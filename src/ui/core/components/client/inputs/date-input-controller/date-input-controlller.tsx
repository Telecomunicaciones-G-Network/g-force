'use client';

import type { FieldValues } from 'react-hook-form';
import type { DateInputControllerProps } from './date-input-controller.props';

import { Controller } from 'react-hook-form';

import { DatePicker } from '@gnetwork-ui/components/organisms/inputs/datepicker';

export const DateInputController = <T extends FieldValues = FieldValues>({
  control,
  defaultValue,
  id,
  name,
  onClear,
  rules,
  ...rest
}: Readonly<DateInputControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field, fieldState }) => (
      <DatePicker
        {...rest}
        error={!!fieldState.error}
        id={id || name}
        message={fieldState.error?.message}
        name={name}
        onChange={(date) => {
          field.onChange(date);
          onClear?.();
        }}
        value={field.value}
      />
    )}
    rules={rules}
  />
);
