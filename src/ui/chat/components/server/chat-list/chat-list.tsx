import { SearchInput } from "@gnetwork-ui/components/molecules/inputs/search-input";

import styles from "./chat-list.module.css";

/**
 * Chat list component.
 */
export const ChatList = () => (
  <section className={styles.base}>
    <div className={styles.base__header}>
      <SearchInput
        className="gap-2"
        fullWidth
        id="chat-search"
        name="chat-search"
        placeholder="Buscar chat..."
      />
    </div>
  </section>
);
