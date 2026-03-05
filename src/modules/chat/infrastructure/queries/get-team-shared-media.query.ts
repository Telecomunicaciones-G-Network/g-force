import type {
  GetTeamSharedMediaRequest,
  GetTeamSharedMediaResponse,
} from '../../domain/interfaces';

import { getTeamSharedMediaService } from '../services/get-team-shared-media.service';

/**
 * @name GetTeamSharedMediaQuery
 *
 * @description Fetches the list of shared media files for a given team.
 *
 * @param {GetTeamSharedMediaRequest} request - Team codename and optional filters.
 *
 * @returns {Promise<GetTeamSharedMediaResponse>}
 */
export const GetTeamSharedMediaQuery = async (
  request: GetTeamSharedMediaRequest,
): Promise<GetTeamSharedMediaResponse> =>
  await getTeamSharedMediaService(request);
