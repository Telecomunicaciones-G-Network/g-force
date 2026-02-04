import type { ChatListHeaderProps } from './chat-list-header.props';

import { SearchInput } from '@gnetwork-ui/components/molecules/inputs/search-input';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatFilterDropdown } from '../chat-filter-dropdown';

import styles from './chat-list-header.module.css';

export const ChatListHeader = ({
  hideFilterButton = false,
}: Readonly<ChatListHeaderProps>) => (
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
      placeholder="Buscar chat..."
    />
    {!hideFilterButton && <ChatFilterDropdown />}
  </div>
);
