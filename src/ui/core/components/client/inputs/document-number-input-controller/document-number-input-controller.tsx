import type { FieldValues } from 'react-hook-form';
import type { DocumentNumberInputControllerProps } from './document-number-input-controller.props';
import type { InputProps } from '@gnetwork-ui/components/molecules/inputs/input';

import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { DocumentNumberInput } from '@gnetwork-ui/components/molecules/inputs/document-number-input';

export const DocumentNumberInputController = <
  T extends FieldValues = FieldValues,
>({
  control,
  defaultValue,
  id,
  name,
  onClear,
  rules,
  ...rest
}: Readonly<DocumentNumberInputControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field: { onChange, value, ...fieldProps }, fieldState }) => (
      <NumericFormat
        {...fieldProps}
        {...rest}
        allowLeadingZeros
        allowNegative={false}
        customInput={DocumentNumberInput as React.ComponentType<InputProps>}
        decimalScale={0}
        error={!!fieldState.error}
        id={id || name}
        isAllowed={(values) => {
          const { value } = values;
          return value === '' || (value.length <= 9 && /^\d+$/.test(value));
        }}
        message={fieldState.error?.message}
        onValueChange={(values) => {
          onChange(values.value);
          onClear?.();
        }}
        value={value ?? ''}
        valueIsNumericString
      />
    )}
    rules={rules}
  />
);
