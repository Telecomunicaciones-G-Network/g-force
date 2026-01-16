'use client';

import type { ChatCreateTicketModalProps } from './chat-create-ticket-modal.props';

import { Controller } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { FloatingCardModal } from '@gnetwork-ui/components/organisms/modals/floating-card-modal';
import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { useChatCreateTicketModal } from './chat-create-ticket-modal.hook';

import styles from './chat-create-ticket-modal.module.css';

const DEPARTMENT_OPTIONS = [
  { label: 'Soporte Técnico', value: 'soporte_tecnico' },
  { label: 'Facturación', value: 'facturacion' },
  { label: 'Ventas', value: 'ventas' },
  { label: 'Atención al Cliente', value: 'atencion_cliente' },
];

const ISSUE_OPTIONS = [
  { label: 'Problema de conexión', value: 'problema_conexion' },
  { label: 'Consulta sobre facturación', value: 'consulta_facturacion' },
  { label: 'Cambio de plan', value: 'cambio_plan' },
  { label: 'Otro', value: 'otro' },
];

export const ChatCreateTicketModal = ({
  isOpen,
  onClose,
}: Readonly<ChatCreateTicketModalProps>) => {
  const { control, errors, handleClose, isPending, isSuccess, onSubmit } =
    useChatCreateTicketModal({ onClose });

  if (!isOpen) return null;

  return (
    <FloatingCardModal>
      {!isSuccess && (
        <form onSubmit={onSubmit}>
          <div className={styles.base__header}>
            <div className={styles.base__header_title}>
              <Icon name="ticket" size={24} />
              <Text as="h4" level="medium" scheme="label">
                Ticket
              </Text>
            </div>
            <button
              className="text-neutral-400 hover:text-chromatic transition-colors"
              onClick={handleClose}
              type="button"
            >
              <IoClose className="size-6" />
            </button>
          </div>

          <div className={styles.base__body}>
            <div className={styles.base__row}>
              <Controller
                control={control}
                name="department"
                render={({ field }) => (
                  <SelectInput
                    error={errors.department?.message}
                    label="Departamento"
                    onValueChange={field.onChange}
                    options={DEPARTMENT_OPTIONS}
                    placeholder="Seleccionar"
                    value={field.value}
                  />
                )}
              />
              <Controller
                control={control}
                name="issue"
                render={({ field }) => (
                  <SelectInput
                    error={errors.issue?.message}
                    label="Asunto"
                    onValueChange={field.onChange}
                    options={ISSUE_OPTIONS}
                    placeholder="Seleccionar"
                    value={field.value}
                  />
                )}
              />
            </div>

            <div className={styles.base__textarea_container}>
              <Text as="label" className="text-neutral-400" level="small" scheme="label">
                Descripción del asunto
              </Text>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <textarea
                    className={styles.base__textarea}
                    onChange={field.onChange}
                    placeholder="Escribe comentarios aquí..."
                    rows={4}
                    value={field.value}
                  />
                )}
              />
              {errors.description?.message && (
                <Text as="span" className="text-red-500" level="small" scheme="label">
                  {errors.description.message}
                </Text>
              )}
            </div>
          </div>

          <div className={styles.base__footer}>
            <Button
              color="primary"
              loading={isPending}
              scheme="solid"
              type="submit"
            >
              Crear Ticket
            </Button>
          </div>
        </form>
      )}

      {isSuccess && (
        <div className={styles.base__success}>
          <Icon name="check_circle" size={64} />
          <Text as="h4" className="text-chromatic-inverted" level="medium" scheme="label">
            ¡Ticket creado exitosamente!
          </Text>
          <Text as="p" className="text-neutral-400 text-center" level="small" scheme="label">
            Tu ticket ha sido registrado y será atendido a la brevedad.
          </Text>
          <Button color="primary" onClick={handleClose} scheme="solid">
            Cerrar
          </Button>
        </div>
      )}
    </FloatingCardModal>
  );
};
