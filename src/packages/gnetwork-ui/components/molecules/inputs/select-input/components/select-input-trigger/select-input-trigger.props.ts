import type { Ref } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { SelectInputProps } from '../../select-input.props';

import * as SelectPrimitive from '@radix-ui/react-select';

import { selectInputTriggerVariants } from './select-input-trigger.style';

export interface SelectInputTriggerVariants
  extends VariantProps<typeof selectInputTriggerVariants> {
  className?: string;
  fullWidth?: boolean;
}

export interface SelectInputTriggerProps
  extends Omit<SelectPrimitive.SelectTriggerProps, 'className' | 'children'>,
    Pick<SelectInputProps, 'label'>,
    SelectInputTriggerVariants {
  ref?: Ref<HTMLButtonElement> | undefined;
}
