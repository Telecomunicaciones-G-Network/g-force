'use client';

import type { ChatImageMessageProps } from './chat-image-message.props';

import { MdDownload } from 'react-icons/md';

import { extractExtensionFromMimeType } from '@filer/utils/extract-extension-from-mimetype.util';
import { downloadFileByUrl } from '@filer/utils/download-file-by-url.util';

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
    filename = '',
    imageAlt = 'Image',
    imageUrl = '',
    mimeType = '',
    ...rest
  } = props;

  return (
    <ChatMessage bubbleClassName="w-full" {...rest}>
      <Modal
        className={cn(styles.base__modal, 'relative sm:max-w-none')}
        hideModalClose
        modalOverlayChildren={
          <>
            <ChatImageMessageModalClose />
            <div data-prevent-close>
              <button
                className={cn(styles.base__download_button, 'bg-black')}
                onClick={() =>
                  downloadFileByUrl(
                    imageUrl,
                    filename,
                    extractExtensionFromMimeType(mimeType),
                  )
                }
                type="button"
              >
                <MdDownload className="fill-white h-6 w-6 size-6" />
              </button>
            </div>
          </>
        }
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
