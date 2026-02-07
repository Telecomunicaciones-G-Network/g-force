import type { FieldValues } from 'react-hook-form';
import type { DatePickerProps } from '@gnetwork-ui/components/organisms/inputs/datepicker';
import type { InputControllerProps } from '@ui-core/props';

export type DateInputControllerProps<T extends FieldValues = FieldValues> =
  Omit<DatePickerProps, 'error' | 'message' | 'name' | 'value' | 'onChange'> &
    InputControllerProps<T>;
