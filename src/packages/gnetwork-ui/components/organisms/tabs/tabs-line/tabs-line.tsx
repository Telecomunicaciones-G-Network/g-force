'use client';

import type { TabLine, TabLineContent } from './interfaces';
import type { TabsLineProps } from './tabs-line.props';

import { Tab } from '../../../molecules/tabs/tab';
import { TabContent } from '../../../molecules/tabs/tab-content';
import { TabsTriggers } from '../../../molecules/tabs/tabs-triggers';
import { Tabs } from '../tabs';

import { cn } from '../../../../utils/cn.util';

import { useTabs } from '../tabs/tabs.hook';

import styles from './tabs-line.module.css';

/**
 * @name TabsLine component
 *
 * @description This component is a wrapper for the Tabs component that displays a line of tabs
 *
 * @property {string | number} defaultValue - The default value of the tabs line
 * @property {TabLine[]} tabs - The tabs of the tabs line
 * @property {TabLineContent[]} tabsContent - The tabs content of the tabs line
 */
export const TabsLine = ({
  defaultValue,
  tabs = [],
  tabsContent = [],
}: Readonly<TabsLineProps>) => {
  const { activeTabValue, changeActiveTab, isActiveTab } = useTabs({
    defaultValue,
  });

  if (!tabs || tabs?.length === 0)
    console.warn(
      'Props tabs and tabs are required on TabsLine component. This component can not be render appropiately.',
    );

  if (!Array.isArray(tabs))
    console.warn(
      'Props tabs must an array on TabsLine component. This component can not be render appropiately.',
    );

  if (!tabsContent || tabsContent?.length === 0)
    console.warn(
      'Props tabs and tabsContent are required on TabsLine component. This component can not be render appropiately.',
    );

  if (!Array.isArray(tabsContent))
    console.warn(
      'Props tabsContent must an array on TabsLine component. This component can not be render appropiately.',
    );

  if (tabs?.length !== tabsContent?.length)
    console.warn(
      'Props tabs and tabsContent must have the same length on TabsLine component. This component can not be render appropiately.',
    );

  return (
    <Tabs
      defaultValue={defaultValue}
      onValueChange={changeActiveTab}
      value={activeTabValue}
    >
      <TabsTriggers
        className={
          'border-b border-solid border-b-neutral-300 gap-4 justify-start min-h-9'
        }
      >
        {tabs?.map((tab: TabLine) => {
          if (!tab?.value) return null;

          return (
            <Tab
              key={tab?.id}
              className={cn(
                styles.base__tab,
                'font-medium gap-2 p-2 text-base text-neutral-500',
                isActiveTab(tab?.value) &&
                  'border-b-2 border-solid border-b-chromatic-inverted text-chromatic-inverted',
              )}
              value={tab?.value}
            >
              {tab?.label}
            </Tab>
          );
        })}
      </TabsTriggers>
      {tabsContent?.map((tabContent: TabLineContent) => {
        if (!tabContent?.value) return null;

        return (
          <TabContent key={tabContent?.id} value={tabContent?.value}>
            {tabContent?.children}
          </TabContent>
        );
      })}
    </Tabs>
  );
};
