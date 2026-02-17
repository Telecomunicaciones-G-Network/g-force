'use client';

import { MdLockOutline, MdPersonOutline } from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { LoginFormFooter } from './components/login-form-footer/login-footer';
import { LoginFormHeader } from './components/login-form-header/login-form-header';

import { EmailInputController } from '@ui-core/components/server/inputs/email-input-controller';
import { PasswordInputController } from '@ui-core/components/server/inputs/password-input-controller';

import { LoginErrorAlert } from '@ui-auth/components/client/alerts/login-error-alert/login-error-alert';

import { useLoginForm } from './login-form.hook';

import styles from './login-form.module.css';

/**
 * @name LoginForm
 *
 * @description The login form component.
 *
 * TODO: Button disabled is so ugly
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
    <form className={styles.base} onSubmit={handleSubmit(onSubmit)}>
      {serverError && (
        <div>
          <LoginErrorAlert message={serverError} onClose={closeErrorAlert} />
        </div>
      )}
      <LoginFormHeader />
      <div className={styles.base__form}>
        <div className={styles.base__row}>
          <EmailInputController
            control={control}
            fullWidth
            id="login_email"
            label="Usuario"
            leftIcon={
              <MdPersonOutline className="fill-neutral-500" size={24} />
            }
            name="email"
            onClear={() => clearErrors()}
            placeholder="Usuario"
            required
          />
        </div>
        <div className={styles.base__row}>
          <PasswordInputController
            containerClassName={styles.input__container}
            control={control}
            fullWidth
            id="login_password"
            label="Contraseña"
            leftIcon={<MdLockOutline className="fill-neutral-500" size={24} />}
            name="password"
            onClear={() => clearErrors()}
            placeholder="Contraseña"
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
      <LoginFormFooter />
    </form>
  );
};
