'use client';

import type { ChatCreateTicketModalProps } from './chat-create-ticket-modal.props';

import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { IoClose, IoAttach } from 'react-icons/io5';
import { MdOutlineAccountTree, MdOutlineArticle, MdAppRegistration,MdOutlineCancel } from 'react-icons/md';

import { Alert } from '@gnetwork-ui/components/molecules/alerts/alert';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';
import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { useChatCreateTicketModal } from './chat-create-ticket-modal.hook';

import { ClientSearchDropdown } from './components/client-search-dropdown';
import { ContractCard } from './components/contract-card';

import styles from './chat-create-ticket-modal.module.css';

// Mock data: Departamentos
const DEPARTMENT_OPTIONS = [
  { label: 'Soporte Técnico', value: 'soporte_tecnico' },
  { label: 'Facturación', value: 'facturacion' },
  { label: 'Ventas', value: 'ventas' },
  { label: 'Atención al Cliente', value: 'atencion_cliente' },
];

// Mock data: Asuntos condicionados por departamento
const ISSUES_BY_DEPARTMENT: Record<string, Array<{ label: string; value: string }>> = {
  soporte_tecnico: [
    { label: 'Sin conexión a Internet', value: 'sin_conexion' },
    { label: 'Velocidad lenta', value: 'velocidad_lenta' },
    { label: 'Intermitencia en el servicio', value: 'intermitencia' },
    { label: 'Problema con el router', value: 'problema_router' },
    { label: 'Configuración de red', value: 'config_red' },
  ],
  facturacion: [
    { label: 'Consulta sobre factura', value: 'consulta_factura' },
    { label: 'Error en el monto cobrado', value: 'error_monto' },
    { label: 'Solicitud de factura', value: 'solicitud_factura' },
    { label: 'Métodos de pago', value: 'metodos_pago' },
    { label: 'Reembolso', value: 'reembolso' },
  ],
  ventas: [
    { label: 'Cambio de plan', value: 'cambio_plan' },
    { label: 'Upgrade de velocidad', value: 'upgrade_velocidad' },
    { label: 'Servicios adicionales', value: 'servicios_adicionales' },
    { label: 'Nuevo contrato', value: 'nuevo_contrato' },
    { label: 'Información de planes', value: 'info_planes' },
  ],
  atencion_cliente: [
    { label: 'Información general', value: 'info_general' },
    { label: 'Reclamo', value: 'reclamo' },
    { label: 'Sugerencia', value: 'sugerencia' },
    { label: 'Felicitación', value: 'felicitacion' },
    { label: 'Otro', value: 'otro' },
  ],
};

export const ChatCreateTicketModal = ({
  isOpen,
  onClose,
}: Readonly<ChatCreateTicketModalProps>) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [showValidationError, setShowValidationError] = useState<boolean>(false);
  
  const {
    contracts,
    control,
    errors,
    handleClientSelect,
    handleClose: handleCloseFromHook,
    handleContractSelect,
    isPending,
    isLoadingContracts,
    isSuccess,
    onSubmit,
    selectedClientName,
    selectedContractId,
    setValue,
  } = useChatCreateTicketModal({ onClose });

  // Filtrar asuntos según el departamento seleccionado
  const issueOptions = selectedDepartment 
    ? ISSUES_BY_DEPARTMENT[selectedDepartment] || []
    : [];

  // Ocultar alerta de validación cuando se selecciona cliente o contrato
  useEffect(() => {
    if (selectedClientName || selectedContractId) {
      setShowValidationError(false);
    }
  }, [selectedClientName, selectedContractId]);

  // Limpiar estado local al cerrar modal
  const handleClose = () => {
    setSelectedDepartment('');
    setShowValidationError(false);
    handleCloseFromHook();
  };

  // Validar cliente y contrato antes de enviar
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar que haya cliente y contrato seleccionado
    if (!selectedClientName || !selectedContractId) {
      setShowValidationError(true);
      return;
    }
    
    setShowValidationError(false);
    onSubmit(e);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => !open && handleClose()}
      triggerComponent={<></>}
      hideModalClose
    >
      {!isSuccess && (
        <form onSubmit={handleFormSubmit}>
          <div className={styles.base__header}>
          <div className={styles.base__header_title}>
            <div className={styles.base__icon_wrapper}>
              <MdAppRegistration className="text-red-600" size={20} />
            </div>
            <Text as="h2" level="large" scheme="label" className="font-bold">
              Ticket
            </Text>
          </div>
          <button onClick={handleClose} type="button" className={styles.base__close_button}>
            <IoClose className="size-5 text-neutral-500" />
          </button>
          </div>

          <div className={styles.base__body}>
            <div className={styles.base__search_container}>
              <ClientSearchDropdown
                onClientSelect={handleClientSelect}
                selectedClientName={selectedClientName}
              />
            </div>

            {contracts.length > 0 && (
              <div className={styles.base__contracts_container}>
                <Text as="label" className="text-black" level="small" scheme="label">
                  Selecciona un contrato
                </Text>
                <div className={styles.base__contracts_scroll}>
                  {contracts.map((contract: any) => (
                    <ContractCard
                      key={contract.number}
                      address={contract.address}
                      contractType={contract.contractType || 'Residencial'}
                      isSelected={selectedContractId === contract.number}
                      number={contract.number}
                      onClick={() => handleContractSelect(contract.number)}
                    />
                  ))}
                </div>
              </div>
            )}

            {isLoadingContracts && (
              <div className={styles.base__loading}>
                <Text as="span" level="small" scheme="label">
                  Cargando contratos...
                </Text>
              </div>
            )}
            {/* alerta de validacion  */}
            {showValidationError && (
              <div className="w-full bg-red-50 rounded-xl p-5 flex gap-4 items-start">
                <MdOutlineCancel 
                  className="text-red-700 shrink-0 mt-0.5" 
                  size={24} 
                />
                <div className="flex flex-col gap-2 flex-1">
                  <Text 
                    as="span" 
                    level="medium" 
                    scheme="label" 
                    className="font-bold text-red-700 text-base"
                  >
                    Sin contrato seleccionado.
                  </Text>
                  <div className="flex flex-col gap-1">
                    <Text 
                      as="p" 
                      level="small" 
                      scheme="label" 
                      className="text-red-400 font-medium leading-snug"
                    >
                      Por favor, ingresar el nombre del cliente en el buscador, presionar Enter o dar click en el ícono.
                    </Text>
                    <Text 
                      as="p" 
                      level="small" 
                      scheme="label" 
                      className="text-red-400 font-medium"
                    >
                      Luego deberá seleccionar el contrato del mismo
                    </Text>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.base__row}>
              <Controller
                control={control}
                name="department"
                render={({ field }) => (
                  <SelectInput
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedDepartment(value);
                      // Reset issue field when department changes
                      setValue('issue', '');
                    }}
                    triggerLabel="Departamento"
                    options={DEPARTMENT_OPTIONS}
                    leftIcon={<MdOutlineAccountTree className="text-neutral-500" size={20} />}
                    bordered
                    fullWidth
                  />
                )}
              />
              <Controller
                control={control}
                name="issue"
                render={({ field }) => (
                  <SelectInput
                    value={field.value}
                    onValueChange={field.onChange}
                    triggerLabel="Asunto"
                    options={issueOptions}
                    leftIcon={<MdOutlineArticle className="text-neutral-500" size={20} />}
                    bordered
                    fullWidth
                    disabled={!selectedDepartment}
                  />
                )}
              />
            </div>

            <div className={styles.base__textarea_container}>
              <Text as="label" className="text-black" level="small" scheme="label">
                Descripción del asunto
              </Text>
              <div className={styles.base__textarea_wrapper}>
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
                <button
                  type="button"
                  className={styles.base__attach_button}
                  onClick={() => {
                    // TODO: Implement image upload
                  }}
                >
                  <IoAttach className="size-5" />
                </button>
              </div>
              {errors.description?.message && (
                <Text as="span" className="text-red-500" level="small" scheme="label">
                  {errors.description.message}
                </Text>
              )}
            </div>
          </div>

          <div className={styles.base__footer}>
            <Button
              color="red"
              loading={isPending}
              scheme="default"
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
          <Button color="red" onClick={handleClose} scheme="default">
            Cerrar
          </Button>
        </div>
      )}
    </Modal>
  );
};
