import type { AgentValues } from '@module-chat/domain/interfaces';

import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';

export const parseAgentsToSelectItem = (agents: AgentValues[]) => {
  if (!agents || !Array.isArray(agents)) return [];

  return agents?.map((agent) => ({
    leftIcon: (
      <Avatar
        className="max-h-6 max-w-6 size-6"
        customBackgroundColor={agent?.id && `#${agent?.id?.slice(-6)}`}
        username={agent?.name}
        usernameClassName="text-[10px]"
      />
    ),
    label: agent.name,
    value: agent.id,
  }));
};
