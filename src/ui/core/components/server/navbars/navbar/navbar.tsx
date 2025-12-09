import type { NavbarProps } from './navbar.props';

import { plainToClass } from 'class-transformer';

import { SearchInput } from '@gnetwork-ui/components/molecules/inputs/search-input';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { User } from '@module-user/domain/entities/user.entity';

import { getUserAction } from '@ui-auth/actions/get-user.action';

import { NavbarActions } from './components/navbar-actions';

import styles from './navbar.module.css';

export const Navbar = async ({
  hideNotificationsButton = false,
  hideUserActions = false,
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
      <NavbarActions
        hideNotificationsButton={hideNotificationsButton}
        hideUserActions={hideUserActions}
        userFirstName={user?.getFirstname()}
        userFullName={user?.getFullName()}
      />
    </header>
  );
};
