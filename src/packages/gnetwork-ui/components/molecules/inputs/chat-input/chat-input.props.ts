import type { ReactChild } from '../../../../types';
import type { InputProps } from '../input';

export interface ChatInputProps extends Omit<InputProps, 'type'> {
  customLeftIcon?: ReactChild;
  hideLeftIcon?: boolean;
}
