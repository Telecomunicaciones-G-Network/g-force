"use client";

import type { BrandMode } from "@gnetwork-ui/components/atoms/vectors/brand";

import { Brand } from "@gnetwork-ui/components/atoms/vectors/brand";

import { useLoginBrand } from "./login-brand.hook";

import styles from "./login-brand.module.css";

/**
 * Login brand component.
 */
export const LoginBrand = () => {
  const { theme } = useLoginBrand();

  return (
    <div className={styles.base}>
      <Brand ariaLabel="GNetwork" mode={theme as BrandMode} />
    </div>
  );
};
