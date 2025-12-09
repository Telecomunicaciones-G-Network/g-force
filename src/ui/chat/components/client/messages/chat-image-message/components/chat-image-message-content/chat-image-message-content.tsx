'use client';

import type { ChatImageMessageContentProps } from './chat-image-message-content.props';

import { MdDownload } from 'react-icons/md';

import { ResponsiveImage } from '@gnetwork-ui/components/atoms/images/responsive-image';
import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';

import { extractExtensionFromMimeType } from '@filer/utils/extract-extension-from-mimetype.util';
import { downloadFileByUrl } from '@filer/utils/download-file-by-url.util';
import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatImageMessageModal } from '../chat-image-message-modal';
import { ChatImageMessageModalClose } from '../chat-image-message-modal-close';

import styles from './chat-image-message-content.module.css';

export const ChatImageMessageContent = (
  props: Readonly<ChatImageMessageContentProps>,
) => {
  const {
    caption = null,
    customImageComponent,
    filename = '',
    imageAlt = 'Image',
    imageSrc = '',
    mimeType = '',
    ...rest
  } = props;

  return (
    <ChatMessage caption={caption} bubbleClassName="w-full" {...rest}>
      <Modal
        className={cn(styles.base, 'relative sm:max-w-none')}
        hideModalClose
        modalOverlayChildren={
          <>
            <ChatImageMessageModalClose />
            <div data-prevent-close>
              <button
                className={cn(styles.base__download_button, 'bg-black')}
                onClick={() =>
                  downloadFileByUrl(
                    imageSrc,
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
        <ChatImageMessageModal imageAlt={imageAlt} imageSrc={imageSrc} />
      </Modal>
    </ChatMessage>
  );
};
