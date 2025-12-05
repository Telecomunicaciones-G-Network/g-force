import type {
  AgentValues,
  ConversationValues,
  TeamValues,
} from '../interfaces';
import type { ConversationStatus } from '../types';

export class Conversation {
  constructor(
    public id: string,
    public agent: AgentValues,
    public status: ConversationStatus,
    public team: TeamValues | null = null,
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
