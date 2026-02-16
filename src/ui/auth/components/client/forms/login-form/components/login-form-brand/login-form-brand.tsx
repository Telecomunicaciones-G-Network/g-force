'use client';

import type { BrandMode } from '@gnetwork-ui/components/atoms/vectors/brand';

import { BrandSkeleton } from '@gnetwork-ui/components/atoms/skeletons/brand-skeleton';
import { Brand } from '@gnetwork-ui/components/atoms/vectors/brand';

import { useLoginFormBrand } from './login-form-brand.hook';

import styles from './login-form-brand.module.css';

/**
 * @name LoginFormBrand
 *
 * @description The component to display the login brand.
 */
export const LoginFormBrand = () => {
  const { isMounted, theme } = useLoginFormBrand();

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
