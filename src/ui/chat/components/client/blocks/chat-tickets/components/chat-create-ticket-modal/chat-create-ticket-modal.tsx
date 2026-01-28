'use client';

import type { ChatCreateTicketModalProps } from './chat-create-ticket-modal.props';

import { useState, useEffect, useRef } from 'react';
import { Controller } from 'react-hook-form';
import { IoClose, IoAttach, IoCloseCircle } from 'react-icons/io5';
import { MdCheckCircle, MdSearch } from 'react-icons/md';
import {
  MdOutlineAccountTree,
  MdOutlineArticle,
  MdAppRegistration,
  MdOutlineCancel,
} from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';
import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { useChatCreateTicketModal } from './chat-create-ticket-modal.hook';

import { ClientSearchDropdown } from './components/client-search-dropdown';
import { ContractsCarousel } from './components/contract-card/contracts-carousel';

import styles from './chat-create-ticket-modal.module.css';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';
export const ChatCreateTicketModal = ({
  isOpen,
  onClose,
}: Readonly<ChatCreateTicketModalProps>) => {
  const [showValidationError, setShowValidationError] =
    useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    contracts,
    control,
    departments,
    errors,
    handleClientSelect,
    handleClose: handleCloseFromHook,
    handleContractSelect,
    handleDepartmentChange,
    handleImageSelect,
    handleRemoveImage,
    handleToggleSearchMode,
    isPending,
    isLoadingContactData,
    isLoadingDepartments,
    isLoadingIssues,
    isSearchMode,
    isSuccess,
    issues,
    onSubmit,
    selectedClientName,
    selectedContractId,
    selectedDepartment,
    selectedImages,
  } = useChatCreateTicketModal({ onClose, isOpen });

  // Ocultar alerta de validación cuando se selecciona cliente o contrato
  useEffect(() => {
    if (selectedClientName || selectedContractId) {
      setShowValidationError(false);
    }
  }, [selectedClientName, selectedContractId]);

  // Limpiar estado local al cerrar modal
  const handleClose = () => {
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
      triggerComponent={<div />}
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
            <button
              onClick={handleClose}
              type="button"
              className={styles.base__close_button}
            >
              <IoClose className="size-5 text-neutral-500" />
            </button>
          </div>

          <div className={styles.base__body}>
            {/* Mostrar información del cliente del chat o búsqueda alternativa */}
            {!isSearchMode && selectedClientName && (
              <div className={styles.base__client_info}>
                <div className="flex-1">
                  <Text
                    as="span"
                    level="small"
                    scheme="label"
                    className="text-neutral-500 block mb-1"
                  >
                    Cliente del chat
                  </Text>
                  <Text
                    as="span"
                    level="medium"
                    scheme="label"
                    className="font-bold text-black"
                  >
                    {selectedClientName}
                  </Text>
                </div>
                <div className="flex items-center gap-2">
                  <Tooltip
                    side="bottom"
                    triggerAsChild
                    triggerComponent={
                      <button
                        type="button"
                        onClick={handleToggleSearchMode}
                        className="flex items-center gap-2 px-2 py-1 bg-white border border-neutral-300 rounded-lg transition-colors hover:bg-neutral-100"
                      >
                        <MdSearch
                          size={18}
                          className="text-neutral-600 cursor-pointer"
                        />
                      </button>
                    }
                  >
                    {/* Aquí va el contenido del Tooltip */}
                    <Text
                      as="span"
                      level="small"
                      scheme="label"
                      className="text-white"
                    >
                      Buscar cliente
                    </Text>
                  </Tooltip>
                </div>
              </div>
            )}

            {/* Modo búsqueda alternativa */}
            {isSearchMode && (
              <div className="w-full space-y-3">
                <div className="flex items-center justify-between">
                  <Text
                    as="span"
                    level="small"
                    scheme="label"
                    className="text-neutral-600"
                  >
                    Buscando cliente alternativo
                  </Text>
                  <button
                    type="button"
                    onClick={handleToggleSearchMode}
                    className="text-sm text-primary-500 hover:text-primary-600 font-medium cursor-pointer border border-neutral-300 rounded-lg px-2 py-1 hover:bg-neutral-100"
                  >
                    Cancelar búsqueda
                  </button>
                </div>
                <div className={styles.base__search_container}>
                  <ClientSearchDropdown
                    onClientSelect={handleClientSelect}
                    selectedClientName={selectedClientName}
                  />
                </div>
              </div>
            )}

            {/* Loading state */}
            {isLoadingContactData && (
              <div className="w-full bg-neutral-50 rounded-xl p-4 flex items-center justify-center gap-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-500" />
                <Text
                  as="span"
                  level="small"
                  scheme="label"
                  className="text-neutral-600"
                >
                  Cargando datos del cliente...
                </Text>
              </div>
            )}

            {contracts.length > 0 && (
              <div className={styles.base__contracts_container}>
                <Text
                  as="label"
                  className="text-neutral"
                  level="small"
                  scheme="label"
                >
                  Selecciona un contrato
                </Text>
                <ContractsCarousel
                  contracts={contracts}
                  selectedContractId={selectedContractId}
                  onContractSelect={handleContractSelect}
                />
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
                  <Text
                    as="p"
                    level="small"
                    scheme="label"
                    className="text-red-400 font-medium leading-snug"
                  >
                    Por favor, seleccione un contrato de la lista para continuar
                    con la creación del ticket.
                  </Text>
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
                      handleDepartmentChange(value);
                    }}
                    triggerLabel="Departamento"
                    options={departments}
                    leftIcon={
                      <MdOutlineAccountTree
                        className="text-neutral-500"
                        size={20}
                      />
                    }
                    bordered
                    fullWidth
                    disabled={isLoadingDepartments}
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
                    options={issues}
                    leftIcon={
                      <MdOutlineArticle
                        className="text-neutral-500"
                        size={20}
                      />
                    }
                    bordered
                    fullWidth
                    disabled={!selectedDepartment || isLoadingIssues}
                  />
                )}
              />
            </div>

            <div className={styles.base__textarea_container}>
              <Text
                as="label"
                className="text-neutral"
                level="small"
                scheme="label"
              >
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
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    handleImageSelect(e.target.files);
                    e.target.value = '';
                  }}
                />
                <button
                  type="button"
                  className={styles.base__attach_button}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <IoAttach className="size-6" />
                </button>
              </div>
              {errors.description?.message && (
                <Text
                  as="span"
                  className="text-red-500"
                  level="small"
                  scheme="label"
                >
                  {errors.description.message}
                </Text>
              )}

              {selectedImages.length > 0 && (
                <div className={styles.base__images_preview}>
                  {selectedImages.map((image, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <fix this>
                    <div key={index} className={styles.base__image_item}>
                      {/** biome-ignore lint/performance/noImgElement: <fix this> */}
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index + 1}`}
                        className={styles.base__image_thumbnail}
                      />
                      <button
                        type="button"
                        className={styles.base__image_remove}
                        onClick={() => handleRemoveImage(index)}
                      >
                        <IoCloseCircle size={20} />
                      </button>
                      <Text
                        as="span"
                        level="small"
                        scheme="label"
                        className={styles.base__image_name}
                      >
                        {image.name}
                      </Text>
                    </div>
                  ))}
                </div>
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
          <MdCheckCircle className="text-success-300" size={64} />
          <Text
            as="h4"
            className="text-chromatic-inverted"
            level="medium"
            scheme="label"
          >
            ¡Ticket creado exitosamente!
          </Text>
          <Text
            as="p"
            className="text-neutral-400 text-center"
            level="small"
            scheme="label"
          >
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
