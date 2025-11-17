# TODO

## Dones

PENDING: /src/app/(public)/auth/layout.tsx
PENDING: /src/app/(public)/factory/~
PENDING: /src/app/page.tsx
PENDING: /src/modules/auth/infrastructure/repositories/http-auth.repository.ts
PENDING: /src/packages/hookers/use-media-query.hook.tsx
PENDING: /src/packages/http-client/classes/axios.class.ts
PENDING: /src/packages/http-client/classes/http-client.class.ts
PENDING: /src/ui/auth/actions/logout.action.ts
PENDING: /src/ui/auth/components/client/forms/login-form/login-form.tsx
PENDING: /src/ui/auth/components/client/forms/login-form/login-form.hook.tsx
PENDING: /src/ui/core/components/server/inputs/email-input-controller/email-input-controller.props.ts
PENDING: /src/ui/core/components/server/inputs/password-input-controller/password-input-controller.props.ts
PENDING: /src/ui/core/components/server/inputs/text-input-controller/text-input-controller.props.ts
PENDING: /src/ui/core/fetcher/gnetwork-api-client.fetcher.ts
PENDING: /src/middleware.ts

## Bugfix

FIXME: Load Gnetwork brand from server but it has not to show on login page
FIXME: Solve this middleware warning ⚠ The "middleware" file convention is deprecated. Please use "proxy" instead. Learn more: https://nextjs.org/docs/messages/middleware-to-proxy
FIXME: Check and fix every icon on web application
FIXME: Chat send input always must be fixed on bottom for chat conversation
FIXME: My chat details components overhead without reaching responsive mode
FIXME: On login page for tablet and mobile alert is on left side but must be on center

## Improves

IMPROVE: Get better login mappers as get contacts chat mapper
IMPROVE: Get better clean architecture application
IMPROVE: We need to iterate information on chat status card
IMPROVE: On chat contract card use iterator to map info
IMPROVE: Iterate base infos on chat invoice card
IMPROVE: Info list on chat contact component can be replace using a iterator and map this
IMPROVE: Fragment my chat contact component on parts
IMPROVE: Fragment my chat detail tabs component
IMPROVE: On chat conversation make iterable a button group
IMPROVE: Create button group component and replace buttons on chat conversation header
IMPROVE: Create a class or utility to handler coookies on server and client using nextjs
IMPROVE: Quit serverError from login form hook and improve this hook
IMPROVE: Create a build pattern or dictionary to handler resources and actions or create a http strategy to build a path. Apply this on http-client.class.ts
IMPROVE: Allow to close alert when this one is clicked on x icon on login page
IMPROVE: Avatar on chat list on chat page should be use skeleton on loading
IMPROVE: Apply validation schema on environment variables
IMPROVE: Fragment the middleware.ts in short codes
IMPROVE: I must to improve the private and public routes on middleware.ts
IMPROVE: improve middleare.ts
IMPROVE: Create chaining middlewares
IMPROVE: Apply class validator and class transformer over dtos and view models
IMPROVE: El use-media-query hook of hooker package has two deprecated methods
IMPROVE: Improve error message on console on axios class using chalk or any other
IMPROVE: Create a error dictionary and apply on axios class http client
IMPROVE: On getwork-api-client.fetcher.ts transfer configuration into a constant config file
IMPROVE: Props for input controller are the same DRY and unify
IMPROVE: Fragment login form component on parts
IMPROVE: Fragment chat conversation components on parts
IMPROVE: Fragment chat card component on parts
IMPROVE: Fragment chat invoices component
IMPROVE: When I create a new gnetwork api client instance put on constantes headers

## Todos

TODO: Optimize clean architecture structure
TODO: Connect chat list endpoint
TODO: When socket connection fall down or internet connection failed we need to set a global state to block user socket interaction until connection being established again
TODO: When user on historical chat view hide close conversation button on chat details for contact
TODO: When user open chat conversation we need to automatically go scroll down for messages
TODO: On chat conversation on mobile viewport put avatar and go back icon
TODO: Add token to http client using axios request interceptor
TODO: Create dashboard layout
TODO: Handler permissions and roles for routing
TODO: Handler permissions and roles for elements on views
TODO: Create navbar
TODO: Create sidebar
TODO: Handler routes on sidebar
TODO: Create user navbar menu
TODO: Change light and dark mode from user navbar menu
TODO: Check all code
TODO: Create a carousel component
TODO: Set carousel component on login page
TODO: Hide automatically the alert when login page failed
TODO: Create error page
TODO: Create Page not found page
TODO: Create loading page
TODO: Check dark mode on login page
TODO: Check dark mode on chat page
TODO: Do chat search on chat list
TODO: Do filters on chat list
TODO: Create badge component
TODO: Use badge component on chat card
TODO: When new message arrive on general updatechat card time and message
TODO: Short message on chatcard
TODO: Sort chat list when new recent message arrived
TODO: Update number badge notification when a new unread message arrived on chatcard
TODO: Do call funcionality on chat conversation
TODO: Do email functionality on chat conversation
TODO: Create dropdown select
TODO: Apply dropdown select on filters for chat conversation
TODO: Set conversation from options on chat conversation
TODO: Mark as unread a conversation on chat conversation
TODO: Apply transfer chat functionality on chat conversation
TODO: Muted notifications on chat conversation
TODO: Apply icon depending on message status
TODO: Update chat message status
TODO: Create floating button to go down conversation
TODO: Down automatically scroll when new message arrived on chat conversation
TODO: Apply file upload on chat input
TODO: Send a new message
TODO: Connect a general web socket
TODO: Apply tsdoc to all files
TODO: Add README.md to all packages and components on packages


## Things done

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

## Utilidades para obtener el usuario, token y refresh token del lado del servidor

```typescript
"use server";

import { cookies } from "next/headers";
import type { LoginResultUser } from "@module-auth/domain/interfaces/login-response.interface";

/**
 * Obtiene el usuario actual desde las cookies
 * Esta función solo debe usarse en Server Components o Server Actions
 *
 * @returns El usuario actual o null si no está autenticado
 */
export async function getCurrentUser(): Promise<LoginResultUser | null> {
  try {
    const cookieStore = await cookies();
    const userDataCookie = cookieStore.get("user_data");

    if (!userDataCookie?.value) {
      return null;
    }

    return JSON.parse(userDataCookie.value) as LoginResultUser;
  } catch (error) {
    console.error("Error al obtener el usuario actual:", error);
    return null;
  }
}

/**
 * Verifica si el usuario está autenticado
 *
 * @returns true si el usuario está autenticado, false en caso contrario
 */
export async function isAuthenticated(): Promise<boolean> {
  const token = await getAccessToken();
  return !!token;
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

## Forma de clean architecture login

1. Mi UI Form va a tomar los datos del login y pasarlo como **LoginDTO** al Login ✅

2. El Login va a pasar el **LoginDTO** al loginAdapter ✅

3. El adaptador va a convertir el **LoginDTO** a **LoginRequest** y va a pasar este **LoginRequest** al Login ✅

4. El Login va a pasar el **LoginRequest** al LoginUsecase. ✅

5. El LoginUsecase va a pasar el **LoginRequest** al HttpAuthRepository ✅

6. El HttpAuthRepository va a aplicar la implementacion u opcional va a pasar esto a una funcion de servicio del cual puede obtener **LoginResponse** ✅

7. El HttpAuthRepository va a pasar el **LoginResponse** al loginMapper o lo puede hacer nuestro servicio ✅

8. El loginMapper va a convertir el **LoginResponse** a **LoginTransformed** que es del dominio y devolverlo al HttpAuthRepository ✅

9. El HttpAuthRepository va a devolver el **LoginTransformed** al LoginUsecase ✅

10. El LoginUsecase va a devolver el **LoginTransformed** al Login ✅

11. El Login va a pasar el **LoginTransformed** al loginPresenter ✅

12. El loginPresenter va a transformar el **LoginModel** en el **LoginViewModel** y devolverlo al Login

13. El Login devuelve a la UI el **LoginViewModel**
