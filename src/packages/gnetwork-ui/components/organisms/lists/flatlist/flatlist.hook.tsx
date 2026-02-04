'use client';

import type { FlatlistProps } from './flatlist.props';

import useEmblaCarousel from 'embla-carousel-react';

type UseFlatlistProps = Pick<FlatlistProps, 'options'>;

/**
 * @name useFlatlist
 *
 * @description Hook to use the flatlist component.
 *
 * @property {UseFlatlistProps} options - The options for the flatlist component.
 *
 * @returns flatlistRef - The ref to the flatlist component.
 */
export const useFlatlist = ({ options }: Readonly<UseFlatlistProps>) => {
  const [emblaRef] = useEmblaCarousel({ ...options });

  return { flatlistRef: emblaRef };
};
