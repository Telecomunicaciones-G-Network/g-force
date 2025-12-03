import type { SidebarMenuLink } from '@ui-core/interfaces';

import { MdOutlineChat } from 'react-icons/md';

export const sidebarMenuLinks: SidebarMenuLink[] = [
  {
    id: 1,
    icon: <MdOutlineChat className="min-h-6 min-w-6 size-6" />,
    label: 'Chat',
    children: [
      {
        id: 1,
        label: 'Conversaciones',
        href: '/chat',
      },
      {
        id: 2,
        label: 'Gestión',
        href: '/chat/admin',
      },
    ],
  },
];
