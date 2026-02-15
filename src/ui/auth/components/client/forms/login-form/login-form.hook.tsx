'use client';

import type { LoginViewModel } from '@module-auth/infrastructure/viewmodels';
import type { LoginActionState } from '@ui-auth/interfaces';
import type { LoginFormData } from './types';

import { startTransition, useActionState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// import { ClientCrypto } from '@crypto/classes/client-crypto.class';

// import { ENVS } from '@ui-core/envs/envs';

import { RESET_ACTION_FORM_KEY } from '@ui-core/constants/reset-action-form-key.constant';

import { loginAction } from '@ui-auth/actions/login.action';

import { loginFormSchema } from './schemas/login-form.schema';

import { loginFormState } from './login-form.state';

const initialState: LoginActionState<LoginViewModel> = {
  data: undefined,
  errors: undefined,
  message: undefined,
  success: undefined,
};

/**
 * @name useLoginForm
 *
 * @description The hook to use the login form.
 *
 * @returns clearErrors - The function to clear the errors.
 * @returns closeErrorAlert - The function to close the error alert.
 * @returns control - The control of the form.
 * @returns errors - The errors of the form.
 * @returns formAction - The action to the form.
 * @returns handleSubmit - The function to handle the submit.
 * @returns isSubmitting - Whether the form is submitting.
 * @returns onSubmit - The function to submit the form.
 * @returns serverError - The server error.
 *
 * TODO: Get rid of initial state and move to other general file
 * TODO: Make useActionState fragment as general for reusable server form actions
 * TODO: Make the logic for react hook form more reusable and standarize the response
 * TODO: Make clearFormState more generic and reusable
 * TODO: Get rid of try and catch block on submit
 */
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
    defaultValues: loginFormState,
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

  const clearFormServerState = () => {
    const formData = new FormData();

    formData.append(RESET_ACTION_FORM_KEY, 'true');

    startTransition(() => formAction(formData));
  };

  const closeErrorAlert = () => {
    clearErrors();
    clearFormServerState();
  };

  const onSubmit = async (data: LoginFormData) => {
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
    closeErrorAlert,
    control,
    errors,
    formAction,
    handleSubmit,
    isSubmitting: isSubmitting || isPending,
    onSubmit,
    serverError,
  };
};
