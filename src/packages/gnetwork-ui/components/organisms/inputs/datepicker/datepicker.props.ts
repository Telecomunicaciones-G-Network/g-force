import type { ReactChild } from '../../../../types';

export interface DatePickerProps {
  containerClassName?: string;
  disabled?: boolean;
  error?: boolean;
  fromDate?: Date;
  fullWidth?: boolean;
  id?: string;
  label?: string;
  leftIcon?: ReactChild;
  message?: string;
  name?: string;
  noErrorHandler?: boolean;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  required?: boolean;
  toDate?: Date;
  triggerClassName?: string;
  value?: Date | undefined;
}
