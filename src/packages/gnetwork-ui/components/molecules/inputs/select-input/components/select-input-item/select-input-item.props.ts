import type { Ref } from 'react';
import type * as SelectPrimitive from '@radix-ui/react-select';
import type { SelectItem } from '../../interface';

export interface SelectInputItemProps
  extends SelectPrimitive.SelectItemProps,
    Pick<SelectItem, 'leftIcon'> {
  ref?: Ref<HTMLDivElement> | undefined;
}
