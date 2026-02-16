'use client';

import type { FlatlistProps } from './flatlist.props';

import { Fragment } from 'react';

import { cn } from '../../../../utils/cn.util';

import { useFlatlist } from './flatlist.hook';

import styles from './flatlist.module.css';

/**
 * @name Flatlist
 *
 * @description Component to display a list of items in a flatlist.
 *
 * @property {string} [className] - The class name(s) to apply to the flatlist container.
 * @property {FlatlistItem[]} [items] - The items to display in the flatlist.
 * @property {EmblaOptionsType} [options] - The options for the flatlist component.
 * @property {React.Ref<HTMLDivElement>} [ref] - The ref for the outer flatlist container.
 * @property {object} [rest] - Additional props to spread onto the inner container.
 */
export const Flatlist = ({
  className = '',
  items = [],
  options,
  ref,
  ...rest
}: Readonly<FlatlistProps>) => {
  const { flatlistRef } = useFlatlist({ options });

  if (!items || items?.length === 0)
    console.warn(
      'Prop elements is missing on Flatlist component. This component can not be render appropiately.',
    );

  return (
    <div ref={ref} className={styles.base}>
      <div
        ref={flatlistRef}
        className={cn(styles.base__container, className)}
        {...rest}
      >
        <div className={styles.base__wrapper}>
          {items?.map((item) => (
            <Fragment key={item?.id}>{item?.item}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
