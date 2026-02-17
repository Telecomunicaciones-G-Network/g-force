import type { ServerComponentProps } from '@next-ui/props/server-component.props';

/**
 * @interface ChatConversationsPageSearchParams
 *
 * @description This interface represents the search params for the chat conversations page.
 *
 * @property {string} assigned_to - The assigned to of the chat conversations page.
 * @property {string} platform - The platform of the chat conversations page.
 * @property {string} search - The search of the chat conversations page.
 * @property {string} status - The status of the chat conversations page.
 * @property {string} team_codename - The team codename of the chat conversations page.
 */
export interface ChatConversationsPageSearchParams {
  assigned_to?: string;
  platform?: string;
  search?: string;
  status?: string;
  team_codename?: string;
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
