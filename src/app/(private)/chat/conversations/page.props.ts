import type { ServerComponentProps } from '@next-ui/props/server-component.props';

/**
 * @interface ChatConversationsPageSearchParams
 *
 * @description This interface represents the search params for the chat conversations page.
 *
 * @property {string} platform - The platform of the chat conversations page.
 * @property {string} status - The status of the chat conversations page.
 */
export interface ChatConversationsPageSearchParams {
  platform?: string;
  status?: string;
}

/**
 * @interface ChatConversationsPageProps
 *
 * @description This interface represents the props for the chat conversations page.
 *
 * @extends {ServerComponentProps<ChatConversationsPageSearchParams>}
 */
export type ChatConversationsPageProps =
  ServerComponentProps<ChatConversationsPageSearchParams>;
