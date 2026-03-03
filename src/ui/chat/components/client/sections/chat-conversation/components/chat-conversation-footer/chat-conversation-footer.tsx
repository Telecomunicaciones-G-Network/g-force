'use client';

import type { ChatConversationFooterProps } from './chat-conversation-footer.props';

import { useState } from 'react';

import { MdCloudQueue, MdSend } from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { CollapsibleButton } from '@gnetwork-ui/components/molecules/buttons/collapsible-button';
import { ChatInput } from '@gnetwork-ui/components/molecules/inputs/chat-input';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { InternalMessageForm } from '@ui-chat/components/client/forms/internal-message-form';
import { ChatCloudStorageModal } from '@ui-chat/components/client/modals/chat-cloud-storage-modal';

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

  const [isCloudModalOpen, setIsCloudModalOpen] = useState(false);

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
            customLeftIcon={
              <div className="flex items-center gap-1.5 pt-[2px]">
                <ChatConversationFileAttachDropdown />
                <button
                  className="flex items-center justify-center size-6 rounded bg-transparent cursor-pointer hover:bg-neutral-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                  disabled={disabledChat || sendMode === ChatSendModes.INTERNAL}
                  onClick={() => setIsCloudModalOpen(true)}
                  title="Almacenamiento en la nube"
                  type="button"
                >
                  <MdCloudQueue className="min-h-4 min-w-4 size-4 fill-neutral-600" />
                </button>
              </div>
            }
            disabled={disabledChat || sendMode === ChatSendModes.INTERNAL}
            fullWidth
            id="chat_message_sender"
            isStatic
            name="text"
            noErrorHandler
            noMessageHandler
            onChange={changeMessage}
            placeholder="Escribir comentario..."
            value={message}
          />
          <Button
            className="px-2 max-h-[42px] self-end"
            color="red"
            disabled={disabledChat || sendMode === ChatSendModes.INTERNAL}
            type="submit"
          >
            <MdSend className="min-h-[16.99px] h-[16.99px] min-w-[19.73px] w-[19.73px]" />
          </Button>
        </form>
      </div>
      <div
        className={cn(
          styles.base__collapsible,
          isInternalMessageMode ? 'h-4 min-h-4 pt-[5px]' : 'h-5 min-h-5 pt-px',
        )}
      >
        <CollapsibleButton
          isCollapsed={isInternalMessageMode}
          onClick={toggleInternalMessageMode}
        />
      </div>
      {sendMode === ChatSendModes.INTERNAL && <InternalMessageForm />}
      <ChatCloudStorageModal
        isOpen={isCloudModalOpen}
        onOpenChange={setIsCloudModalOpen}
        triggerComponent={<span aria-hidden style={{ display: 'none' }} />}
      />
    </div>
  );
};
