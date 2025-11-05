import { MdFilterList } from "react-icons/md";

import { Button } from "@gnetwork-ui/components/molecules/buttons/button";
import { SearchInput } from "@gnetwork-ui/components/molecules/inputs/search-input";
import { ChatListEmpty } from "@ui/chat/components/server/blocks/chat-list-empty";

import styles from "./chat-list.module.css";

/**
 * Chat list component.
 */
export const ChatList = () => (
  <section className={styles.base}>
    <div className={styles.base__header}>
      <SearchInput
        className="bg-chromatic gap-2"
        fullWidth
        id="chat-search"
        name="chat-search"
        placeholder="Buscar chat..."
      />
      <Button className="p-2" isStatic>
        <MdFilterList />
      </Button>
    </div>
    <div className={styles.base__content}>
      <ChatListEmpty />
    </div>
  </section>
);
