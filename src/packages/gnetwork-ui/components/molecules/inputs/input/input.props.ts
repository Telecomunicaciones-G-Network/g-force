import type { VariantProps } from 'class-variance-authority';
import type { ReactChild, ReactInput } from '../../../../types';
import type { inputVariants } from './input.style';

export interface InputVariants extends VariantProps<typeof inputVariants> {
  className?: string;
  error?: boolean;
  fullWidth?: boolean;
}

export interface InputProps extends ReactInput, InputVariants {
  containerClassName?: string;
  hideLeftIcon?: boolean;
  label?: string;
  leftIcon?: ReactChild;
  message?: string;
  noErrorHandler?: boolean;
  noMessageHandler?: boolean;
  rightIcon?: ReactChild;
}
