'use client';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import { useChatDetailsContactCloseConversationButton } from './chat-details-contact-close-conversation-button.hook';

export const ChatDetailsContactCloseConversationButton = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const { isLoading, onClick } = useChatDetailsContactCloseConversationButton();

  return (
    <Button
      className="min-h-[48px] hover:bg-chromatic-inverted"
      color="gray"
      disabled={isLoading}
      fullWidth
      loading={isLoading}
      onClick={() => onClick(activeContact?.id)}
      scheme="outline"
    >
      Cerrar conversación
    </Button>
  );
};
