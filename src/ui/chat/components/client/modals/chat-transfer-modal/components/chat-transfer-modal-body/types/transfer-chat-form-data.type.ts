import { z as zod } from 'zod';

import { transferChatFormSchema } from '../schemas/chat-transfer-modal-form.schema';

export type TransferChatFormData = zod.infer<typeof transferChatFormSchema>;
