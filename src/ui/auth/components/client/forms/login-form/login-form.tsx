'use client';

// import { Controller } from 'react-hook-form';
// import { Link } from '@gnetwork-ui/components/atoms/links/link';
// import { Checkbox } from '@gnetwork-ui/components/molecules/inputs/checkbox';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { cn } from '@gnetwork-ui/utils/cn.util';

import { LoginErrorAlert } from '@ui-auth/components/client/alerts/login-error-alert/login-error-alert';

import { EmailInputController } from '@ui-core/components/server/inputs/email-input-controller';
import { PasswordInputController } from '@ui-core/components/server/inputs/password-input-controller';

import { LoginBrand } from './components/login-brand/login-brand';
import { useLoginForm } from './login-form.hook';
import { MdLockOutline, MdPersonOutline, MdAdd } from 'react-icons/md';

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
      className={cn(styles.base, 'gap-6')}
      onSubmit={handleSubmit(onSubmit)}
    >
      {serverError && (
        <div className={styles.base__alert}>
          <LoginErrorAlert message={serverError} onClose={closeErrorAlert} />
        </div>
      )}
      <LoginBrand />
      <Text as="p" className={styles.base__subtitle}>
        <MdAdd className="text-red-600" size={32} />
        Que Internet
      </Text>
      <div className={styles.base__form}>
        <div className={styles.base__row}>
          <EmailInputController
            containerClassName={styles.input__container}
            control={control}
            fullWidth
            id="login_email"
            // label="Usuario"
            leftIcon={
              <MdPersonOutline className="text-neutral-400" size={24} />
            }
            name="email"
            onClear={() => clearErrors()}
            placeholder="Usuario"
          />
        </div>
        <div className={styles.base__row}>
          <PasswordInputController
            containerClassName={styles.input__container}
            control={control}
            fullWidth
            id="login_password"
            // label="Contraseña"
            leftIcon={<MdLockOutline className="text-neutral-400" size={24} />}
            name="password"
            onClear={() => clearErrors()}
            placeholder="Contraseña"
          />
        </div>
        {/* CHECKOUT DE RECUERDA MI SESION */}
        {/* <div className={styles.base__row}>
          <Controller
            control={control}
            name="rememberSession"
            render={({ field: { value, onChange, ...field } }) => (
              <Checkbox
                {...field}
                checked={!!value}
                id="login_remember_session"
                label="Recordar mi sesión"
                onChange={onChange}
              />
            )}
          />
        </div> */}
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

      <div className={styles.base__footer}>
        <div className="text-center w-full">
          <Text
            className="text-center text-neutral-500"
            scheme="label"
            size="xs"
          >
            ¿Perdiste la contraseña?
          </Text>
        </div>
        <div className="w-full">
          <Separator />
        </div>
        <div className="w-full">
          <Text
            className="text-neutral-500 text-center"
            scheme="label"
            size="xs"
          >
            G-NETWORK - J500564015
          </Text>
        </div>
      </div>
    </form>
  );
};
