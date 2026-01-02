'use client';

import type { ContactValues } from '@module-chat/domain/interfaces';
import type { ChatListBodyProps } from './chat-list-body.props';

import { Fragment } from 'react';

import { cn } from '@gnetwork-ui/utils/cn.util';
import { formatPhoneNumber } from '@stringify/utils/format-phone-number.util';

import { ChatCard } from '@ui-chat/components/client/cards/chat-card';
import { ChatListEmpty } from '../chat-list-empty';

import { useChatListBody } from './chat-list-body.hook';

import styles from './chat-list-body.module.css';
import { CHAT_CONTACT_CONVERSATION_VISIBLE } from '@/src/ui/chat/constants/chat-contact-conversation-visible.constant';

export const ChatListBody = ({
  contacts = [],
}: Readonly<ChatListBodyProps>) => {
  const { activeContact, changeActiveContact } = useChatListBody();

  return (
    <div
      className={cn(
        styles.base,
        'pb-4 px-4 tablet:pb-[27px] tablet:px-8 lg:p-0',
      )}
    >
      {contacts?.length > 0 ? (
        contacts.map((contact: ContactValues) => (
          <Fragment key={contact?.id}>
            {CHAT_CONTACT_CONVERSATION_VISIBLE.includes(
              contact?.latestConversation?.status,
            ) && (
              <ChatCard
                contactId={contact?.id}
                isActive={activeContact?.id === contact?.id}
                key={contact?.id}
                lastMessage={contact?.latestMessage?.text ?? ''}
                lastMessageTime={contact?.latestMessage?.createdAt}
                messageType={contact?.latestMessage?.type}
                onClick={() => changeActiveContact(contact)}
                phoneNumber={formatPhoneNumber(contact?.phoneNumber)}
                team={contact?.latestConversation?.team}
                unreadMessages={contact?.unreadCount}
                username={contact?.name}
              />
            )}
          </Fragment>
        ))
      ) : (
        <ChatListEmpty />
      )}
    </div>
  );
};
