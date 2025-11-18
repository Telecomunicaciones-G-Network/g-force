// CHECKED:

import type { Assignment, ContactPlatform, ConversationStatus } from '../types';

export interface GetContactsRequest {
  assignment?: Assignment;
  cursor?: string;
  limit?: string;
  platform?: ContactPlatform;
  search?: string;
  status?: ConversationStatus;
}
