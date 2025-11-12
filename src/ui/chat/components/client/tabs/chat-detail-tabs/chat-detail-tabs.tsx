'use client';

import {
  MdEditNote,
  MdHistory,
  MdPersonOutline,
  MdReceiptLong,
  MdSell,
} from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { TabContent } from '@gnetwork-ui/components/molecules/tabs/tab-content';
import { TabsTriggers } from '@gnetwork-ui/components/molecules/tabs/tabs-triggers';
import { BackButton } from '@gnetwork-ui/components/organisms/buttons/back-button';
import { TabButton } from '@gnetwork-ui/components/organisms/tabs/tab-button/tab-button';
import { Tabs } from '@gnetwork-ui/components/organisms/tabs/tabs';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useChatDetailTabs } from './chat-detail-tabs.hook';

import styles from './chat-detail-tabs.module.css';

export const ChatDetailTabs = () => {
  const { activeTab, changeActiveTab, goBackChat } =
    useChatDetailTabs('contact');

  return (
    <Tabs
      className={cn(
        styles.base,
        'py-6 tablet:py-8 lg:divide-y lg:divide-gray-200 lg:p-0',
      )}
      defaultValue="contact"
      onValueChange={changeActiveTab}
      value={activeTab}
    >
      <div
        className={cn(
          'flex px-4 py-0 tablet:px-8 lg:hidden',
          styles.base__header,
        )}
      >
        <div className="flex items-center gap-2">
          <BackButton onClick={goBackChat} />
          <Text as="h3" level="small" scheme="label">
            Contacto
          </Text>
        </div>
      </div>
      <TabsTriggers
        className={cn(
          styles.base__triggers,
          'flex-wrap p-6 tablet:pb-8 tablet:pt-8 tablet:px-8 lg:flex-nowrap lg:pb-6',
        )}
      >
        <TabButton value="contact">
          <MdPersonOutline className="min-h-6 min-w-6 size-6" />
        </TabButton>
        <TabButton value="invoices">
          <MdReceiptLong className="min-h-6 min-w-6 size-6" />
        </TabButton>
        <TabButton value="contracts">
          <MdEditNote className="min-h-6 min-w-6 size-6" />
        </TabButton>
        <TabButton value="status">
          <MdSell className="min-h-6 min-w-6 size-6" />
        </TabButton>
        <TabButton value="historical">
          <MdHistory className="min-h-6 min-w-6 size-6" />
        </TabButton>
      </TabsTriggers>
      <TabContent className={styles.base__content} value="contact">
        contacto
      </TabContent>
      <TabContent className={styles.base__content} value="invoices">
        facturacion
      </TabContent>
      <TabContent className={styles.base__content} value="contracts">
        contratos
      </TabContent>
      <TabContent className={styles.base__content} value="status">
        status
      </TabContent>
      <TabContent className={styles.base__content} value="historical">
        historico
      </TabContent>
    </Tabs>
  );
};
