import type { PropsWithChildren } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { ToastScheme } from './types';

import { toastVariants } from './toast.style';

export interface ToastVariants extends VariantProps<typeof toastVariants> {
  className?: string;
  scheme?: ToastScheme;
}

export interface ToastProps extends PropsWithChildren, ToastVariants {
  id: string;
}
