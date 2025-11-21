// DONE:

import type { ButtonGroupButton } from '@gnetwork-ui/components/organisms/buttons/button-group';

import { MdCall, MdMailOutline, MdMoreVert } from 'react-icons/md';

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
    isStatic: true,
  },
] as const;
