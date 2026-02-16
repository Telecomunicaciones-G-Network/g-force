import type { SelectItem } from './interface';
import type { ReactChild } from '../../../../types';

import * as SelectPrimitive from '@radix-ui/react-select';

export interface SelectInputProps
  extends Omit<SelectPrimitive.SelectProps, 'children'> {
  bordered?: boolean;
  className?: string;
  customMessageClassName?: string;
  error?: boolean;
  fullWidth?: boolean;
  id?: string;
  indicator?: string;
  label?: string;
  leftIcon?: ReactChild;
  message?: string;
  options?: SelectItem[];
  triggerClassName?: string;
  triggerLabel?: string;
  triggerWrapperClassName?: string;
}
