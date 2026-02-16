import type { Metadata } from 'next';
import type {
  ContactPlatform,
  ConversationStatus,
} from '@module-chat/domain/types';
import type { ChatConversationsPageProps } from './page.props';

import { DEFAULT_LIMIT_PARAM } from '@http-client/constants/default-limit-param.constant';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { validateSearchParams } from '@next-tools/validators/validate-search-params.validator';

import { GetContactsQuery } from '@module-chat/infrastructure/queries/get-contacts.query';

import { CONTACT_PLATFORMS } from '@ui-chat/constants/contact-platforms.constant';
import { CONVERSATION_STATUS } from '@ui-chat/constants/conversation-status.constant';

import { ChatContainer } from '@ui-chat/components/client/templates/chat-container';

import styles from './page.module.css';

/**
 * @function metadata
 *
 * @description This function returns the metadata for the chat conversations page.
 */
export const metadata: Metadata = {
  title: 'Gforce Chat - Conversaciones',
  description: 'Gforce Chat - Conversaciones',
};

/**
 * @function ChatConversationsPage
 *
 * @description This function is the main component for the chat conversations page.
 *
 * @property {Promise<ChatConversationsPageSearchParams>} searchParams - The search params for the chat conversations page.
 */
export default async function ChatConversationsPage({
  searchParams,
}: Readonly<ChatConversationsPageProps>) {
  const { platform: contactPlatformSearchParam, status: statusSearchParam } =
    (await searchParams) ?? {};

  const chatContactsResponsePromise = GetContactsQuery({
    limit: DEFAULT_LIMIT_PARAM,
    platform: validateSearchParams<ContactPlatform>(
      contactPlatformSearchParam,
      CONTACT_PLATFORMS,
    ),
    status: validateSearchParams<ConversationStatus>(
      statusSearchParam,
      CONVERSATION_STATUS,
    ),
  });

  return (
    <div className={cn(styles.base, 'divide-x divide-neutral-200')}>
      <ChatContainer
        chatContactsResponsePromise={chatContactsResponsePromise}
      />
    </div>
  );
}
