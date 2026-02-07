import type { Ref } from 'react';
import type { SelectInputProps } from '../../select-input.props';

import * as SelectPrimitive from '@radix-ui/react-select';

export interface SelectInputBodyProps
  extends Omit<SelectPrimitive.SelectContentProps, 'children'>,
    Pick<SelectInputProps, 'indicator' | 'options'> {
  ref?: Ref<HTMLDivElement> | undefined;
}
