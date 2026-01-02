import type { TeamValues } from '@modules/chat/domain/interfaces';
import type { SelectItem } from '@gnetwork-ui/components/molecules/inputs/select-input';

export const parseTeamsToSelectItem = (
  teams: TeamValues[] = [],
): SelectItem[] => {
  if (!teams || !Array.isArray(teams)) return [];

  return teams?.map((team) => ({
    label: team.name,
    value: team.id,
  }));
};
