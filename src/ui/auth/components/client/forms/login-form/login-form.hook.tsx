import type { LoginViewModel } from '@module-auth/infrastructure/viewmodels';
import type { LoginActionState } from '@ui-auth/interfaces';
import type { LoginFormData } from './interface';

import { startTransition, useActionState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// import { ClientCrypto } from '@crypto/classes/client-crypto.class';

// import { ENVS } from '@ui-core/envs/envs';

import { loginAction } from '@ui-auth/actions/login.action';

import { loginFormSchema } from './schemas/login-form.schema';

import { loginFormInitialValues } from './login-form.state';

const initialState: LoginActionState<LoginViewModel> = {
  data: undefined,
  errors: undefined,
  message: undefined,
  success: undefined,
};

export const useLoginForm = () => {
  const [formState, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  );

  const {
    clearErrors: clearErrorsForm,
    control,
    formState: formStateHook,
    handleSubmit,
  } = useForm<LoginFormData>({
    defaultValues: loginFormInitialValues,
    mode: 'onSubmit',
    resolver: zodResolver(loginFormSchema),
    reValidateMode: 'onSubmit',
  });
  const { errors, isSubmitting } = formStateHook;
  const serverError = formState?.errors?.form?.[0];

  const clearErrors = (
    fieldName?: keyof LoginFormData | (keyof LoginFormData)[],
  ) => {
    clearErrorsForm(fieldName);
  };

  const onSubmit = async (data: LoginFormData) => {
    // TODO: Debo quitar este bloque de try and catch
    try {
      const formData = new FormData();

      /*const encryptedPayload = await ClientCrypto.encryptObject(
        {
          email: data.email,
          password: data.password,
        },
        ENVS.CRYPTO_KEY,
      );*/

      // formData.append('payload', encryptedPayload);
      formData.append('email', data.email);
      formData.append('password', data.password);

      startTransition(() => {
        formAction(formData);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    clearErrors,
    control,
    errors,
    formAction,
    handleSubmit,
    isSubmitting: isSubmitting || isPending,
    onSubmit,
    serverError,
  };
};
