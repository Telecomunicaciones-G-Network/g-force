'use client';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { Text } from '@gnetwork-ui/components/atoms/texts/text'; // Importa Text si lo tienes
import { cn } from '@gnetwork-ui/utils/cn.util';

import { LoginErrorAlert } from '@ui-auth/components/client/alerts/login-error-alert/login-error-alert';

import { EmailInputController } from '@ui-core/components/server/inputs/email-input-controller';
import { PasswordInputController } from '@ui-core/components/server/inputs/password-input-controller';

import { LoginBrand } from './components/login-brand/login-brand';
import { useLoginForm } from './login-form.hook';

import styles from './login-form.module.css';
import { MdLockOutline, MdPersonOutline } from 'react-icons/md';

/**
 * @name LoginForm
 *
 * @description The component to display the login form.
 */
export const LoginForm = () => {
  const {
    clearErrors,
    closeErrorAlert,
    control,
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
    serverError,
  } = useLoginForm();

  return (
    <form
      className={cn(styles.base, 'gap-6')}
      onSubmit={handleSubmit(onSubmit)}
    >
      {serverError && (
        <LoginErrorAlert message={serverError} onClose={closeErrorAlert} />
      )}

      {/* 1. Logo y Subtítulo */}
      <LoginBrand />
      <Text as="p" className={styles.base__subtitle}>
        Más que Internet
      </Text>

      <div className={styles.base__form}>
        <div className={styles.base__row}>
          <EmailInputController
            containerClassName={styles.input__container}
            control={control}
            fullWidth
            id="login_email"
            leftIcon={<MdPersonOutline className="text-neutral-400" size={20} />}
            name="email"
            onClear={() => clearErrors()}
            placeholder="Email"
          />
        </div>
        <div className={styles.base__row}>
          <PasswordInputController
            containerClassName={styles.input__container}
            control={control}
            fullWidth
            id="login_password"
            leftIcon={<MdLockOutline className="text-neutral-400" size={20} />}
            name="password"
            onClear={() => clearErrors()}
            placeholder="Contraseña"
          />
        </div>
      </div>
      <div className={styles.base__row}>
        <Button
          color="red"
          disabled={!!Object.keys(errors)?.length || isSubmitting}
          fullWidth
          loading={isSubmitting}
          type="submit"
        >
          Iniciar Sesión
        </Button>
      </div>
    </form>
  );
};