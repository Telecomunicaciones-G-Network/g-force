'use client';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';
import { BackButton } from '@gnetwork-ui/components/organisms/buttons/back-button';
import { ButtonGroup } from '@gnetwork-ui/components/organisms/buttons/button-group';

import { cn } from '@gnetwork-ui/utils/cn.util';
import { formatPhoneNumber } from '@stringify/utils/format-phone-number.util';

import { useChatConversationHeader } from './chat-conversation-header.hook';

import { ChatConversationHeaderButtonIterator } from './iterators/chat-conversation-header-button.iterator';

import styles from './chat-conversation-header.module.css';

export const ChatConversationHeader = () => {
  const { activeContact, goBackChatList, goToChatDetails, isDesktop } =
    useChatConversationHeader();

  return (
    <div className={styles.base}>
      <div className={styles.base__info}>
        <BackButton hide={isDesktop} onClick={goBackChatList} />
        {activeContact?.name && (
          <>
            <button
              className={cn('flex lg:hidden', styles.base__avatar)}
              onClick={isDesktop ? undefined : goToChatDetails}
              style={{
                display: !isDesktop ? 'flex' : 'none',
              }}
              type="button"
            >
              <Avatar
                customBackgroundColor={
                  activeContact?.id && `#${activeContact?.id?.slice(-6)}`
                }
                username={activeContact?.name}
              />
            </button>
            <button
              onClick={isDesktop ? undefined : goToChatDetails}
              type="button"
            >
              <Text
                as="h3"
                className="font-medium text-sm lg:font-medium lg:text-base"
                level="large"
                scheme="label"
              >
                {activeContact?.name}{' '}
              </Text>
            </button>
          </>
        )}
        {activeContact?.phoneNumber && (
          <button
            onClick={isDesktop ? undefined : goToChatDetails}
            type="button"
          >
            <Text
              as="h3"
              className="font-medium text-sm lg:font-medium lg:text-base"
              level="large"
              scheme="label"
            >
              {formatPhoneNumber(activeContact?.phoneNumber)}
            </Text>
          </button>
        )}
      </div>
      <ButtonGroup buttons={ChatConversationHeaderButtonIterator} />
    </div>
  );
};
