# TODO

TODO: Doc all about this project

## Reviews

- src/modules/chat/domain/enums/conversation-status.enum.ts ✔️
- src/modules/chat/domain/enums/media-storage-status.enum.ts ✔️
- src/modules/chat/domain/enums/media-types.enum.ts ✔️
- src/modules/chat/domain/enums/team-codenames.enum.ts ✔️
- src/modules/chat/domain/entities/agent.entity.ts ✔️
- src/modules/chat/domain/entities/conversation.entity.ts ✔️
- src/modules/chat/domain/entities/media.entity.ts ✔️
- src/modules/chat/domain/entities/team.entity.ts ✔️
- src/modules/chat/domain/interfaces/agent.interface.ts ✔️
- src/modules/chat/domain/interfaces/conversation.interface.ts ✔️
- src/modules/chat/domain/interfaces/media.interface.ts ✔️
- src/modules/chat/domain/interfaces/team.interface.ts ✔️
- src/modules/chat/domain/types/conversation-status.type.ts ✔️
- src/modules/chat/domain/types/media-storage-status.type.ts ✔️
- src/modules/chat/domain/types/media-type.type.ts ✔️
- src/modules/chat/domain/types/team-codename.type.ts ✔️

## Login action

```typescript
'use server';

import type { LoginActionState } from '@ui-auth/interfaces';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { ServerCrypto } from '@crypto/classes/server-crypto.class';
import { daysToSeconds } from '@timer/utils/days-to-seconds.util';
import { minutesToSeconds } from '@timer/utils/minutes-to-seconds.util';

import { LoginDTO } from '@module-auth/infrastructure/dtos/login.dto';

import { ENVS } from '@ui-core/envs/envs';

import { authService } from '@ui-auth/services/auth.service';

export async function loginAction(
  _prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  try {
    const encryptedPayload = formData.get('payload') as string;

    if (!encryptedPayload) {
      throw new Error('Payload can not be encrypted');
    }

    const { email, password } = ServerCrypto.decryptObject<LoginDTO>(
      encryptedPayload,
      ENVS.CRYPTO_KEY,
    );
    const data = { email, password };

    const response = await authService.login(data);

    if (response?.error) {
      throw new Error(response?.error);
    }

    if (
      response?.results?.access &&
      response?.results?.refresh &&
      response?.results?.user
    ) {
      const cookieStore = await cookies();

      cookieStore.set('access_token', response.results.access, {
        httpOnly: true,
        maxAge: minutesToSeconds(60),
        path: '/',
        sameSite: 'lax',
        secure: ENVS.NODE_ENV === 'production',
      });

      cookieStore.set('refresh_token', response.results.refresh, {
        httpOnly: true,
        maxAge: daysToSeconds(1),
        path: '/',
        sameSite: 'lax',
        secure: ENVS.NODE_ENV === 'production',
      });

      cookieStore.set('user_data', JSON.stringify(response.results.user), {
        httpOnly: true,
        maxAge: minutesToSeconds(60),
        path: '/',
        sameSite: 'lax',
        secure: ENVS.NODE_ENV === 'production',
      });
    }

    redirect('/chat');
  } catch (err) {
    const error = err as Error;

    if (error.message === 'NEXT_REDIRECT') {
      throw error;
    }

    return {
      errors: {
        form: [
          error?.message ||
            'Lo sentimos, ha ocurrido un error al iniciar sesión. Por favor intente nuevamente.',
        ],
      },
      message: 'Login Failed',
      success: false,
    };
  }
}

```
