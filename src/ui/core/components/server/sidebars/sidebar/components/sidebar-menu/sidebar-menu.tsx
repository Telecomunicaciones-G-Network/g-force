'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { Accordion } from '@gnetwork-ui/components/organisms/accordions/accordion';

import { sidebarMenuLinks } from '@ui-core/iterators/sidebar-menu-links.iterator';

import { useSidebarMenu } from './sidebar-menu.hook';

import styles from './sidebar-menu.module.css';

export const SidebarMenu = () => {
  const { isSidebarCollapsed } = useSidebarMenu();
  const pathname = usePathname();

  return (
    <div className={styles.base}>
      {sidebarMenuLinks?.map((menuLink) => (
        <Accordion
          key={menuLink?.id}
          className="p-0"
          fullWidth
          headerClassName="p-4"
          hideSeparator
          labelComponent={
            <div className="flex gap-3 items-center">
              {menuLink?.icon}
              {!isSidebarCollapsed && (
                <Text as="label" level="small" scheme="label">
                  {menuLink?.label}
                </Text>
              )}
            </div>
          }
          open
        >
          <div className={styles.base__options}>
            {menuLink?.children?.map((link) => (
              <Link key={link?.id} href={link?.href}>
                <Button
                  className={
                    pathname === link?.href
                      ? 'bg-neutral-100'
                      : 'bg-transparent border-none'
                  }
                  fullWidth
                >
                  {' '}
                  {link?.label}
                </Button>
              </Link>
            ))}
          </div>
        </Accordion>
      ))}
    </div>
  );
};
