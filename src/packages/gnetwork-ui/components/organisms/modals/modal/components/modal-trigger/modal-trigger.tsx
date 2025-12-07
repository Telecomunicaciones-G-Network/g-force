import type { PropsWithChildren } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

const DialogTrigger = DialogPrimitive.Trigger;

export const ModalTrigger = ({ children }: Readonly<PropsWithChildren>) => (
  <DialogTrigger asChild>{children}</DialogTrigger>
);
