'use client';

import Image from 'next/image';

import {
  MdEditNote,
  MdPersonOutline,
  MdReceiptLong,
  MdSell,
} from 'react-icons/md';

import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { ResponsiveImage } from '@gnetwork-ui/components/atoms/images/responsive-image';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { TabContent } from '@gnetwork-ui/components/molecules/tabs/tab-content';
import { TabsTriggers } from '@gnetwork-ui/components/molecules/tabs/tabs-triggers';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';
import { BackButton } from '@gnetwork-ui/components/organisms/buttons/back-button';
import { TabButton } from '@gnetwork-ui/components/organisms/tabs/tab-button/tab-button';
import { Tabs } from '@gnetwork-ui/components/organisms/tabs/tabs';

import { cn } from '@gnetwork-ui/utils/cn.util';
import { usernameToInitials } from '@stringify/utils/username-to-initials.util';

import { ChatTickets } from '@ui-chat/components/client/blocks/chat-tickets';

import { ChatContact } from '@ui-chat/components/server/blocks/chat-contact';
import { ChatContracts } from '@ui-chat/components/server/blocks/chat-contracts';
import { ChatInvoices } from '@ui-chat/components/server/blocks/chat-invoices';

import { ChatDetailTabs as ChatDetailTabsValues } from './enums/chat-detail-tabs.enum';

import { chatDetailTabsDictionary } from './dictionaries/chat-detail-tabs.dictionary';

import { useChatDetailTabs } from './chat-detail-tabs.hook';

import styles from './chat-detail-tabs.module.css';

export const ChatDetailTabs = () => {
  const {
    activeContact,
    activeTab,
    changeActiveTab,
    contactAvatarSrc,
    goBackChat,
    isActiveTab,
    isDesktop,
  } = useChatDetailTabs(ChatDetailTabsValues.CONTACT);

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
          <BackButton hide={isDesktop} onClick={goBackChat} />
          <Text as="h3" level="small" scheme="label">
            {chatDetailTabsDictionary?.[activeTab]}
          </Text>
        </div>
        {contactAvatarSrc && (
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
        )}
        {!contactAvatarSrc && activeContact?.name && (
          <div
            className={styles.base__avatar_container}
            style={{
              backgroundColor: activeContact?.id
                ? `#${activeContact?.id?.slice(-6)}`
                : '#cccccc',
            }}
          >
            <Text
              as="span"
              className="text-chromatic"
              level="xxlarge"
              scheme="heading"
            >
              {usernameToInitials(activeContact?.name ?? '')}
            </Text>
          </div>
        )}
        {!contactAvatarSrc && !activeContact?.name && (
          <div
            className={styles.base__avatar_container}
            style={{
              backgroundColor: activeContact?.id
                ? `#${activeContact?.id?.slice(-6)}`
                : '#cccccc',
            }}
          >
            <Icon
              className="min-h-16 min-w-16 size-16"
              color="white"
              fillColor="white"
              name="user"
            />
          </div>
        )}
      </div>
      <TabsTriggers
        className={cn(
          styles.base__triggers,
          'flex-wrap p-6 tablet:pb-8 tablet:pt-8 tablet:px-8 lg:flex-nowrap lg:pb-6',
        )}
      >
        <Tooltip
          side="bottom"
          sideOffset={16}
          triggerAsChild={true}
          triggerComponent={
            <TabButton
              color={
                isActiveTab(ChatDetailTabsValues.CONTACT) ? 'red' : 'default'
              }
              value={ChatDetailTabsValues.CONTACT}
            >
              <MdPersonOutline className="min-h-6 min-w-6 size-6" />
            </TabButton>
          }
        >
          Contacto
        </Tooltip>
        <Tooltip
          side="bottom"
          sideOffset={16}
          triggerAsChild={true}
          triggerComponent={
            <TabButton
              color={
                isActiveTab(ChatDetailTabsValues.CONTRACTS) ? 'red' : 'default'
              }
              value={ChatDetailTabsValues.CONTRACTS}
            >
              <MdEditNote className="min-h-6 min-w-6 size-6" />
            </TabButton>
          }
        >
          Contratos
        </Tooltip>
        <Tooltip
          side="bottom"
          sideOffset={16}
          triggerAsChild={true}
          triggerComponent={
            <TabButton
              color={
                isActiveTab(ChatDetailTabsValues.INVOICES) ? 'red' : 'default'
              }
              value={ChatDetailTabsValues.INVOICES}
            >
              <MdReceiptLong className="min-h-6 min-w-6 size-6" />
            </TabButton>
          }
        >
          Facturación
        </Tooltip>
        <Tooltip
          side="bottom"
          sideOffset={16}
          triggerAsChild={true}
          triggerComponent={
            <TabButton
              color={
                isActiveTab(ChatDetailTabsValues.TICKETS) ? 'red' : 'default'
              }
              value={ChatDetailTabsValues.TICKETS}
            >
              <MdSell className="min-h-6 min-w-6 size-6" />
            </TabButton>
          }
        >
          Tickets
        </Tooltip>
      </TabsTriggers>
      <TabContent
        className={styles.base__content}
        value={ChatDetailTabsValues.CONTACT}
      >
        <ChatContact title={chatDetailTabsDictionary?.[activeTab]} />
      </TabContent>
      <TabContent
        className={styles.base__content}
        value={ChatDetailTabsValues.CONTRACTS}
      >
        <ChatContracts title={chatDetailTabsDictionary?.[activeTab]} />
      </TabContent>
      <TabContent
        className={styles.base__content}
        value={ChatDetailTabsValues.INVOICES}
      >
        <ChatInvoices title={chatDetailTabsDictionary?.[activeTab]} />
      </TabContent>
      <TabContent
        className={styles.base__content}
        value={ChatDetailTabsValues.TICKETS}
      >
        <ChatTickets title={chatDetailTabsDictionary?.[activeTab]} />
      </TabContent>
    </Tabs>
  );
};
