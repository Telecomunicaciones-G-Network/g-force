import { z as zod } from 'zod';

export const chatConversationFormSchema = zod.object({
  text: zod.string().trim().min(1, 'El minimo de caracteres permitidos es 1'),
});
