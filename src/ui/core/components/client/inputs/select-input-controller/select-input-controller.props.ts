import type { FieldValues } from 'react-hook-form';
import type { SelectInputProps } from '@gnetwork-ui/components/molecules/inputs/select-input';
import type { InputControllerProps } from '@ui-core/props';

export type SelectInputControllerProps<T extends FieldValues = FieldValues> =
  Omit<SelectInputProps, 'error' | 'message' | 'name' | 'onValueChange'> &
    InputControllerProps<T>;
