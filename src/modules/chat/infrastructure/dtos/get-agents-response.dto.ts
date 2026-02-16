import type { ApiGsoftResponse } from '@module-core/interfaces';
import type { AgentStatus, TeamCodename } from '../../domain/types';

/**
 * @name GetAgentsResultTeamsDTO
 *
 * @description This interface represents the teams of an agent.
 *
 * @property {boolean} can_transfer_other_chats - Whether the agent can transfer other chats.
 * @property {boolean} do_not_assign_chats - Whether the agent can do not assign chats.
 * @property {string} joined_at - The date and time the agent joined the team.
 * @property {TeamCodename} team_codename - The codename of the team.
 * @property {string} team_name - The name of the team.
 * @property {string | null} updated_at - The date and time the team was updated.
 */
export interface GetAgentsResultTeamsDTO {
  can_transfer_other_chats: boolean;
  do_not_assign_chats: boolean;
  joined_at: string;
  team_codename: TeamCodename;
  team_name: string;
  updated_at: string | null;
}

/**
 * @name GetAgentsResultDTO
 *
 * @description This interface represents the result of an agent.
 *
 * @property {string} id - The id of the agent.
 * @property {string} created_at - The date and time the agent was created.
 * @property {string} email - The email of the agent.
 * @property {string} full_name - The full name of the agent.
 * @property {boolean} is_bot - Whether the agent is a bot.
 * @property {AgentStatus} status - The status of the agent.
 * @property {GetAgentsResultTeamsDTO[]} teams - The teams of the agent.
 * @property {string | null} updated_at - The date and time the agent was updated.
 * @property {string} user_id - The id of the user.
 */
export interface GetAgentsResultDTO {
  id: string;
  created_at: string;
  email: string;
  full_name: string;
  is_bot: boolean;
  status: AgentStatus;
  teams: GetAgentsResultTeamsDTO[];
  updated_at: string | null;
  user_id: string;
}

/**
 * @name GetAgentsResponseDTO
 *
 * @description This interface represents the response from the get agents API.
 *
 * @property {GetAgentsResultDTO[]} results - The results of the agents.
 * @property {number} status - The status code.
 * @property {boolean} success - Whether the request was successful.
 */
export type GetAgentsResponseDTO = ApiGsoftResponse<GetAgentsResultDTO[]>;
