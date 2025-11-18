// CHECKED:

import type { MessageDirection, MessageStatus, MessageType } from '../types';
import type { CustomerValues } from './customer-values.interface';

export type MessageValues = {
  id: string;
  status: MessageStatus;
  type: MessageType;
  message: string;
  direction: MessageDirection;
  customer: CustomerValues;
  createdAt: Date;
};
