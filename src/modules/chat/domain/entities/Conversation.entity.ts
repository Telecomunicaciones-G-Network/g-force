import type { Agent, ConversationValues, Team } from '../interfaces';
import type { ConversationStatus } from '../types';

export class Conversation {
  constructor(
    public id: string,
    public agent: Agent | null = null,
    public status: ConversationStatus,
    public team: Team | null = null,
  ) {}

  public toValues(): ConversationValues {
    return {
      id: this.id,
      agent: this.agent,
      status: this.status,
      team: this.team,
    };
  }
}
