'use client';

import type { Contact } from '@module-chat/domain/interfaces';
import type { TeamCodename } from '@module-chat/domain/types';
import type { ChatListBodyProps } from './chat-list-body.props';

import { Fragment } from 'react';

import { cn } from '@gnetwork-ui/utils/cn.util';
import { formatPhoneNumber } from '@stringify/utils/format-phone-number.util';

import { ChatCard } from '@ui-chat/components/client/cards/chat-card';

import { CHAT_CONTACT_CONVERSATION_VISIBLE } from '@ui-chat/constants/chat-contact-conversation-visible.constant';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import { ChatListEmpty } from '../chat-list-empty';

import { useChatListBody } from './chat-list-body.hook';

import styles from './chat-list-body.module.css';

export const ChatListBody = ({
  contacts = [],
}: Readonly<ChatListBodyProps>) => {
  const activeAgent = useContactStore((state) => state.activeAgent);

  const { activeContact, changeActiveContact } = useChatListBody();

  return (
    <div
      className={cn(
        styles.base,
        'pb-4 px-4 tablet:pb-[27px] tablet:px-8 lg:p-0',
      )}
    >
      {contacts?.length > 0 ? (
        contacts.map((contact: Contact) => {
          // Check if conversation status is visible
          const isStatusVisible = CHAT_CONTACT_CONVERSATION_VISIBLE.includes(
            contact?.latestConversation?.status,
          );

          // Check if contact belongs to agent's teams OR has no team (bot conversations)
          const teamId = contact?.latestConversation?.team?.id as TeamCodename;
          const belongsToAgentTeams = teamId
            ? activeAgent?.teams?.includes(teamId)
            : true; // Allow contacts with no team (bot)

          const shouldShowContact = isStatusVisible && belongsToAgentTeams;

          return (
            <Fragment key={contact?.id}>
              {shouldShowContact && (
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
          );
        })
      ) : (
        <ChatListEmpty />
      )}
    </div>
  );
};
