'use client';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';

import {
  ChatWhatsappTemplatePreview,
  ChatWhatsappTemplatesModalBody,
  ChatWhatsappTemplatesModalHeader,
} from './components';

import { useChatWhatsappNewChatModal } from './chat-whatsapp-templates-modal.hook';

import styles from './chat-whatsapp-templates-modal.module.css';

interface ChatWhatsappNewChatModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * @name ChatWhatsappNewChatModal
 *
 * @description Step 2 modal: "Nuevo chat de WhatsApp Business API".
 * Layout when a template is selected:
 *   LEFT  → Phone number + Templates list + Valores inputs
 *   RIGHT → WhatsApp preview bubble, centered
 *   FOOTER (full-width) → Cancelar + Enviar plantilla
 */
export const ChatWhatsappNewChatModal = ({
  isOpen,
  onOpenChange,
}: Readonly<ChatWhatsappNewChatModalProps>) => {
  const {
    countrySearch,
    errors,
    filteredCountries,
    isCountryDropdownOpen,
    isError,
    isLoading,
    isSending,
    onClose,
    onCountrySelect,
    onParamChange,
    onPhoneNumberChange,
    onSelectTemplate,
    onSend,
    onTemplateSearchChange,
    paramValues,
    phoneNumber,
    selectedCountry,
    selectedTemplate,
    setCountrySearch,
    setIsCountryDropdownOpen,
    templateParams,
    templateSearch,
    templates,
  } = useChatWhatsappNewChatModal({ isOpen, onOpenChange });

  const hasSelection = selectedTemplate !== null;

  return (
    <Modal
      className={hasSelection ? 'sm:max-w-[820px]' : 'sm:max-w-[500px]'}
      isOpen={isOpen}
      onOpenChange={onClose}
      triggerComponent={<span aria-hidden style={{ display: 'none' }} />}
    >
      <div className={styles.modal_root}>
        <ChatWhatsappTemplatesModalHeader />

        <div className={styles.content_row}>
          <div
            className={
              hasSelection ? styles.left_panel_narrow : styles.left_panel_full
            }
          >
            <ChatWhatsappTemplatesModalBody
              countrySearch={countrySearch}
              errors={errors}
              filteredCountries={filteredCountries}
              isCountryDropdownOpen={isCountryDropdownOpen}
              isError={isError}
              isLoading={isLoading}
              onCountrySelect={onCountrySelect}
              onParamChange={onParamChange}
              onPhoneNumberChange={onPhoneNumberChange}
              onSelectTemplate={onSelectTemplate}
              onTemplateSearchChange={onTemplateSearchChange}
              paramValues={paramValues}
              phoneNumber={phoneNumber}
              selectedCountry={selectedCountry}
              selectedTemplate={selectedTemplate}
              setCountrySearch={setCountrySearch}
              setIsCountryDropdownOpen={setIsCountryDropdownOpen}
              templateParams={templateParams}
              templateSearch={templateSearch}
              templates={templates}
            />
          </div>

          {hasSelection && (
            <div className={styles.right_panel}>
              <ChatWhatsappTemplatePreview
                paramValues={paramValues}
                selectedTemplate={selectedTemplate}
              />
            </div>
          )}
        </div>

        {hasSelection && (
          <div className={styles.footer}>
            <Button disabled={isSending} onClick={onClose} type="button">
              Cancelar
            </Button>
            <Button
              color="red"
              disabled={isSending}
              onClick={onSend}
              type="button"
            >
              {isSending ? 'Enviando…' : 'Enviar plantilla'}
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};
