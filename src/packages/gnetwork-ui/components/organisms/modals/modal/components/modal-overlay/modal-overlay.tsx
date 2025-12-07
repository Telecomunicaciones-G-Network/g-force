import type { PropsWithChildren } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '../../../../../../utils/cn.util';

import styles from './modal-overlay.module.css';

export const ModalOverlay = ({ children }: Readonly<PropsWithChildren>) => (
  <DialogPrimitive.Overlay
    className={cn(
      styles.base,
      'bg-black/50 inset-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    )}
  >
    {children}
  </DialogPrimitive.Overlay>
);
