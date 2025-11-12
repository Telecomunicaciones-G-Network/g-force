'use client';

import Image from 'next/image';

import {
  MdEditNote,
  MdHistory,
  MdPersonOutline,
  MdReceiptLong,
  MdSell,
} from 'react-icons/md';

import { ResponsiveImage } from '@gnetwork-ui/components/atoms/images/responsive-image';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { TabContent } from '@gnetwork-ui/components/molecules/tabs/tab-content';
import { TabsTriggers } from '@gnetwork-ui/components/molecules/tabs/tabs-triggers';
import { BackButton } from '@gnetwork-ui/components/organisms/buttons/back-button';
import { TabButton } from '@gnetwork-ui/components/organisms/tabs/tab-button/tab-button';
import { Tabs } from '@gnetwork-ui/components/organisms/tabs/tabs';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatContact } from '@ui-chat/components/server/blocks/chat-contact';
import { ChatInvoices } from '@ui-chat/components/server/blocks/chat-invoices';

import { ChatDetailTabs as ChatDetailTabsValues } from './enums/chat-detail-tabs.enum';

import { chatDetailTabsDictionary } from './dictionaries/chat-detail-tabs.dictionary';

import { useChatDetailTabs } from './chat-detail-tabs.hook';

import styles from './chat-detail-tabs.module.css';

export const ChatDetailTabs = () => {
  const { activeTab, changeActiveTab, goBackChat, isActiveTab } =
    useChatDetailTabs(ChatDetailTabsValues.CONTACT);

  return (
    <Tabs
      className={cn(
        styles.base,
        'py-6 tablet:py-8 lg:divide-y lg:divide-gray-200 lg:p-0',
      )}
      defaultValue={ChatDetailTabsValues.CONTACT}
      onValueChange={changeActiveTab}
      value={activeTab}
    >
      <div
        className={cn(
          'flex px-4 py-0 tablet:px-8 lg:hidden',
          styles.base__header,
        )}
      >
        <div className={styles.base__header_top}>
          <BackButton onClick={goBackChat} />
          <Text as="h3" level="small" scheme="label">
            {chatDetailTabsDictionary?.[activeTab]}
          </Text>
        </div>
        <div
          className={cn(
            styles.base__header_image,
            'min-h-[138px] tablet:min-h-[172px]',
          )}
        >
          <ResponsiveImage
            customImageComponent={
              <Image
                alt="Contact image"
                className="responsive-image-cover rounded-lg"
                fill
                src="/images/chat_user_avatar_1_contact.png"
                sizes="100%"
              />
            }
          />
        </div>
      </div>
      <TabsTriggers
        className={cn(
          styles.base__triggers,
          'flex-wrap p-6 tablet:pb-8 tablet:pt-8 tablet:px-8 lg:flex-nowrap lg:pb-6',
        )}
      >
        <TabButton
          color={isActiveTab(ChatDetailTabsValues.CONTACT) ? 'red' : 'default'}
          value={ChatDetailTabsValues.CONTACT}
        >
          <MdPersonOutline className="min-h-6 min-w-6 size-6" />
        </TabButton>
        <TabButton
          color={isActiveTab(ChatDetailTabsValues.INVOICES) ? 'red' : 'default'}
          value={ChatDetailTabsValues.INVOICES}
        >
          <MdReceiptLong className="min-h-6 min-w-6 size-6" />
        </TabButton>
        <TabButton
          color={
            isActiveTab(ChatDetailTabsValues.CONTRACTS) ? 'red' : 'default'
          }
          value={ChatDetailTabsValues.CONTRACTS}
        >
          <MdEditNote className="min-h-6 min-w-6 size-6" />
        </TabButton>
        <TabButton
          color={isActiveTab(ChatDetailTabsValues.STATUS) ? 'red' : 'default'}
          value={ChatDetailTabsValues.STATUS}
        >
          <MdSell className="min-h-6 min-w-6 size-6" />
        </TabButton>
        <TabButton
          color={
            isActiveTab(ChatDetailTabsValues.HISTORICAL) ? 'red' : 'default'
          }
          value={ChatDetailTabsValues.HISTORICAL}
        >
          <MdHistory className="min-h-6 min-w-6 size-6" />
        </TabButton>
      </TabsTriggers>
      <TabContent
        className={styles.base__content}
        value={ChatDetailTabsValues.CONTACT}
      >
        <ChatContact />
      </TabContent>
      <TabContent
        className={styles.base__content}
        value={ChatDetailTabsValues.INVOICES}
      >
        <ChatInvoices />
      </TabContent>
      <TabContent
        className={styles.base__content}
        value={ChatDetailTabsValues.CONTRACTS}
      >
        contratos
      </TabContent>
      <TabContent
        className={styles.base__content}
        value={ChatDetailTabsValues.STATUS}
      >
        status
      </TabContent>
      <TabContent
        className={styles.base__content}
        value={ChatDetailTabsValues.HISTORICAL}
      >
        historico
      </TabContent>
    </Tabs>
  );
};
