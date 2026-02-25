import type { Media } from '@module-chat/domain/interfaces/media.interface';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { MdDownload } from 'react-icons/md';

import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';
import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';
import { getChatMediaByIdQuery } from '@module-chat/infrastructure/queries/get-chat-media-by-id.query';
import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';
import { downloadFileByUrl } from '@filer/utils/download-file-by-url.util';
import { extractExtensionFromMimeType } from '@filer/utils/extract-extension-from-mimetype.util';
import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatImageMessageModalClose } from '@ui-chat/components/client/messages/chat-image-message/components/chat-image-message-modal-close';
import { ChatImageMessageModal } from '@ui-chat/components/client/messages/chat-image-message/components/chat-image-message-modal';
import styles from '@ui-chat/components/client/messages/chat-image-message/components/chat-image-message-content/chat-image-message-content.module.css';

export interface InteractiveImagePreviewProps {
  media: Media;
}

export const InteractiveImagePreview = ({
  media,
}: InteractiveImagePreviewProps) => {
  const { isModalOpen, onOpenChange } = useModal();
  const mediaId = media?.id;

  const { data: imageUrl, isLoading } = useQuery({
    queryKey: [queryKeysDictionary.GET_CHAT_MEDIA_BY_ID, mediaId],
    queryFn: () => getChatMediaByIdQuery(mediaId),
    enabled: !!mediaId,
  });

  if (isLoading || !mediaId) {
    return (
      <div className="w-full h-40 bg-black/10 rounded-lg animate-pulse my-2" />
    );
  }

  if (!imageUrl) return null;

  const filename = media?.filename || 'image';
  const mimeType = media?.mimeType || 'image/jpeg';

  return (
    <div className="my-2">
      <Modal
        className={cn(styles.base, 'relative sm:max-w-none')}
        hideModalClose
        isOpen={isModalOpen}
        modal={false}
        onOpenChange={onOpenChange}
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
                aria-label="Descargar imagen interactiva"
              >
                <MdDownload className="fill-white h-6 w-6 size-6" />
              </button>
            </div>
          </>
        }
        triggerComponent={
          <button
            className="relative flex h-40 w-full overflow-hidden rounded-lg bg-black/10 border-none cursor-pointer p-0"
            type="button"
          >
            <Image
              alt={filename}
              className="object-cover"
              fill
              sizes="100%"
              src={imageUrl}
            />
          </button>
        }
      >
        <ChatImageMessageModal imageAlt={filename} imageSrc={imageUrl} />
      </Modal>
    </div>
  );
};
