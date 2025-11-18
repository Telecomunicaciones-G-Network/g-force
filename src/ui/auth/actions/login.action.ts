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

export async function loginAction(
  _prevState: LoginActionState<LoginViewModel>,
  formData: FormData,
): Promise<LoginActionState<LoginViewModel>> {
  try {
    // TODO: Desencriptar la data

    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    const response = await LoginCommand(data);

    if (response?.refresh && response?.token && response?.user) {
      const cookieStore = await cookies();

      cookieStore.set('token', response.token, {
        httpOnly: true,
        maxAge: minutesToSeconds(60),
        path: '/',
        sameSite: 'lax',
        secure: ENVS.NODE_ENV === 'production',
      });

      cookieStore.set('refresh', response.refresh, {
        httpOnly: true,
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

      // TODO: Debo lanzar una excepcion si esto falla
    }

    redirect('/chat');
  } catch (err) {
    const error = err as BaseError;

    // TODO: Debo manejar el mensaje si la redireccion de next falla

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
