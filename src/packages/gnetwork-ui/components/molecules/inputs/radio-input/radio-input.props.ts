import type { Ref } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export interface RadioInputProps
  extends RadioGroupPrimitive.RadioGroupItemProps {
  containerClassName?: string;
  label?: string;
  ref?: Ref<HTMLButtonElement>;
}
