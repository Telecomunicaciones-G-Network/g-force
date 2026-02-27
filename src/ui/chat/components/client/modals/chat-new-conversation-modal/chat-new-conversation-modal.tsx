'use client';

import {
  MdAdd,
  MdChevronRight,
  MdOutlineWhatsapp,
  MdOutlineMessage,
} from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { cn } from '@gnetwork-ui/utils/cn.util';


import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { IconBadge } from '@gnetwork-ui/components/molecules/badges/icon-badge';
// import { SearchInput } from '@gnetwork-ui/components/molecules/inputs/search-input';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';

import { ChatWhatsappNewChatModal } from '@/src/ui/chat/components/client/modals/chat-new-conversation-modal/chat-whatsapp-templates-modal';

import { useChatNewConversationModal } from './chat-new-conversation-modal.hook';

import styles from './chat-new-conversation-modal.module.css';

/**
 * @name ChatNewConversationModal
 *
 * @description Step 1: Platform selector — lets agents choose where to start the new chat.
 * Currently only "WhatsApp Business API" is available.
 */
export const ChatNewConversationModal = () => {
  const {
    isModalOpen,
    isWhatsappModalOpen,
    onOpenChange,
    // onSearchChange,
    onSelectWhatsappPlatform,
    onWhatsappModalOpenChange,
    // searchValue,
  } = useChatNewConversationModal();

  return (
    <>
      {/* Step 2: WhatsApp new chat modal — controlled externally */}
      <ChatWhatsappNewChatModal
        isOpen={isWhatsappModalOpen}
        onOpenChange={onWhatsappModalOpenChange}
      />

      {/* Step 1: Platform selector */}
      <Modal
        className="sm:max-w-[480px]"
        isOpen={isModalOpen}
        onOpenChange={onOpenChange}
        triggerComponent={
          <Button
            className="bg-chromatic-inverted"
            isStatic
            size="icon"
          >
            <MdAdd
              className={cn(
                'min-h-6 min-w-6 size-6 text-white',
                isModalOpen && 'fill-chromatic',
              )}
            />
          </Button>
        }
      >
        <div className="divide-y divide-neutral-200">
          <div className={styles.base}>
            <IconBadge
              icon={
                <MdOutlineMessage className="fill-red-700 min-h-6 min-w-6 size-6" />
              }
            />
            <div className={styles.base__content}>
              <Text
                className="text-chromatic-inverted"
                level="xsmall"
                scheme="heading"
              >
                Iniciar nuevo chat
              </Text>
            </div>
          </div>

          <div className={styles.body}>
            {/* <Text className="text-neutral-600" level="small" scheme="label">
              Selecciona una Plataforma
            </Text>

            <SearchInput
              className="bg-chromatic gap-2"
              fullWidth
              id="platform_search"
              name="platform-search"
              onChange={onSearchChange}
              placeholder="Buscar..."
              value={searchValue}
            /> */}

            <button
              className={styles.platform_item}
              id="platform_whatsapp_business_api"
              onClick={onSelectWhatsappPlatform}
              type="button"
            >
              <div className={styles.platform_item__left}>
                <MdOutlineWhatsapp className="size-6 text-[#25D366]" />
                <Text
                  className="text-chromatic-inverted"
                  level="small"
                  scheme="label"
                >
                  WhatsApp Business API
                </Text>
              </div>
              <MdChevronRight className="fill-neutral-400 size-5 shrink-0" />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
