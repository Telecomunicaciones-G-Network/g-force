import type { ButtonGroupButton } from '@gnetwork-ui/components/organisms/buttons/button-group';

import {
  MdCall,
  MdCompareArrows,
  MdMailOutline,
  MdMoreVert,
} from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';

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
        <DropdownItem onClick={() => console.log('transferir chat')}>
          <MdCompareArrows className="fill-neutral-800 min-h-6 min-w-6 size-6" />
          <Text
            as="span"
            className="text-neutral-600"
            level="small"
            scheme="label"
          >
            Transferir chat
          </Text>
        </DropdownItem>
      ),
      className: 'gap-0 min-w-[257px]',
      side: 'bottom',
      sideOffset: 8,
    },
    isDropdown: true,
    isStatic: true,
  },
] as const;
