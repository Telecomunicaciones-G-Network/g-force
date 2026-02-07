import { z as zod } from 'zod';

import { transferChatConversationFormSchema } from '../schemas/chat-transfer-conversation-modal-form.schema';

export type ChatTransferConversationFormData = zod.infer<
  typeof transferChatConversationFormSchema
>;
