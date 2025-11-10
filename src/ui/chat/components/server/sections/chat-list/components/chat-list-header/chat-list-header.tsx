import { MdFilterList } from "react-icons/md";

import { SearchInput } from "@gnetwork-ui/components/molecules/inputs/search-input";
import { Button } from "@gnetwork-ui/components/molecules/buttons/button";

import styles from "./chat-list-header.module.css";

export const ChatListHeader = () => (
  <div className={styles.base}>
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
