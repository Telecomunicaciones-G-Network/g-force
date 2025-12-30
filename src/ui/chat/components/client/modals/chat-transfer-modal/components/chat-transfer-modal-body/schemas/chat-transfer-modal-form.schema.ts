import { z as zod } from 'zod';

export const transferChatFormSchema = zod.object({
  team: zod.string().min(1, 'Debe seleccionar un equipo'),
  agent: zod.string(),
});
