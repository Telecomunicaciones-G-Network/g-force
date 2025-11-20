// PENDING:

'use client';

import { Fragment } from 'react';

import Image from 'next/image';

import { MdCall, MdMailOutline, MdMoreVert, MdSend } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { ChatInput } from '@gnetwork-ui/components/molecules/inputs/chat-input';
import { ChatMessage } from '@gnetwork-ui/components/organisms/blocks/chat-message';
import { BackButton } from '@gnetwork-ui/components/organisms/buttons/back-button';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { chatMessages } from '@ui-chat/iterators/chat-messages.iterator';

import { useChatConversation } from './chat-conversation.hook';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './chat-conversation.module.css';

export const ChatConversation = () => {
  const { activeChat, chatMode, goBackChatList, goToChatDetails, isDesktop } =
    useChatConversation();

  return (
    <>
      {(chatMode === ChatModes.CHAT || isDesktop) &&
        activeChat !== null &&
        activeChat !== undefined && (
          <section className={cn(styles.base, 'divide-y divide-neutral-200')}>
            <div className={styles.base__header}>
              <div className={styles.base__header_info}>
                <BackButton onClick={goBackChatList} />
                <button
                  className={cn('flex lg:hidden', styles.base__avatar_button)}
                  onClick={goToChatDetails}
                  type="button"
                >
                  <Avatar
                    image={{
                      customImageComponent: (
                        <Image
                          alt="Angela"
                          className="responsive-image-cover"
                          fill
                          priority
                          sizes="100%"
                          src="/images/chat_user_avatar_1.png"
                        />
                      ),
                    }}
                  />
                </button>
                <Text
                  as="h3"
                  className="font-medium text-sm lg:font-medium lg:text-lg"
                  level="large"
                  scheme="label"
                >
                  Angela Goncalves
                </Text>
              </div>
              <div className={styles.base__header_buttons}>
                <Button className="px-2" isStatic>
                  <MdCall className="min-h-6 min-w-6 size-6" />
                </Button>
                <Button className="px-2" isStatic>
                  <MdMailOutline className="min-h-6 min-w-6 size-6" />
                </Button>
                <Button className="px-2" isStatic>
                  <MdMoreVert className="min-h-6 min-w-6 size-6" />
                </Button>
              </div>
            </div>
            <div className={styles.base__content}>
              <div
                className={cn(
                  styles.base__chat,
                  'gap-6 px-4 py-6 tablet:gap-8 tablet:px-8 lg:gap-6 lg:p-6',
                )}
              >
                {chatMessages?.map((chatMessage) => (
                  <Fragment key={chatMessage?.id}>
                    {chatMessage?.message && (
                      <ChatMessage
                        direction={chatMessage?.direction}
                        time={chatMessage?.time}
                        username={chatMessage?.username}
                      >
                        {chatMessage?.message}
                      </ChatMessage>
                    )}
                  </Fragment>
                ))}
              </div>
              <div className={styles.base__footer}>
                <div className={styles.base__sender}>
                  <ChatInput
                    className="bg-chromatic"
                    fullWidth
                    id="chat_message_sender"
                    name="message"
                    placeholder="Escribir comentario..."
                  />
                  <Button className="px-2" color="red">
                    <MdSend className="min-h-[16.99px] h-[16.99px] min-w-[19.73px] w-[19.73px]" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
    </>
  );
};
