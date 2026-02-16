import type { FieldValues } from 'react-hook-form';
import type { AmountInputControllerProps } from './amount-input-controller.props';
import type { InputProps } from '@gnetwork-ui/components/molecules/inputs/input';

import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { AmountInput } from '@gnetwork-ui/components/molecules/inputs/amount-input';

export const AmountInputController = <T extends FieldValues = FieldValues>({
  control,
  defaultValue,
  id,
  name,
  onClear,
  rules,
  ...rest
}: Readonly<AmountInputControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({
      field: { onChange, onBlur, value, ...fieldProps },
      fieldState,
    }) => (
      <NumericFormat
        {...fieldProps}
        {...rest}
        allowNegative={false}
        customInput={AmountInput as React.ComponentType<InputProps>}
        decimalScale={2}
        decimalSeparator=","
        error={!!fieldState.error}
        fixedDecimalScale={true}
        id={id || name}
        message={fieldState.error?.message}
        onBlur={(_e) => {
          onBlur();
          if (value && value !== '') {
            const numValue = parseFloat(value.toString());
            if (!isNaN(numValue)) {
              onChange(numValue.toFixed(2));
            }
          }
        }}
        onValueChange={(values) => {
          onChange(values.value);
          onClear?.();
        }}
        thousandSeparator="."
        value={value ?? ''}
      />
    )}
    rules={rules}
  />
);
