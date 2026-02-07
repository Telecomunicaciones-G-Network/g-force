import type { Ref } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

export interface SelectInputLabelProps
  extends SelectPrimitive.SelectLabelProps {
  ref?: Ref<HTMLDivElement> | undefined;
}
