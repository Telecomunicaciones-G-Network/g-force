import * as DialogPrimitive from '@radix-ui/react-dialog';
import { MdClose } from 'react-icons/md';

import { cn } from '../../../../../../utils/cn.util';

import styles from './modal-close.module.css';

export const ModalClose = () => (
  <DialogPrimitive.Close
    className={cn(styles.base, 'ring-offset-background transition-opacity')}
  >
    <MdClose className="h-6 w-6 size-6" />
    <span className="sr-only">Close</span>
  </DialogPrimitive.Close>
);
