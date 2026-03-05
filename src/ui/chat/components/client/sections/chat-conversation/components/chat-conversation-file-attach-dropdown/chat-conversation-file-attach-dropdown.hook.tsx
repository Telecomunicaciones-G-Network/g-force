'use client';

import type { FileData } from '@gnetwork-ui/components/molecules/inputs/file-input';

import { useState } from 'react';

import { useSocket } from '@socketio/hooks/use-socket.hook';

import { formatFileSize } from '@filer/utils/format-file-size.util';
import { isFileMimetypeValid } from '@filer/utils/is-file-mimetype-valid.util';
import { isFileSizeValid } from '@filer/utils/is-file-size-valid.util';

import { DOCUMENT_MIMETYPES_ALLOWED } from '@module-core/constants/document-mimetypes-allowed.constant';
import { IMAGE_MIMETYPES_ALLOWED } from '@module-core/constants/image-mimetypes-allowed.constant';
import { MAXIMUM_ALLOWED_FILE_SIZE } from '@module-core/constants/maximum-allowed-file-size.constant';

import { AlertSchemes as ToastSchemes } from '@gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useChatConversationFileAttachDropdown = () => {
  const { showToast } = useToast();
  const { isConnectedAndStatusConnected } = useSocket();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const sendMode = useChatStore((state) => state.sendMode);

  const setFile = useChatStore((state) => state.setFile);
  const setSendMode = useChatStore((state) => state.setSendMode);

  const attachImageFiles = (fileData: FileData[]) => {
    if (!isFileSizeValid(fileData?.[0]?.size, MAXIMUM_ALLOWED_FILE_SIZE)) {
      showToast(
        `El archivo no debe exceder los ${formatFileSize(MAXIMUM_ALLOWED_FILE_SIZE)}`,
        {
          className: 'min-w-[min(380px,100%)]',
          duration: 3000,
          id: 'chat-conversation-file-attach-dropdown-toast',
          position: 'top-right',
          scheme: ToastSchemes.ERROR,
        },
      );

      return;
    }

    if (!isFileMimetypeValid(fileData?.[0]?.type, IMAGE_MIMETYPES_ALLOWED)) {
      showToast('El formato del archivo no es permitido como imagen', {
        className: 'min-w-[min(380px,100%)]',
        duration: 3000,
        id: 'chat-conversation-file-attach-dropdown-toast',
        position: 'top-right',
        scheme: ToastSchemes.ERROR,
      });

      return;
    }
    setIsDropdownOpen(false);
    setFile(fileData?.[0] ?? null);
    setSendMode(ChatSendModes.IMAGE);
  };

  const attachDocumentFiles = (fileData: FileData[]) => {
    if (!isFileSizeValid(fileData?.[0]?.size, MAXIMUM_ALLOWED_FILE_SIZE)) {
      showToast(
        `El archivo no debe exceder los ${formatFileSize(MAXIMUM_ALLOWED_FILE_SIZE)}`,
        {
          className: 'min-w-[min(380px,100%)]',
          duration: 3000,
          id: 'chat-conversation-file-attach-dropdown-toast',
          position: 'top-right',
          scheme: ToastSchemes.ERROR,
        },
      );

      return;
    }

    if (!isFileMimetypeValid(fileData?.[0]?.type, DOCUMENT_MIMETYPES_ALLOWED)) {
      showToast('El formato del archivo no es permitido como documento', {
        className: 'min-w-[min(380px,100%)]',
        duration: 3000,
        id: 'chat-conversation-file-attach-dropdown-toast',
        position: 'top-right',
        scheme: ToastSchemes.ERROR,
      });

      return;
    }
    setIsDropdownOpen(false);
    setFile(fileData?.[0] ?? null);
    setSendMode(ChatSendModes.DOCUMENT);
  };

  return {
    attachDocumentFiles,
    attachImageFiles,
    isDropdownOpen,
    isSocketConnected: isConnectedAndStatusConnected,
    onOpenChange: setIsDropdownOpen,
    setIsDropdownOpen,
    sendMode,
  };
};
