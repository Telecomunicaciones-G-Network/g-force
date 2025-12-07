'use client';

import type { ChatImageMessageModalProps } from './chat-image-message-modal.props';

import { ResponsiveImage } from '../../../../../atoms/images/responsive-image';

import { cn } from '../../../../../../utils/cn.util';

import styles from './chat-image-message-modal.module.css';

export const ChatImageMessageModal = ({
  alt = 'Image',
  src = '',
}: Readonly<ChatImageMessageModalProps>) => (
  <div className={cn(styles.base, 'pt-10')}>
    <div className={styles.base__container}>
      <ResponsiveImage alt={alt} cache lazy src={src} />
    </div>
  </div>
);
