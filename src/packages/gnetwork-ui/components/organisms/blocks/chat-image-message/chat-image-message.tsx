'use client';

import type { ChatImageMessageProps } from './chat-image-message.props';

import { ResponsiveImage } from '../../../atoms/images/responsive-image';
import { Modal } from '../../modals/modal';
import { ChatMessage } from '../chat-message';

import { ChatImageMessageModal } from './components/chat-image-message-modal';
import { ChatImageMessageModalClose } from './components/chat-image-message-modal-close';

import { cn } from '../../../../utils/cn.util';

import styles from './chat-image-message.module.css';

export const ChatImageMessage = (props: Readonly<ChatImageMessageProps>) => {
  const {
    customImageComponent,
    imageAlt = 'Image',
    imageUrl = '',
    ...rest
  } = props;

  return (
    <ChatMessage bubbleClassName="w-full" {...rest}>
      <Modal
        className={cn(styles.base__modal, 'p-10 sm:max-w-none')}
        customModalCloseComponent={<ChatImageMessageModalClose />}
        triggerComponent={
          <div className="flex h-[154px] w-full">
            <ResponsiveImage
              className="h-full w-full"
              customImageComponent={customImageComponent}
              objectFit="cover"
            />
          </div>
        }
      >
        <ChatImageMessageModal alt={imageAlt} src={imageUrl} />
      </Modal>
    </ChatMessage>
  );
};
