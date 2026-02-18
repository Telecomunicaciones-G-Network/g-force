'use server';

import type { LoginViewModel } from '@module-auth/infrastructure/viewmodels/login.viewmodel';
import type { LoginActionState } from '@ui-auth/interfaces';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { daysToSeconds } from '@timer/utils/days-to-seconds.util';
import { minutesToSeconds } from '@timer/utils/minutes-to-seconds.util';

import { LoginCommand } from '@module-auth/infrastructure/commands/login.command';

import { BaseError } from '@module-core/errors/base-error.error';

import { ENVS } from '@ui-core/envs/envs';

import { RESET_ACTION_FORM_KEY } from '@ui-core/constants/reset-action-form-key.constant';

/**
 * @name loginAction
 *
 * @description The action to login.
 *
 * @param {LoginActionState<LoginViewModel>} _prevState - The previous state.
 * @param {FormData} formData - The form data.
 *
 * @returns {Promise<LoginActionState<LoginViewModel>>} The login action state.
 *
 * TODO: I should to create a new general action to handler forms as the same way and standarize the response
 * TODO: I must to throw an exception if cookies store failed
 * TODO: I must to crypt to request
 * TODO: I must to store the token using httpOnly flag
 * TODO: Use a dictionary to set redirect path
 * TODO: NEXT_REDIRECT must be store in a dictionary
 */
export async function loginAction(
  _prevState: LoginActionState<LoginViewModel>,
  formData: FormData,
): Promise<LoginActionState<LoginViewModel>> {
  if (formData.get(RESET_ACTION_FORM_KEY) === 'true') {
    return {
      data: undefined,
      errors: undefined,
      message: undefined,
      success: undefined,
    };
  }

  try {
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    const response = await LoginCommand(data);

    if (response?.refresh && response?.token && response?.user) {
      const cookieStore = await cookies();

      cookieStore.set('token', response.token, {
        httpOnly: false,
        maxAge: minutesToSeconds(60),
        path: '/',
        sameSite: 'lax',
        secure: ENVS.NODE_ENV === 'production',
      });

      cookieStore.set('refresh', response.refresh, {
        httpOnly: false,
        maxAge: daysToSeconds(1),
        path: '/',
        sameSite: 'lax',
        secure: ENVS.NODE_ENV === 'production',
      });

      cookieStore.set('user', JSON.stringify(response.user), {
        httpOnly: true,
        maxAge: minutesToSeconds(60),
        path: '/',
        sameSite: 'lax',
        secure: ENVS.NODE_ENV === 'production',
      });
    }

    redirect('/chat/conversations');
  } catch (err) {
    const error = err as BaseError;

    if (error.message === 'NEXT_REDIRECT') {
      throw error;
    }

    return {
      errors: {
        form: [error?.message],
      },
      message: 'Login command has failed!',
      success: false,
    };
  }
}
