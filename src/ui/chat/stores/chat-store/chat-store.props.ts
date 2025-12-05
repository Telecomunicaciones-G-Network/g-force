import type { FileData } from '@gnetwork-ui/components/molecules/inputs/file-input';
import type { MessageValues } from '@module-chat/domain/interfaces';
import type {
  MediaStorageStatus,
  MessageStatus,
} from '@module-chat/domain/types';
import type { ChatSendMode } from '../../types';

export interface ChatStoreState {
  file: FileData | null;
  messages: MessageValues[];
  sendMode: ChatSendMode;

  setFile: (file: FileData | null) => void;
  setMessages: (messages: MessageValues[]) => void;
  setSendMode: (sendMode: ChatSendMode) => void;

  addMessage: (message: MessageValues) => void;
  deleteOneMessageById: (messageId: string) => void;
  updateOneMessageId: (temporalMessageId: string, messageId: string) => void;
  updateOneMessageStatusById: (
    messageId: string,
    messageStatus: MessageStatus,
  ) => void;
  updateStorageStatusOfOneMessageById: (
    messageId: string,
    storageStatus: MediaStorageStatus,
  ) => void;
}
