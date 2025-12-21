import type { Ref } from 'react';
import type * as SelectPrimitive from '@radix-ui/react-select';

export interface SelectInputItemProps extends SelectPrimitive.SelectItemProps {
  ref?: Ref<HTMLDivElement> | undefined;
}
