# TODO


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
          /get-chat-messages.usecase.ts ✅
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
          /get-chat-messages.exception.ts ✅
          /get-contacts.exception.ts ✅
        /interfaces
          /agent-values.interfaces.ts ✅
          /contact-values.interface.ts ✅
          /conversation-values.interface.ts ✅
          /get-chat-messages-request.interface.ts ✅
          /get-chat-messages-response.interface.ts ✅
          /get-contacts-request.interface.ts ✅
          /get-contacts-response.interface.ts ✅
          /media-values.interface.ts ✅
          /message-values.interface.ts ✅
          /team-values.interfaces.ts ✅
        /repositories
          /chat.repository.ts ✅
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
          /socket-emissions.dictionary.ts ✅
          /socket-events.dictionary.ts ✅
        /dtos
          /get-chat-messages-request.dto.ts ✅
          /get-chat-messages-response.dto.ts ✅
          /get-contacts-response.dto.ts ✅
          /on-incomming-message.dto.ts ✅
        /interfaces
          /get-chat-messages-result.interface.ts ✅
          /get-contacts-result.interface.ts ✅
        /mappers
          /get-chat-messages.mapper.ts ✅
          /get-contacts.mapper.ts ✅
        /queries
          /get-chat-messages.query.ts ✅
          /get-contacts.query.ts ✅
        /repositories
          /http-chat.repository.ts ✅
        /services
          /get-chat-messages.service.ts ✅
          /get-contacts.service.ts ✅
        /subscriptions
          /on-incomming-message.subscription.ts ✅
  /packages
    /gnetwork-ui
      /components
        /atoms
          /skeletons
            /skeleton~ ✅ 😄
        /organisms
          /buttons
            /button-group~ ✅ 😄
    /hookers
      /use-debounce.hook.tsx ✅ 😄
    /objecter~ ✅ 😄
  /ui
    /core
      /fetchers
        /gnetwork-fetch-api-client.fetcher.ts ✅
    /chat
      /components
        /client
          /sections
            /chat-conversation~ ⚠️
      /constants
        /chat-desktop-viewport.constant.ts ✅ 😄
      /dictionaries
        /query-keys.dictionary.ts ✅
      /schemas
        /chat-conversation-form.schema.ts ✅
      /stores
        /chat-store~ ✅

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

## Tipos de mensaje

### Tipo texto por endpoint

```json
{
    "id": "24984c3d-73c6-4e62-9741-f307acb4b24a",
    "platform": "WHATSAPP",
    "platform_id": "wamid.HBgMNTg0MTQyNDE1OTI3FQIAEhggQUM4QUZDMTkzQkFGQjRFOTFENTIyRENCRDQ0NTZGNDAA",
    "conversation_id": "6bb87f32-4be0-49fb-bb70-972baa7d6d4a",
    "type": "TEXT",
    "direction": "INCOMING",
    "status": "READ",
    "sender": {
        "id": "7fad41a6-9320-4ad2-a36c-1b5dce2e7f9e",
        "name": "Samuel Ochoa"
    },
    "text": "Qlq qlq qlq",
    "media": null,
    "caption": null,
    "location": null,
    "contacts": [],
    "extra_metadata": null,
    "reactions": [],
    "forwarded": false,
    "forwarded_many_times": false,
    "created_at": "2025-11-14T16:58:50.433730Z",
    "updated_at": "2025-11-14T17:00:20.621107Z",
    "sent_at": "2025-11-14T16:58:49Z",
    "delivered_at": "2025-11-14T16:58:49Z",
    "read_at": "2025-11-14T17:00:20.625544Z",
    "failed_at": null
}
```

## Tipo texto por socket

```json
{
    "message_id": "6ae41b0c-29dd-4415-9049-1e35a1dc2cdb",
    "conversation_id": "8464efdb-4f72-41e1-a6e8-b3884dc32179",
    "type": "TEXT",
    "text": "Other test",
    "media": null,
    "caption": null,
    "location": null,
    "contacts": null,
    "reply_to_message_id": null,
    "forwarded": false,
    "forwarded_many_times": false,
    "timestamp": "2025-11-22T03:26:57+00:00"
}
```

## Tipo imagen

```json
{
    "id": "60e118d3-fd21-458c-a7e6-b98bbba4f9dd",
    "platform": "WHATSAPP",
    "platform_id": "wamid.HBgMNTg0MTQyNDE1OTI3FQIAEhggQUNFNjIwQzZGQkNENDhFMUI2REI0NjlFRDI1REZFM0YA",
    "conversation_id": "6bb87f32-4be0-49fb-bb70-972baa7d6d4a",
    "type": "IMAGE",
    "direction": "INCOMING",
    "status": "DELIVERED",
    "sender": {
        "id": "7fad41a6-9320-4ad2-a36c-1b5dce2e7f9e",
        "name": "Samuel Ochoa"
    },
    "text": null,
    "media": {
        "id": "213b451b-0091-42eb-819f-20bb0eb760b2",
        "type": "IMAGE",
        "mime_type": "image/jpeg",
        "filename": "2441955266250779"
    },
    "caption": null,
    "location": null,
    "contacts": [],
    "extra_metadata": null,
    "reactions": [],
    "forwarded": false,
    "forwarded_many_times": false,
    "created_at": "2025-11-21T19:46:52.938614Z",
    "updated_at": null,
    "sent_at": "2025-11-21T19:46:49Z",
    "delivered_at": "2025-11-21T19:46:49Z",
    "read_at": null,
    "failed_at": null
},
```

## Eventos

### message_status_changed

Se ejecuta cuando un mensaje cambio de status

```json
{
  "message_id": "a3b9ce4d-e7ca-446d-a4ea-4e21564d9c27",
  "status": "READ"
}
```

### message_status_updated

Se ejecuta para avisar al agente que un mensaje cambio

```json
{
  "contact_id": "6b7c0798-c8b7-40cb-88fb-bbf504be6125"
}
```
