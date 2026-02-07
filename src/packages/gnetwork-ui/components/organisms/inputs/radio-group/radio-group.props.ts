import type { Ref } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export interface RadioGroupProps extends RadioGroupPrimitive.RadioGroupProps {
  ref?: Ref<HTMLDivElement>;
}
