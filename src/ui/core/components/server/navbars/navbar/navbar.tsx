// PENDING:

import type { NavbarProps } from './navbar.props';

import { SearchInput } from '@gnetwork-ui/components/molecules/inputs/search-input';

import { MdNotificationsNone } from 'react-icons/md';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './navbar.module.css';

export const Navbar = ({
  hideNotificationsButton = false,
}: Readonly<NavbarProps>) => (
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
    </div>
  </header>
);
