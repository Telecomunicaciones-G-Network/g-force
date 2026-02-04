'use client';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { cn } from '@gnetwork-ui/utils/cn.util';

interface ChatCloseConversationModalContentProps {
  /**
   * Modal title
   */
  title: string;

  /**
   * Modal description/message
   */
  description: string;

  /**
   * Whether the primary action is loading
   */
  isLoading: boolean;

  /**
   * Whether actions are disabled (e.g., socket disconnected)
   */
  disabledActions: boolean;

  /**
   * Callback for cancel action
   */
  onCancel: () => void;

  /**
   * Callback for confirm action
   */
  onConfirm: () => void;

  /**
   * Label for cancel button
   */
  cancelLabel?: string;

  /**
   * Label for confirm button
   */
  confirmLabel?: string;

  /**
   * Label for confirm button when loading
   */
  confirmLoadingLabel?: string;

  /**
   * Additional className for the footer
   */
  footerClassName?: string;
}

/**
 * @name ChatCloseConversationModalContent
 *
 * @description Content component for the chat close conversation modal
 * Displays title, description, and action buttons
 */
export const ChatCloseConversationModalContent = ({
  cancelLabel = 'Cancelar',
  confirmLabel = 'Finalizar',
  confirmLoadingLabel = 'Finalizando...',
  description,
  disabledActions,
  footerClassName = 'grid-cols-2 gap-3',
  isLoading,
  onCancel,
  onConfirm,
  title,
}: Readonly<ChatCloseConversationModalContentProps>) => {
  return (
    <>
      {/* Title and Description */}
      <Text
        as="h2"
        className="text-neutral-900 font-semibold"
        level="small"
        scheme="heading"
      >
        {title}
      </Text>
      <Text
        as="p"
        className="mb-6 mt-2 text-neutral-500"
        level="small"
        scheme="paragraph"
      >
        {description}
      </Text>

      {/* Action Buttons */}
      <div className={cn('grid w-full', footerClassName)}>
        <Button
          className="border-neutral-300 hover:bg-chromatic-inverted"
          color="gray"
          disabled={isLoading}
          fullWidth
          onClick={onCancel}
          scheme="outline"
        >
          {cancelLabel}
        </Button>
        <Button
          color="red"
          disabled={disabledActions}
          fullWidth
          loading={isLoading}
          onClick={onConfirm}
        >
          {isLoading ? confirmLoadingLabel : confirmLabel}
        </Button>
      </div>
    </>
  );
};
