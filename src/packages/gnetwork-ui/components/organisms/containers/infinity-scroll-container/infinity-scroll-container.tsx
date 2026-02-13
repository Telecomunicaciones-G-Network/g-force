'use client';

import type { Ref } from 'react';
import type { InfinityScrollContainerProps } from './infinity-scroll-container.props';

import { InfinityScrollLoader } from '../../../molecules/loaders/infinity-scroll-loader';

import { cn } from '../../../../utils/cn.util';

import { useInfinityScrollContainer } from './use-infinity-scroll-container.hook';

import styles from './infinity-scroll-container.module.css';

/**
 * @name InfinityScrollContainer
 *
 * @description This component is used to render the infinity scroll container.
 *
 * @property {string} className - The class name to apply to the container.
 * @property {ReactNode} children - The children to render.
 * @property {boolean} isLoading - Whether the container is loading.
 * @property {string | null} nextPage - The next page to load.
 * @property {() => void | Promise<void>} onLoadMore - The function to load more data.
 * @property {Ref<HTMLDivElement>} ref - The ref to the container element.
 * @property {ReactDiv} rest - The rest of the props.
 *
 * TODO: Check this component
 *
 */
export const InfinityScrollContainer = ({
  className = '',
  children,
  isLoading = false,
  nextPage = null,
  onLoadMore,
  ref,
  ...rest
}: Readonly<InfinityScrollContainerProps>) => {
  const { containerRef, hasUserScrolledRef, isIntersecting, sentinelRef } =
    useInfinityScrollContainer({
      hasMore: !!nextPage,
      isLoading,
      onLoadMore,
      requireUserScroll: true,
    });

  return (
    <div
      ref={ref ? ref : containerRef}
      className={cn(
        styles.base,
        'pb-4 px-4 tablet:pb-[27px] tablet:px-8 lg:p-0',
        className,
      )}
      onScroll={() => {
        hasUserScrolledRef.current = true;
      }}
      {...rest}
    >
      {children}
      {nextPage && (
        <div
          ref={sentinelRef as Ref<HTMLDivElement>}
          className="flex items-center justify-center py-2 text-xs text-neutral-500"
        >
          {hasUserScrolledRef?.current && isIntersecting && isLoading && (
            <InfinityScrollLoader />
          )}
        </div>
      )}
    </div>
  );
};
