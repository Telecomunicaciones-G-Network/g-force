'use client';

import type { ChatFileViewerFooterProps } from './chat-file-viewer-footer.props';

import { MdDelete, MdDownload, MdSend } from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { ChatInput } from '@gnetwork-ui/components/molecules/inputs/chat-input';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useChatFileViewerFooter } from './chat-file-viewer-footer.hook';

import styles from './chat-file-viewer-footer.module.css';

export const ChatFileViewerFooter = ({
  disabledChat = false,
}: Readonly<ChatFileViewerFooterProps>) => {
  const {
    changeMessage,
    downloadFile,
    isSocketConnected,
    message,
    onSubmit,
    removeFile,
  } = useChatFileViewerFooter();

  return (
    <div className={cn(styles.base, 'divide-y divide-neutral-200')}>
      <div className={styles.base__actions}>
        <button className="cursor-pointer" type="button">
          <MdDelete
            className="fill-red-700 min-h-6 min-w-6 size-6"
            onClick={removeFile}
          />
        </button>
        <button className="cursor-pointer" type="button">
          <MdDownload
            className="fill-neutral-500 min-h-6 min-w-6 size-6"
            onClick={downloadFile}
          />
        </button>
      </div>
      <form className={styles.base__input} onSubmit={onSubmit}>
        <ChatInput
          disabled={!isSocketConnected || disabledChat}
          fullWidth
          hideLeftIcon
          id="chat_message_file_sender"
          name="text"
          noErrorHandler
          noMessageHandler
          onChange={changeMessage}
          placeholder="Escribir comentario..."
          value={message}
        />
        <Button
          className="px-2"
          color="red"
          disabled={!isSocketConnected || disabledChat}
          type="submit"
        >
          <MdSend className="min-h-[16.99px] h-[16.99px] min-w-[19.73px] w-[19.73px]" />
        </Button>
      </form>
    </div>
  );
};
