import { AgentStatus } from '@module-chat/domain/enums/agent-status.enum';

export interface AgentStatusConfig {
  label: string;
  color: string;
  dotColor: string;
}

export const AGENT_STATUS_CONFIG: Record<AgentStatus, AgentStatusConfig> = {
  [AgentStatus.ONLINE]: {
    label: 'Disponible',
    color: '#22C55E',
    dotColor: '#22C55E',
  },
  [AgentStatus.AWAY]: {
    label: 'Ausente',
    color: '#F59E0B',
    dotColor: '#F59E0B',
  },
  [AgentStatus.BUSY]: {
    label: 'Ocupado',
    color: '#EF4444',
    dotColor: '#EF4444',
  },
  [AgentStatus.OFFLINE]: {
    label: 'Desconectado',
    color: '#9CA3AF',
    dotColor: '#9CA3AF',
  },
};

export const AGENT_STATUS_OPTIONS = [
  AgentStatus.ONLINE,
  AgentStatus.AWAY,
  AgentStatus.BUSY,
  AgentStatus.OFFLINE,
] as const;
