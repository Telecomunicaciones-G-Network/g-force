import * as DialogPrimitive from '@radix-ui/react-dialog';

import styles from './modal-header.module.css';

const DialogTitle = () => <DialogPrimitive.Title></DialogPrimitive.Title>;

export const ModalHeader = () => (
  <div className={styles.base}>
    <DialogTitle />
  </div>
);
