import type { Assignment, ContactPlatform, ConversationStatus } from '../types';

export interface GetContactsRequest {
  assignment?: Assignment;
  cursor?: string;
  limit?: string;
  platform?: ContactPlatform;
  query?: string;
  search?: string;
  status?: ConversationStatus;
}
