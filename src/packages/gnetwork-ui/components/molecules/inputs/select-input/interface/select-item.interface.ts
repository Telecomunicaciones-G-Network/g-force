import type { ReactChild } from '@gnetwork-ui/types';

export interface SelectItem {
  leftIcon?: ReactChild;
  disabled?: boolean;
  label: string;
  value: string;
}
