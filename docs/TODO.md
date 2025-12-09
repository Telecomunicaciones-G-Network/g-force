# TODO

## Logout Button

```typescript
"use client";

import { logoutAction } from "@ui-auth/actions";

interface LogoutButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function LogoutButton({ children, className }: LogoutButtonProps) {
  const handleLogout = async () => {
    try {
      await logoutAction();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <button onClick={handleLogout} className={className} type="button">
      {children || "Cerrar sesión"}
    </button>
  );
}
```

## Obtener el usuario en componentes de servidor

```typescript
import { getCurrentUser } from "@ui-auth/utils";

export default async function ChatPage() {
  const user = await getCurrentUser();

  return (
    <div className={styles.base}>
      {user && (
        <div style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <p>
            Bienvenido, <strong>{user.first_name} {user.last_name}</strong>
          </p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <ChatList />
    </div>
  );
}
```

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
