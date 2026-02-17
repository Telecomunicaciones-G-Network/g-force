'use client';

import type { Contact } from '@module-chat/domain/interfaces';
import type { ContactListProps } from './contact-list.props';

import { Fragment } from 'react';

import { InfinityScrollContainer } from '@gnetwork-ui/components/organisms/containers/infinity-scroll-container';

import { formatPhoneNumber } from '@stringify/utils/format-phone-number.util';

import { CHAT_CONTACT_CONVERSATION_VISIBLE } from '@ui-chat/constants/chat-contact-conversation-visible.constant';

import { ChatCard } from '@ui-chat/components/client/cards/chat-card';
import { ChatListEmpty } from '@ui-chat/components/client/sections/contacts-section/components/chat-list-empty';

import { useContactList } from './contact-list.hook';

/**
 * @name ContactList
 *
 * @description This component is used to render the contact list.
 *
 * @property {Contact[]} contacts - The contacts to render.
 *
 * TODO: Turn ChatCard component into ContactCard component
 * TODO: Turn ChatListEmpty component into ContactListEmpty component and its scope it inside of this folder component
 */
export const ContactList = ({ contacts = [] }: Readonly<ContactListProps>) => {
  const {
    activeContact,
    changeActiveContact,
    contactsNextPage,
    fetchNextContacts,
    isLoadingMore,
  } = useContactList();

  return (
    <InfinityScrollContainer
      isLoading={isLoadingMore}
      nextPage={contactsNextPage}
      onLoadMore={fetchNextContacts}
    >
      {contacts?.length > 0 ? (
        contacts.map((contact: Contact) => (
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
    </InfinityScrollContainer>
  );
};
