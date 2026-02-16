import type { FieldValues } from 'react-hook-form';
import type { PhoneNumberInputControllerProps } from './phone-number-input-controller.props';
import type { InputProps } from '@gnetwork-ui/components/molecules/inputs/input';

import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import { PhoneNumberInput } from '@gnetwork-ui/components/molecules/inputs/phone-number-input';

// Códigos de área válidos para Venezuela
const VALID_AREA_CODES = ['0412', '0414', '0416', '0422', '0424', '0426'];

export const PhoneNumberInputController = <
  T extends FieldValues = FieldValues,
>({
  control,
  defaultValue,
  id,
  name,
  onClear,
  rules,
  ...rest
}: Readonly<PhoneNumberInputControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field: { onChange, value, ...fieldProps }, fieldState }) => (
      <PatternFormat
        {...fieldProps}
        {...rest}
        allowEmptyFormatting={false}
        customInput={PhoneNumberInput as React.ComponentType<InputProps>}
        error={!!fieldState.error}
        format="####-#######"
        id={id || name}
        isAllowed={(values) => {
          const { value } = values;

          // Permitir campo vacío
          if (value === '') return true;

          // Validar que solo contenga dígitos
          if (!/^\d+$/.test(value)) return false;

          // Validar longitud máxima (11 dígitos: 4 del código + 7 del número)
          if (value.length > 11) return false;

          // Si tiene al menos 4 dígitos, validar que el código sea válido
          if (value.length >= 4) {
            const areaCode = value.substring(0, 4);
            return VALID_AREA_CODES.includes(areaCode);
          }

          // Si tiene menos de 4 dígitos, validar que sea el inicio de un código válido
          const partialCode = value;
          return VALID_AREA_CODES.some((code) => code.startsWith(partialCode));
        }}
        message={fieldState.error?.message}
        onValueChange={(values) => {
          onChange(values.value);
          onClear?.();
        }}
        value={value ?? ''}
      />
    )}
    rules={rules}
  />
);
