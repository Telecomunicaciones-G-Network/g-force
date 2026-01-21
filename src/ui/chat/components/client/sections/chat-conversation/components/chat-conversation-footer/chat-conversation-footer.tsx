'use client';

import type { ChatConversationFooterProps } from './chat-conversation-footer.props';

import { MdSend } from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { CollapsibleButton } from '@gnetwork-ui/components/molecules/buttons/collapsible-button';
import { ChatInput } from '@gnetwork-ui/components/molecules/inputs/chat-input';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { ChatConversationFileAttachDropdown } from '../chat-conversation-file-attach-dropdown';

import { useChatConversationFooter } from './chat-conversation-footer.hook';

import styles from './chat-conversation-footer.module.css';

export const ChatConversationFooter = ({
  disabledChat = false,
}: Readonly<ChatConversationFooterProps>) => {
  const {
    changeMessage,
    isInternalMessageMode,
    message,
    onSubmit,
    toggleInternalMessageMode,
    sendMode,
  } = useChatConversationFooter();

  return (
    <div className={styles.base}>
      <div
        className={cn(
          styles.base__container,
          sendMode === ChatSendModes.INTERNAL &&
            'border-b border-solid border-b-neutral-200 pb-4',
        )}
      >
        <form
          className={cn(
            styles.base__form,
            sendMode === ChatSendModes.INTERNAL && 'blur-xs',
          )}
          onSubmit={onSubmit}
        >
          <ChatInput
            className="bg-chromatic"
            customLeftIcon={<ChatConversationFileAttachDropdown />}
            disabled={disabledChat || sendMode === ChatSendModes.INTERNAL}
            fullWidth
            id="chat_message_sender"
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
            disabled={disabledChat || sendMode === ChatSendModes.INTERNAL}
            type="submit"
          >
            <MdSend className="min-h-[16.99px] h-[16.99px] min-w-[19.73px] w-[19.73px]" />
          </Button>
        </form>
      </div>
      <div className={styles.base__collapsible}>
        <CollapsibleButton
          isCollapsed={isInternalMessageMode}
          onClick={toggleInternalMessageMode}
        />
      </div>
      {sendMode === ChatSendModes.INTERNAL && (
        <div>input de internal message</div>
      )}
    </div>
  );
};
