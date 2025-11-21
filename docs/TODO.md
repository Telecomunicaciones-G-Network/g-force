# TODO

## TODO:

[Autenticacion]

TODO: Debo implementar el refresh token para poder extender la sesion del usuario

[Notificaciones]

TODO: Debo crear el componente Toast
TODO: Debo crear la funcionalidad de notificaciones en local por toast
TODO: Verificar el modo oscuro
TODO: Colocar una alerta cuando se haya perdido la conexion a internet o la conexion del socket

[Chat Conversation]

TODO: Ordenar los mensajes por fecha (Samuel debe agregar una propiedad llamada updatedAt)
TODO: Crear separadores por fecha como lo hace whatsapp
TODO: Debo hacer el dropdown del boton de tres puntos del componente chat-conversation
TODO: Debo implementar la funcionalidad de fijar en el dropdown del componente chat-conversation (samuel debe agregar una propiedade en el contacto para saber que esta fijado)
TODO: Ocultar la funcionalidad de marcar como leido
TODO: Debo aplicar la funcionalidad de silenciar las notificaciones
TODO: Debo crear la funcionalidad de los sonidos en notificaciones y recepcion de mensajes
TODO: Debo agregar la funcionalidad de transferir chat
TODO: Verificar el modo oscuro
TODO: Poder recibir un mensaje
TODO: Poder marcar como leido un mensaje siempre y cuando haya conexion de socket, el usuario este unido a la sala
TODO: Poder enviar un mensaje con todo su flujo
TODO: Limpiar el input de formulario despues del envio del mensaje
TODO: Cuando el usuario va hasta el ultimo mensaje de arriba si existe un siguiente has_next debo hacer una nueva peticion con el nuevo cursor y agregar los nuevos mensajes al estado aplicando infinite scroll

## FIXME:

[Chat Conversation]

FIXME: La consulta de obtencion de los mensajes esta tardando mucho
FIXME: Acomodar las entidades de chat como realmente lo requiero

## IMPROVE:

[Chat Conversation]

IMPROVE: Debo mejorar la forma en la que se esta pasando el message direction


## DONE:

/src
  /app
    /public
      /factory~ ✅
  /modules
    /core
      /interface
        /api-response.interface.ts ✅
    /chat
      /application
        /usecases
          /get-contacts.usecase.ts ✅
      /domain
        /entities
          /agent.entity.ts ✅
          /contact.entity.ts ✅
          /conversation.entity.ts ✅
          /media.entity.ts ✅
          /message.entity.ts ✅
          /team.entity.ts ✅
        /enums
          /assignments.enum.ts ✅
          /contact-platforms.enum.ts ✅
          /conversation-status.enum.ts ✅
          /message-directions.enum.ts ✅
          /message-status.enum.ts ✅
          /message-types.enum.ts ✅
          /platforms.enum.ts ✅
        /exceptions
          /get-contacts.exception.ts ✅
        /interfaces
          /agent-values.interfaces.ts ✅
          /contact-values.interface.ts ✅
          /conversation-values.interface.ts ✅
          /get-contacts-request.interface.ts ✅
          /get-contacts-response.interface.ts ✅
          /media-values.interface.ts ✅
          /message-values.interface.ts ✅
          /team-values.interfaces.ts ✅
        /types
          /assignment.type.ts ✅
          /contact-platform.type.ts ✅
          /conversation-status.type.ts ✅
          /media-type.type.ts ✅
          /message-direction.type.ts ✅
          /message-status.type.ts ✅
          /message-type.type.ts ✅
          /platform.type.ts ✅
      /infrastructure
        /dictionaries
          /chat-resources.dictionary.ts ✅
          /socket-events.dictionary.ts ✅
        /dtos
          /get-contacts-response.dto.ts ✅
        /interfaces
          /get-contacts-result.interface.ts ✅
        /mappers
          /get-contacts.mapper.ts ✅
        /queries
          /get-contacts.query.ts ✅
  /packages
    /gnetwork-ui
      /components
        /atoms
          /skeletons
            /skeleton~ ✅
        /organisms
          /buttons
            /button-group~ ✅
  /ui
    /core
      /fetchers
        /gnetwork-fetch-api-client.fetcher.ts ✅
    /chat
      /constants
        /chat-desktop-viewport.constant.ts ✅
      /dictionaries
        /query-keys.dictionary.ts ✅

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
