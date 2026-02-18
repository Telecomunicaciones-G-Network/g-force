import type { Metadata } from 'next';
import type {
  ContactAssignment,
  TeamCodename,
  ContactPlatform,
  ConversationStatus,
} from '@module-chat/domain/types';
import type { ChatConversationsPageProps } from './page.props';

import { DEFAULT_LIMIT_PARAM } from '@http-client/constants/default-limit-param.constant';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { validateSearchParams } from '@next-tools/validators/validate-search-params.validator';

import { ConversationStatus as ConversationStatusValues } from '@module-chat/domain/enums/conversation-status.enum';

import { GetContactsQuery } from '@module-chat/infrastructure/queries/get-contacts.query';

import { CONTACT_ASSIGNMENTS } from '@ui-chat/constants/contact-assignments.constant';
import { CONTACT_PLATFORMS } from '@ui-chat/constants/contact-platforms.constant';
import { CONVERSATION_STATUS_FILTERS } from '@ui-chat/constants/conversation-status-filters.constant';
import { TEAM_CODENAMES } from '@ui-chat/constants/team-codenames.constant';

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
  const {
    assigned_to: assignedToSearchParam,
    platform: contactPlatformSearchParam,
    search: searchSearchParam,
    status: statusSearchParam,
    team_codename: teamCodenameSearchParam,
  } = (await searchParams) ?? {};

  const statusFiltered = validateSearchParams<ConversationStatus | 'ALL'>(
    statusSearchParam,
    CONVERSATION_STATUS_FILTERS,
  );

  const chatContactsResponsePromise = GetContactsQuery({
    assignedTo: validateSearchParams<ContactAssignment>(
      assignedToSearchParam,
      CONTACT_ASSIGNMENTS,
    ),
    limit: DEFAULT_LIMIT_PARAM,
    platform: validateSearchParams<ContactPlatform>(
      contactPlatformSearchParam,
      CONTACT_PLATFORMS,
    ),
    search: searchSearchParam,
    status: !statusFiltered
      ? ConversationStatusValues.ASSIGNED
      : statusFiltered === 'ALL'
        ? undefined
        : statusFiltered,
    teamCodename: validateSearchParams<TeamCodename>(
      teamCodenameSearchParam,
      TEAM_CODENAMES,
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
