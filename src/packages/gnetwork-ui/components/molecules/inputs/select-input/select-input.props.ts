import type { SelectItem } from './interface';

import * as SelectPrimitive from '@radix-ui/react-select';

export interface SelectInputProps
  extends Omit<SelectPrimitive.SelectProps, 'children'> {
  fullWidth?: boolean;
  indicator?: string;
  label?: string;
  options?: SelectItem[];
}
