'use client';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { useChatDetailsContactCloseConversationButton } from './chat-details-contact-close-conversation-button.hook';

export const ChatDetailsContactCloseConversationButton = () => {
  const { activeContact, disabledSocketActions, isLoading, onClick } =
    useChatDetailsContactCloseConversationButton();

  return (
    <Button
      className="min-h-[48px] hover:bg-chromatic-inverted"
      color="gray"
      disabled={disabledSocketActions}
      fullWidth
      loading={isLoading}
      onClick={() => onClick(activeContact?.id)}
      scheme="outline"
    >
      Cerrar conversación
    </Button>
  );
};
