import type { Ref } from 'react';

import * as SwitchPrimitives from '@radix-ui/react-switch';

export interface SwitchProps extends SwitchPrimitives.SwitchProps {
  className?: string;
  ref?: Ref<HTMLButtonElement>;
}
