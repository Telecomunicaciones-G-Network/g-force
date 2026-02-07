'use client';

import type { BrandMode } from '@gnetwork-ui/components/atoms/vectors/brand';
import type { BrandProps } from './brand.props';

import { BrandSkeleton } from '@gnetwork-ui/components/atoms/skeletons/brand-skeleton';
import { Brand as BrandBase } from '@gnetwork-ui/components/atoms/vectors/brand';

import { useBrand } from './brand.hook';

export const Brand = ({ skeletonClassName, ...rest }: Readonly<BrandProps>) => {
  const { isMounted, theme } = useBrand();

  return (
    <>
      {!isMounted ? (
        <BrandSkeleton className={skeletonClassName} />
      ) : (
        <BrandBase ariaLabel="GNetwork" mode={theme as BrandMode} {...rest} />
      )}
    </>
  );
};
