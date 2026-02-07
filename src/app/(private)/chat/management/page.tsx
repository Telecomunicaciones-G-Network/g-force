import type { Metadata } from 'next';

import { TabsLine } from '@gnetwork-ui/components/organisms/tabs/tabs-line';

import { CHAT_MANAGEMENT_TABS } from '@ui-chat/constants/chat-management-tabs.constant';

import { chatManagementTabsContent } from '@ui-chat/iterators/chat-management-tabs-content.iterator';

import styles from './page.module.css';

/**
 * Metadata for the chat management page
 *
 * @description This metadata is used to set the title and description of the chat management page
 */
export const metadata: Metadata = {
  title: 'Gforce Chat - Gestión',
  description: 'Gforce Chat - Gestión',
};

/**
 * @name Chat management page
 *
 * @description This page is the chat management page
 */
export default function ChatManagementPage() {
  return (
    <main className={styles.base}>
      <TabsLine
        defaultValue="agent"
        tabs={CHAT_MANAGEMENT_TABS}
        tabsContent={chatManagementTabsContent}
      />
    </main>
  );
}
