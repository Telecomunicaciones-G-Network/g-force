import type { ReactChild } from '@/src/packages/gnetwork-ui/types';

export interface SidebarMenuLinkChild {
  id: string | number;
  label: string;
  href: string;
}

export interface SidebarMenuLink {
  id: string | number;
  icon: ReactChild;
  label: string;
  children: SidebarMenuLinkChild[];
}
