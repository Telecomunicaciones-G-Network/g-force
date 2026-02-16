'use client';

import type { ContactsSectionProps } from './contacts-section.props';

import { use } from 'react';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { AgentStatusSelector } from '@ui-chat/components/client/selects/agent-status-selector';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { ContactList } from '@ui-chat/components/client/lists/contact-list/contact-list';

import { ChatListHeader } from './components/chat-list-header';

import { useContactsSection } from './contacts-section.hook';

import styles from './contacts-section.module.css';

/**
 * @name ContactsSection
 *
 * @description This component is used to render the contact section.
 *
 * @property {Promise<GetContactsResponse>} chatContactsResponsePromise - The promise for the contact section.
 *
 * TODO: Avoid to transfer the promise by props. Find out other way to do it.
 */
export const ContactsSection = ({
  chatContactsResponsePromise,
}: Readonly<ContactsSectionProps>) => {
  const {
    contacts: contactsResponse = [],
    hasMore = false,
    nextCursor = null,
  } = use(chatContactsResponsePromise);

  const { chatMode, contacts, isDesktop } = useContactsSection({
    contactsResponse,
    hasMore,
    nextCursor,
  });

  return (
    <>
      {(chatMode === ChatModes.LIST || isDesktop) && (
        <section
          className={cn(
            styles.base,
            'pb-2 pt-4 px-0 tablet:pt-6 lg:pt-8 w-full lg:min-w-[385px] lg:pb-[80px] lg:w-[385px]',
          )}
        >
          {contacts?.length > 0 && <ChatListHeader />}
          <ContactList contacts={contacts} />
          <AgentStatusSelector />
        </section>
      )}
    </>
  );
};
