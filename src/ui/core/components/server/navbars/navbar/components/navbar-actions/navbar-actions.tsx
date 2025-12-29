'use client';

import type { NavbarActionsProps } from './navbar-actions.props';

import {
  MdKeyboardArrowDown,
  MdLogout,
  MdNotificationsNone,
  MdOutlineDesktopWindows,
} from 'react-icons/md';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';
import { DropdownSeparator } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-separator';
import { Switch } from '@gnetwork-ui/components/molecules/switches/switch/switch';
import { Dropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown';

import { usernameToInitials } from '@stringify/utils/username-to-initials.util';

import { useNavbarActions } from './navbar-actions.hook';

import styles from './navbar-actions.module.css';

export const NavbarActions = ({
  hideNotificationsButton = false,
  hideUserActions = false,
  userFirstName = '',
  userFullName = '',
}: NavbarActionsProps) => {
  const { changeThemeMode, isDarkMode, isMounted, logout } = useNavbarActions();

  return (
    <div className={styles.base}>
      {!hideNotificationsButton && (
        <MdNotificationsNone className="cursor-pointer min-h-6 min-w-6 size-6" />
      )}
      {!isMounted && <Skeleton className="h-[28px] w-[140px]" />}
      {isMounted && userFullName && !hideUserActions && (
        <Dropdown
          align="start"
          alignOffset={-82}
          className="gap-[10px] min-w-[237px]"
          triggerComponent={
            <Button
              className="gap-2 justify-between min-w-[154px] px-1.5 py-1.5 shadow-2xs"
              isStatic
            >
              <div className="flex gap-2 items-center">
                {userFullName && (
                  <div className="relative h-[28px] w-[28px]">
                    <Avatar username={usernameToInitials(userFullName)} />
                  </div>
                )}
                <Text as="span" level="small" scheme="paragraph">
                  {userFirstName || ''}
                </Text>
              </div>
              <MdKeyboardArrowDown className="size-6" />
            </Button>
          }
          side="bottom"
          sideOffset={8}
        >
          <div className="flex gap-2 items-center min-h-8 p-0 focus:bg-transparent">
            <MdOutlineDesktopWindows className="fill-neutral-800 min-h-6 min-w-6 size-6" />
            <Text
              as="span"
              className="text-neutral-800"
              level="small"
              scheme="paragraph"
            >
              Tema
            </Text>
            <Switch
              className="ml-auto"
              id="theme-mode"
              checked={isDarkMode}
              onCheckedChange={changeThemeMode}
            />
          </div>
          <DropdownSeparator />
          <DropdownItem
            className="gap-2 min-h-8 p-0 focus:bg-transparent"
            onClick={logout}
          >
            <MdLogout className="fill-neutral-800 min-h-6 min-w-6 size-6" />
            <Text
              as="span"
              className="text-neutral-800"
              level="small"
              scheme="paragraph"
            >
              Salir
            </Text>
          </DropdownItem>
        </Dropdown>
      )}
    </div>
  );
};
