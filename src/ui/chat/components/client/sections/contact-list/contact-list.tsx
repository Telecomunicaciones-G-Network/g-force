'use client';

import type { ContactListProps } from './contact-list.props';

import { use } from 'react';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatListBody } from './components/chat-list-body';
import { ChatListHeader } from './components/chat-list-header';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactList } from './contact-list.hook';

import styles from './contact-list.module.css';

export const ContactList = ({
  chatContactsResponsePromise,
}: Readonly<ContactListProps>) => {
  const { contacts: contactsResponse = [] } = use(chatContactsResponsePromise);
  const { chatMode, contacts, isDesktop } = useContactList(contactsResponse);

  console.log(contacts);

  return (
    <>
      {(chatMode === ChatModes.LIST || isDesktop) && (
        <section
          className={cn(
            styles.base,
            'pb-2 pt-4 px-0 tablet:pt-6 lg:pt-8 w-full lg:min-w-[385px] lg:w-[385px]',
          )}
        >
          {contacts?.length > 0 && <ChatListHeader />}
          <ChatListBody contacts={contacts} />
        </section>
      )}
    </>
  );
};
