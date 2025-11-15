import { MdFilterList } from 'react-icons/md';

import { SearchInput } from '@gnetwork-ui/components/molecules/inputs/search-input';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './chat-list-header.module.css';

export const ChatListHeader = () => (
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
    <Button className="p-2" isStatic>
      <MdFilterList />
    </Button>
  </div>
);
