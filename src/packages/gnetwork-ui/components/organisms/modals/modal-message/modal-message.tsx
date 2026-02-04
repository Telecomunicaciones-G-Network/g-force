'use client';

import type { ModalMessageProps } from './modal-message.props';

import { Text } from '../../../atoms/texts/text';
import { Button } from '../../../molecules/buttons/button';
import { Modal } from '../modal';

import { cn } from '../../../../utils/cn.util';

/**
 * @name ModalMessage
 *
 * @description Reusable modal component for displaying messages with customizable icon, text, and action buttons
 *
 * @example
 * ```tsx
 * <ModalMessage
 *   icon={<MdWarning />}
 *   iconBackgroundClass="bg-red-100"
 *   iconColorClass="text-red-600"
 *   title="¿Confirmar acción?"
 *   message="Esta acción no se puede deshacer."
 *   primaryButton={{
 *     label: 'Confirmar',
 *     onClick: handleConfirm,
 *     color: 'red',
 *     loading: isLoading
 *   }}
 *   secondaryButton={{
 *     label: 'Cancelar',
 *     onClick: handleCancel,
 *     color: 'gray',
 *     scheme: 'outline'
 *   }}
 *   triggerComponent={<Button>Abrir Modal</Button>}
 * />
 * ```
 */
export const ModalMessage = ({
  className = '',
  customContent,
  icon,
  iconBackgroundClass = 'bg-blue-100',
  iconColorClass = 'text-blue-600',
  isOpen = false,
  message,
  onOpenChange,
  primaryButton,
  secondaryButton,
  showButtons = true,
  title,
  triggerComponent,
}: Readonly<ModalMessageProps>) => {
  return (
    <Modal
      className={cn('sm:max-w-[420px] overflow-hidden rounded-2xl', className)}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      triggerComponent={triggerComponent}
    >
      <div className="flex flex-col items-center p-6 text-center">
        {/* Icon Header */}
        {icon && (
          <div
            className={cn(
              'flex items-center justify-center h-12 w-12 mx-auto mb-4 rounded-full',
              iconBackgroundClass,
            )}
          >
            <div className={cn('min-h-6 min-w-6 size-6', iconColorClass)}>
              {icon}
            </div>
          </div>
        )}

        {/* Title */}
        <Text
          as="h2"
          className="text-neutral-900 font-semibold"
          level="small"
          scheme="heading"
        >
          {title}
        </Text>

        {/* Message or Custom Content */}
        {customContent ? (
          customContent
        ) : (
          <Text
            as="p"
            className="mb-6 mt-2 text-neutral-500"
            level="small"
            scheme="paragraph"
          >
            {message}
          </Text>
        )}

        {/* Action Buttons */}
        {showButtons && (primaryButton || secondaryButton) && (
          <div
            className={cn(
              'grid w-full gap-3',
              primaryButton && secondaryButton ? 'grid-cols-2' : 'grid-cols-1',
            )}
          >
            {secondaryButton && (
              <Button
                className="border-neutral-300 hover:bg-chromatic-inverted"
                color={secondaryButton.color || 'gray'}
                disabled={secondaryButton.disabled}
                fullWidth
                onClick={secondaryButton.onClick}
                scheme={secondaryButton.scheme || 'outline'}
              >
                {secondaryButton.label}
              </Button>
            )}
            {primaryButton && (
              <Button
                color={primaryButton.color || 'default'}
                disabled={primaryButton.disabled}
                fullWidth
                loading={primaryButton.loading}
                onClick={primaryButton.onClick}
                scheme={primaryButton.scheme || 'default'}
              >
                {primaryButton.loading && primaryButton.loadingLabel
                  ? primaryButton.loadingLabel
                  : primaryButton.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};
