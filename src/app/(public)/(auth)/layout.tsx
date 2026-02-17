import type { PropsWithChildren } from 'react';

import Image from 'next/image';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { images } from '@ui-core/dictionaries/images.dictionary';

import styles from './layout.module.css';

/**
 * @name AuthLayout
 *
 * @description Layout for the authentication pages
 *
 * @property {PropsWithChildren} children - The children components
 */
export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <main className="bg-chromatic flex-full-container">
      <div
        className={cn(
          styles.base__container,
          'flex-col p-4 lg:flex-row lg:p-0',
        )}
      >
        <section className={cn(styles.base__poster, 'hidden lg:flex')}>
          <div className={cn(styles.base__image_container, 'full-size')}>
            <Image
              alt="Login Poster"
              className={cn(styles.base__image, 'full-size')}
              fill
              priority
              sizes="100%"
              src={images.loginPosterDesktop}
            />
          </div>
        </section>
        <div className={cn(styles.base__body, 'flex-container-center')}>
          {children}
        </div>
      </div>
    </main>
  );
}
