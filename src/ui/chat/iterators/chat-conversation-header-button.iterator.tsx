import type { ButtonGroupButton } from '@gnetwork-ui/components/organisms/buttons/button-group';

import { MdCall, MdMailOutline, MdMoreVert } from 'react-icons/md';

import { ChatAutoAssignConversationModal } from '@ui-chat/components/client/modals/chat-auto-assign-conversation-modal';
import { ChatCloseConversationModal } from '@ui-chat/components/client/modals/chat-close-conversation-modal';
import { ChatTransferConversationModal } from '@ui-chat/components/client/modals/chat-transfer-conversation-modal';

/**
 * @name ChatConversationHeaderButtonIterator
 *
 * @description Chat conversation header button iterator
 *
 * @returns {ButtonGroupButton[]} The chat conversation header button iterator
 */
export const ChatConversationHeaderButtonIterator: ButtonGroupButton[] = [
  {
    id: 'call',
    className: 'px-2',
    children: <MdCall className="min-h-6 min-w-6 size-6" />,
    isActive: false,
    isStatic: true,
  },
  {
    id: 'email',
    className: 'px-2',
    children: <MdMailOutline className="min-h-6 min-w-6 size-6" />,
    isActive: false,
    isStatic: true,
  },
  {
    id: 'more',
    className: 'px-2',
    children: <MdMoreVert className="min-h-6 min-w-6 size-6" />,
    dropdownProps: {
      align: 'start',
      alignOffset: -214,
      children: (
        <>
          <ChatAutoAssignConversationModal />
          <ChatTransferConversationModal />
          <ChatCloseConversationModal />
        </>
      ),
      className: 'gap-0 min-w-[257px]',
      side: 'bottom',
      sideOffset: 8,
    },
    isDropdown: true,
    isStatic: true,
  },
] as const;
