'use client';

import {
  MdAttachFile,
  MdOutlineDescription,
  MdOutlineImage,
} from 'react-icons/md';

import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';
import { FileInput } from '@gnetwork-ui/components/molecules/inputs/file-input';
import { Dropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown';

import { parseMimetypesToFileInputAccept } from '@/src/packages/filer/utils/parse-mimetypes-to-file-input-accept.util';
import { cn } from '@gnetwork-ui/utils/cn.util';

import { IMAGE_MIMETYPES_ALLOWED } from '@module-core/constants/image-mimetypes-allowed.constant';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { useChatConversationFileAttachDropdown } from './chat-conversation-file-attach-dropdown.hook';

import styles from './chat-conversation-file-attach-dropdown.module.css';

export const ChatConversationFileAttachDropdown = () => {
  const {
    attachImageFiles,
    isDropdownOpen,
    isSocketConnected,
    onOpenChange,
    sendMode,
  } = useChatConversationFileAttachDropdown();

  return (
    <Dropdown
      align="start"
      alignOffset={0}
      className="dropdown-shadow-none gap-0 min-w-[171px] -translate-x-3"
      onOpenChange={onOpenChange}
      open={sendMode === ChatSendModes.TEXT ? isDropdownOpen : false}
      side="top"
      sideOffset={16}
      triggerComponent={
        <button
          className={cn(styles.base, 'bg-neutral-100 cursor-pointer size-6')}
          type="button"
        >
          <MdAttachFile className="min-h-4 min-w-4 size-4" />
        </button>
      }
    >
      <DropdownItem onSelect={(e) => e.preventDefault()}>
        <FileInput
          accept={parseMimetypesToFileInputAccept(IMAGE_MIMETYPES_ALLOWED)}
          disabled={!isSocketConnected}
          fullWidth
          onFileSelect={attachImageFiles}
        >
          <MdOutlineImage className="fill-neutral-500 min-h-6 min-w-6 size-6" />
          <span>Fotos</span>
        </FileInput>
      </DropdownItem>
      <DropdownItem onSelect={(e) => e.preventDefault()}>
        <MdOutlineDescription className="fill-neutral-500 min-h-6 min-w-6 size-6" />
        Documentos
      </DropdownItem>
    </Dropdown>
  );
};
