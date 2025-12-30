import type { SelectItem } from './interface';

import * as SelectPrimitive from '@radix-ui/react-select';

export interface SelectInputProps
  extends Omit<SelectPrimitive.SelectProps, 'children'> {
  customMessageClassName?: string;
  error?: boolean;
  fullWidth?: boolean;
  id?: string;
  indicator?: string;
  label?: string;
  message?: string;
  options?: SelectItem[];
}
