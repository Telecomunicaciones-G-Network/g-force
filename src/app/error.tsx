'use client';

import { useEffect } from 'react';

import Image from 'next/image';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: VoidFunction;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={cn(styles.base, 'bg-neutral-100')}>
      <main className={styles.base__container}>
        <div className={styles.base__information}>
          <Text
            as="h3"
            align="center"
            className="text-chromatic-inverted"
            level="large"
            scheme="heading"
          >
            Error inesperado
          </Text>
          <div className={styles.base__message}>
            <Text
              as="p"
              align="center"
              className="text-neutral-600"
              level="large"
              scheme="paragraph"
            >
              Ocurrió un problema mientras intentábamos cargar esta sección.
            </Text>
            <Text
              as="p"
              align="center"
              className="text-neutral-600"
              level="large"
              scheme="paragraph"
            >
              Intenta nuevamente o vuelve al inicio para continuar.
            </Text>
          </div>
        </div>
        <Button color="red" onClick={reset}>
          Reintentar
        </Button>
      </main>
      <div className={styles.base__image}>
        <Image
          alt="Gnetwork error"
          className="responsive-image-contain"
          fill
          priority
          src="/images/error.png"
          sizes="100%"
        />
      </div>
    </div>
  );
}
