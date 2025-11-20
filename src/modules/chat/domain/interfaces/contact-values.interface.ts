// DONE:

import type { MessageValues } from './message-values.interface';

export interface ContactValues {
  id: string;
  name: string;
  latestMessage: MessageValues;
}
