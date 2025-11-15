import type { ConversationStatus } from '../types';

import { Agent } from './Agent.entity';
import { Team } from './Team.entity';

export class Conversation {
  id: string;

  agent: Agent;

  status: ConversationStatus;

  team: Team;
}
