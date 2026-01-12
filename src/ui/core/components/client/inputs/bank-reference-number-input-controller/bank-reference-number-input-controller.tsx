import type { FieldValues } from 'react-hook-form';
import type { BankReferenceNumberInputControllerProps } from './bank-reference-number-input-controller.props';
import type { InputProps } from '@gnetwork-ui/components/molecules/inputs/input';

import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { BankReferenceNumberInput } from '@gnetwork-ui/components/molecules/inputs/bank-reference-number-input';

export const BankReferenceNumberInputController = <
  T extends FieldValues = FieldValues,
>({
  control,
  defaultValue,
  id,
  name,
  onClear,
  rules,
  ...rest
}: Readonly<BankReferenceNumberInputControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field: { onChange, value, ...fieldProps }, fieldState }) => (
      <NumericFormat
        {...fieldProps}
        {...rest}
        allowNegative={false}
        customInput={
          BankReferenceNumberInput as React.ComponentType<InputProps>
        }
        decimalScale={0}
        error={!!fieldState.error}
        id={id || name}
        isAllowed={(values) => {
          const { formattedValue } = values;
          return (
            formattedValue === '' ||
            (formattedValue.length <= 6 && /^\d+$/.test(formattedValue))
          );
        }}
        message={fieldState.error?.message}
        onValueChange={(values) => {
          onChange(values.formattedValue);
          onClear?.();
        }}
        value={value ?? ''}
        valueIsNumericString
      />
    )}
    rules={rules}
  />
);
