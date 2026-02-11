import type { PropsWithChildren } from 'react';

import { LoginCarousel } from '@ui-auth/components/client/login-carousel';

import styles from './layout.module.css';

// const slides = [
//   {
//     id: 1,
//     title: 'Tu contribución marca la diferencia',
//     description:
//       'Cada idea, cada esfuerzo y cada logro son parte de lo que nos hace únicos. Gracias por ser parte de este equipo excepcional.',
//   },
//   {
//     id: 2,
//     title: 'Innovación que transforma',
//     description:
//       'Juntos creamos soluciones que mejoran la vida de nuestros clientes. Tu trabajo hace la diferencia.',
//   },
//   {
//     id: 3,
//     title: 'Excelencia en cada detalle',
//     description:
//       'La calidad de nuestro servicio refleja el compromiso de cada miembro del equipo. Gracias por tu dedicación.',
//   },
// ];

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <main className={styles.base}>
      <section className={styles.base__carousel}>
        <LoginCarousel slides={[]} />
      </section>
      <div className={styles.base__body}>{children}</div>
    </main>
  );
}
