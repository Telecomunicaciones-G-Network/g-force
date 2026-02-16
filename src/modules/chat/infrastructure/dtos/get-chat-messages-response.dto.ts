import type { ApiBaseResponse } from '@module-core/interfaces';
import type { GetChatMessagesResult } from '../interfaces';

export type GetChatMessagesResponseDTO = ApiBaseResponse<
  GetChatMessagesResult[]
>;
