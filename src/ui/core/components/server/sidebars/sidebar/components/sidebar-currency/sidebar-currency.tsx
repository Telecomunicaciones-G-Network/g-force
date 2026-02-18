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

export const SidebarCurrency = (_prop: Readonly<SidebarCurrencyProps>) => {
  const { isSidebarCollapsed, currencyRates } = useSidebarCurrency();

  // Si no hay datos, podrías retornar null o un skeleton
  if (currencyRates.length === 0) return null;

  return (
    <div className={cn('py-4', isSidebarCollapsed ? 'px-1' : 'px-0')}>
      <Card
        bordered
        className={cn('bg-neutral-100 transition-all', isSidebarCollapsed ? 'p-2' : 'p-4')}
        fullWidth
      >
        <div className={styles.base}>
          <div className={cn("flex items-center gap-3", isSidebarCollapsed ? "justify-center" : "mb-2")}>
            <Tooltip
              disabled={!isSidebarCollapsed} // Solo activo si está colapsado
              side="right"
              sideOffset={20}
              triggerComponent={
                <div
                  className={cn(
                    'flex items-center justify-center rounded-full bg-neutral-200 size-8 text-chromatic-inverted',
                    styles.base__dollar
                  )}
                >
                  <Icon className="h-[14.58px] w-[7.14px]" name="dollar" />
                </div>
              }
            >
              {/* Contenido del Tooltip (se ve al pasar el mouse si está colapsado) */}
              <div className="flex flex-col gap-2 p-1">
                {currencyRates.map((rate) => (
                  <div key={rate.id} className="flex flex-col border-b border-neutral-200 last:border-0 pb-1">
                    <Text size="xs" className="text-gray-500">{rate.date}</Text>
                    <Text weight="bold" size="sm">{rate.rate}</Text>
                  </div>
                ))}
              </div>
            </Tooltip>

            {!isSidebarCollapsed && (
              <Text as="span" size="sm" weight="bold">
                BS / USD
              </Text>
            )}
          </div>

          {!isSidebarCollapsed && (
            <>
              <Separator className="my-2" />
              <div className="flex flex-col gap-2">
                {currencyRates.map((currencyRate) => (
                  <div
                    className="flex gap-2 justify-between items-center"
                    key={currencyRate.id}
                  >
                    <Text
                      as="span"
                      className="text-chromatic-inverted text-xs"
                    >
                      {currencyRate.date}
                    </Text>
                    <Text
                      as="span"
                      align="right"
                      className="font-bold text-red-600"
                      level="medium"
                      scheme="label"
                    >
                      {currencyRate.rate}
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