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
FIXME: Loading button on loading must be red on login page

## Improves

IMPROVE: Create a class or utility to handler coookies on server and client using nextjs
IMPROVE: Quit serverError from login form hook and improve this hook
IMPROVE: Create a build pattern or dictionary to handler resources and actions or create a http strategy to build a path. Apply this on http-client.class.ts
IMPROVE: Allow to close alert when this one is clicked on x icon on login page
IMPROVE: Avatar on chat list on chat page should be use skeleton on loading
IMPROVE: Customize scrollbar to more elegance
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

## Todos

TODO: When user open chat conversation we need to automatically go scroll down for messages
TODO: On chat conversation on mobile viewport put avatar and go back icon
TODO: Add token to http client using axios request interceptor
TODO: Create dashboard layout
TODO: Handler permissions and roles for routing
TODO: Handler permissions and roles for elements on views
TODO: Create navbar
TODO: Create sidebar
TODO: Handler routes on sidebar
TODO: Create contact detail on chat
TODO: Create Invoicing detail on chat
TODO: Create contract details on chat
TODO: Create client status on details chat
TODO: Create historical on details chat
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
 * Obtiene el access token actual desde las cookies
 *
 * @returns El access token o null si no está disponible
 */
export async function getAccessToken(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("access_token");

    return tokenCookie?.value ?? null;
  } catch (error) {
    console.error("Error al obtener el access token:", error);
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
