import type { ConversationValues } from '../interfaces';

export class Conversation {
  constructor(private values: ConversationValues) {}

  public toValues(): ConversationValues {
    return this.values;
  }
}
