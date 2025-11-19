// PENDING:

import type { NavbarProps } from './navbar.props';

import { plainToClass } from 'class-transformer';

import { MdKeyboardArrowDown, MdNotificationsNone } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { SearchInput } from '@gnetwork-ui/components/molecules/inputs/search-input';
import { Dropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown';

import { cn } from '@gnetwork-ui/utils/cn.util';
import { usernameToInitials } from '@stringify/utils/username-to-initials.util';

import { User } from '@module-user/domain/entities/user.entity';

import { getUserAction } from '@ui-auth/actions/get-user.action';

import styles from './navbar.module.css';

export const Navbar = async ({
  hideNotificationsButton = false,
}: Readonly<NavbarProps>) => {
  const userCookie = await getUserAction();
  const user = plainToClass(User, userCookie);

  return (
    <header
      className={cn(
        styles.base,
        'bg-chromatic border-b border-solid border-b-neutral-200',
      )}
    >
      <SearchInput
        containerClassName="w-[618px]"
        fullWidth
        id="global_search"
        name="global-search"
        placeholder="Busqueda global..."
      />
      <div className={styles.base__actions}>
        {!hideNotificationsButton && (
          <MdNotificationsNone className="cursor-pointer size-6" />
        )}
        {user && (
          <Dropdown
            triggerComponent={
              <Button
                className="gap-2 justify-between min-w-[154px] px-1.5 py-1.5 shadow-2xs"
                isStatic
              >
                <div className="flex gap-2 items-center">
                  <div className="relative h-[28px] w-[28px]">
                    <Avatar username={usernameToInitials(user.getFullName())} />
                  </div>
                  <Text as="span" level="small" scheme="paragraph">
                    {user?.getFirstname() || ''}
                  </Text>
                </div>
                <MdKeyboardArrowDown className="size-6" />
              </Button>
            }
          >
            user
          </Dropdown>
        )}
      </div>
    </header>
  );
};
