'use client';

import type { BrandMode } from '@gnetwork-ui/components/atoms/vectors/brand';

import { BrandSkeleton } from '@gnetwork-ui/components/atoms/skeletons/brand-skeleton';
import { Brand } from '@gnetwork-ui/components/atoms/vectors/brand';

import { useLoginBrand } from './login-brand.hook';

import styles from './login-brand.module.css';

export const LoginBrand = () => {
  const { isMounted, theme } = useLoginBrand();

  return (
    <div className={styles.base}>
      {!isMounted ? (
        <BrandSkeleton />
      ) : (
        <Brand ariaLabel="GNetwork" mode={theme as BrandMode} />
      )}
    </div>
  );
};
