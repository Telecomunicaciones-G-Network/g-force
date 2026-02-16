'use client';

import type { SidebarCurrencyProps } from './sidebar-currency.props';

import { Card } from '@gnetwork-ui/components/atoms/cards/card';
import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useSidebarCurrency } from './sidebar-currency.hook';

import styles from './sidebar-currency.module.css';

export const SidebarCurrency = ({
  currencyRates = [],
}: Readonly<SidebarCurrencyProps>) => {
  const { isSidebarCollapsed } = useSidebarCurrency();

  return (
    <div className={isSidebarCollapsed ? 'px-1 py-4' : 'px-0 py-4'}>
      <Card
        bordered
        className={cn('bg-neutral-100', isSidebarCollapsed ? 'p-2' : 'p-4')}
        fullWidth
      >
        <div className={styles.base}>
          <div className={styles.base__currency}>
            <Tooltip
              disabled={!isSidebarCollapsed}
              side="right"
              sideOffset={20}
              triggerComponent={
                <div
                  className={cn(
                    styles.base__dollar,
                    'rounded-full bg-neutral-200 size-8 text-xl text-center text-chromatic-inverted',
                  )}
                >
                  <Icon className="h-[14.58px] w-[7.14px]" name="dollar" />
                </div>
              }
            >
              {currencyRates.map((currencyRate) => (
                <div
                  className="flex gap-2 justify-between items-center"
                  key={currencyRate?.id}
                >
                  <Text as="span" className="font-base text-chromatic text-xs">
                    {currencyRate?.date}
                  </Text>
                  <Text
                    as="span"
                    align="right"
                    className="font-bold text-chromatic"
                    level="medium"
                    scheme="label"
                  >
                    {currencyRate?.rate}
                  </Text>
                </div>
              ))}
            </Tooltip>
            {!isSidebarCollapsed && (
              <Text
                as="span"
                className="font-bold text-sm"
                size="sm"
                weight="bold"
              >
                BS/USD
              </Text>
            )}
          </div>
          {!isSidebarCollapsed && (
            <>
              <Separator />
              <div>
                {currencyRates.map((currencyRate) => (
                  <div
                    className="flex gap-2 justify-between items-center"
                    key={currencyRate?.id}
                  >
                    <Text
                      as="span"
                      className="font-base text-chromatic-inverted text-xs"
                    >
                      {currencyRate?.date}
                    </Text>
                    <Text
                      as="span"
                      align="right"
                      className="font-bold text-red-600"
                      level="medium"
                      scheme="label"
                    >
                      {currencyRate?.rate}
                    </Text>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};
