import * as DialogPrimitive from '@radix-ui/react-dialog';
import { MdClose } from 'react-icons/md';

import { cn } from '../../../../../../utils/cn.util';

import styles from './chat-image-message-modal-close.module.css';

export const ChatImageMessageModalClose = () => (
  <DialogPrimitive.Close
    className={cn(
      styles.base,
      'bg-black/50 ring-offset-background rounded-lg p-3 transition-opacity hover:bg-black',
    )}
  >
    <MdClose className="fill-white h-6 w-6 size-6" />
    <span className="sr-only">Close</span>
  </DialogPrimitive.Close>
);
