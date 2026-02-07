import type { NavbarProps } from '../../navbar.props';

export interface NavbarActionsProps
  extends Pick<NavbarProps, 'hideNotificationsButton' | 'hideUserActions'> {
  userFirstName?: string;
  userFullName?: string;
}
