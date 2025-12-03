'use client';

import { MdOutlineChat } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Accordion } from '@gnetwork-ui/components/organisms/accordions/accordion';

import { useSidebarMenu } from './sidebar-menu.hook';

import styles from './sidebar-menu.module.css';

export const SidebarMenu = () => {
  const { isSidebarCollapsed } = useSidebarMenu();

  return (
    <div className={styles.base}>
      <Accordion
        fullWidth
        hideSeparator
        labelComponent={
          <div className="flex gap-3 items-center">
            <MdOutlineChat className="min-h-6 min-w-6 size-6" />
            {!isSidebarCollapsed && (
              <Text as="label" level="small" scheme="label">
                Chat
              </Text>
            )}
          </div>
        }
        open
      >
        hola
      </Accordion>
    </div>
  );
};
