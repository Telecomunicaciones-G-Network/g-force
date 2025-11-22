import type {
  AgentValues,
  ConversationValues,
  TeamValues,
} from '../interfaces';
import type { ConversationStatus } from '../types';

export class Conversation {
  private id: string;
  private agent: AgentValues;
  private status: ConversationStatus;
  private team: TeamValues | null;

  constructor(
    id: string,
    agent: AgentValues,
    status: ConversationStatus,
    team: TeamValues | null = null,
  ) {
    this.id = id;
    this.agent = agent;
    this.status = status;
    this.team = team;
  }

  public toValues(): ConversationValues {
    return {
      id: this.id,
      agent: this.agent,
      status: this.status,
      team: this.team,
    };
  }
}
