'use client';

import type { ChatListHeaderProps } from './chat-list-header.props';

import { SearchInput } from '@gnetwork-ui/components/molecules/inputs/search-input';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ContactsFiltersDropdown } from '@ui-chat/components/client/dropdowns/contacts-filters-dropdown';

import { useChatListHeader } from './chat-list-header.hook';

import styles from './chat-list-header.module.css';

export const ChatListHeader = ({
  hideFilterButton = false,
}: Readonly<ChatListHeaderProps>) => {
  const { contactSearchValue, onContactSearchChange } = useChatListHeader();

  return (
    <div
      className={cn(
        styles.base,
        'pt-0 pb-4 px-4 tablet:pb-6 tablet:px-8 lg:pb-2',
      )}
    >
      <SearchInput
        className="bg-chromatic gap-2"
        fullWidth
        id="chat_search"
        name="chat-search"
        onChange={onContactSearchChange}
        placeholder="Buscar chat..."
        value={contactSearchValue}
      />
      {!hideFilterButton && <ContactsFiltersDropdown />}
    </div>
  );
};
