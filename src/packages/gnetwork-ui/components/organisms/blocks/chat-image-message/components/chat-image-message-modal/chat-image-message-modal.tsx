'use client';

import type { ChatImageMessageModalProps } from './chat-image-message-modal.props';

import { ResponsiveImage } from '../../../../../atoms/images/responsive-image';

import styles from './chat-image-message-modal.module.css';

export const ChatImageMessageModal = ({
  alt = 'Image',
  src = '',
}: Readonly<ChatImageMessageModalProps>) => (
  <div className="pt-10">
    <div className={styles.base}>
      <ResponsiveImage alt={alt} cache className="h-fit w-fit" lazy src={src} />
    </div>
  </div>
);
