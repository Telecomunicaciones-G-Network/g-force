import type {
  GetAgentsRequest,
  GetAgentsResponse,
  GetAgentsResponseAgent,
  GetAgentsResponseTeam,
} from '../../domain/interfaces';
import type {
  GetAgentsRequestDTO,
  GetAgentsResponseDTO,
  GetAgentsResultDTO,
  GetAgentsResultTeamsDTO,
} from '../dtos';

/**
 * @name GetAgentsMapper
 *
 * @description This mapper converts the get agents request domain to the get agents request DTO.
 */
export class GetAgentsMapper {
  /**
   * @name mapFrom
   *
   * @description Maps a GetAgentsResponseDTO object to a GetAgentsResponse domain object.
   *
   * @param {GetAgentsResponseDTO} input - The response DTO containing agents from the API.
   *
   * @returns {GetAgentsResponse} - The mapped domain response containing agents.
   */
  public static mapFrom(input: GetAgentsResponseDTO): GetAgentsResponse {
    return {
      agents: input?.results?.map(GetAgentsMapper.mapFromAgentArray) ?? [],
      count: input?.count,
      next: input?.next,
      previous: input?.previous,
      status: input?.status,
      success: input?.success,
    };
  }

  /**
   * @name mapFromAgentArray
   *
   * @description Maps a GetAgentsResultDTO object to a GetAgentsResponseAgent domain object.
   *
   * @param {GetAgentsResultDTO} input - The DTO representing an agent as received from the API.
   *
   * @returns {GetAgentsResponseAgent} The agent object in domain format.
   */
  public static mapFromAgentArray(
    input: GetAgentsResultDTO,
  ): GetAgentsResponseAgent {
    return {
      id: input?.id,
      email: input?.email,
      isBot: input?.is_bot,
      name: input?.full_name,
      status: input?.status,
      teams: input?.teams?.map(GetAgentsMapper.mapFromTeamArray) ?? [],
    };
  }

  /**
   * @name mapFromTeamArray
   *
   * @description Converts a GetAgentsResultTeamsDTO object to a GetAgentsResponseTeam domain object.
   *
   * @param {GetAgentsResultTeamsDTO} input - The DTO representing a team as received from the API.
   *
   * @returns {GetAgentsResponseTeam} The team object in domain format.
   */
  public static mapFromTeamArray(
    input: GetAgentsResultTeamsDTO,
  ): GetAgentsResponseTeam {
    return {
      id: input?.team_codename,
      name: input?.team_name,
    };
  }

  /**
   * @name mapTo
   *
   * @description Converts a GetAgentsRequest domain object to a GetAgentsRequestDTO for transmission.
   *
   * @param {GetAgentsRequest} output - The domain request to convert.
   *
   * @returns {GetAgentsRequestDTO} - The resulting DTO object for the API.
   */
  public static mapTo(output: GetAgentsRequest): GetAgentsRequestDTO {
    return {
      is_bot: output?.isBot?.toString() ?? undefined,
      page: output?.page,
      page_size: output?.limit,
      search: output?.search,
      status: output?.status,
      team_codename: output?.teamCodename,
    };
  }
}
