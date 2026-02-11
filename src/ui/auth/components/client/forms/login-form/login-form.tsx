'use client';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { LoginErrorAlert } from '@ui-auth/components/client/alerts/login-error-alert/login-error-alert';

import { EmailInputController } from '@ui-core/components/server/inputs/email-input-controller';
import { PasswordInputController } from '@ui-core/components/server/inputs/password-input-controller';

import { LoginBrand } from './components/login-brand/login-brand';

import { useLoginForm } from './login-form.hook';

import styles from './login-form.module.css';

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
      className={cn(
        styles.base,
        'gap-6 items-center justify-start pb-4 pt-0 px-4 tablet:gap-8 tablet:items-start tablet:justify-center tablet:pb-8 tablet:px-[204px]',
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      {serverError && (
        <LoginErrorAlert message={serverError} onClose={closeErrorAlert} />
      )}
      <LoginBrand />
      <div className={styles.base__form}>
        <div className={styles.base__row}>
          <EmailInputController
            control={control}
            fullWidth
            id="login_email"
            label="Email"
            name="email"
            onClear={() => clearErrors()}
            placeholder="Introduce tu email"
            required
          />
        </div>
        <div className={styles.base__row}>
          <PasswordInputController
            control={control}
            fullWidth
            id="login_password"
            label="Contraseña"
            name="password"
            onClear={() => clearErrors()}
            placeholder="Introduce tu contraseña"
            required
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
          Iniciar sesión
        </Button>
      </div>
    </form>
  );
};
