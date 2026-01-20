# TODO

TODO: Doc all about this project

## Reviews

- .dockerignore ✅

- src/modules/chat/domain/enums/conversation-status.enum.ts ✅
- src/modules/chat/domain/enums/media-storage-status.enum.ts ✅
- src/modules/chat/domain/enums/media-types.enum.ts ✅
- src/modules/chat/domain/enums/message-directions.enum.ts ✅
- src/modules/chat/domain/enums/message-event-types.enum.ts ✅
- src/modules/chat/domain/enums/message-status.enum.ts ✅
- src/modules/chat/domain/enums/message-types.enum.ts ✅
- src/modules/chat/domain/enums/team-codenames.enum.ts ✅
- src/modules/chat/domain/entities/agent.entity.ts ✅
- src/modules/chat/domain/entities/contact.entity.ts ✅
- src/modules/chat/domain/entities/conversation.entity.ts ✅
- src/modules/chat/domain/entities/media.entity.ts ✅
- src/modules/chat/domain/entities/message.entity.ts ✅
- src/modules/chat/domain/entities/team.entity.ts ✅
- src/modules/chat/domain/interfaces/agent.interface.ts ✅
- src/modules/chat/domain/interfaces/contact.interface.ts ✅
- src/modules/chat/domain/interfaces/conversation.interface.ts ✅
- src/modules/chat/domain/interfaces/media.interface.ts ✅
- src/modules/chat/domain/interfaces/message.interface.ts ✅
- src/modules/chat/domain/interfaces/message-contact.interface.ts ✅
- src/modules/chat/domain/interfaces/message-event-data.interface.ts ✅
- src/modules/chat/domain/interfaces/message-location.interface.ts ✅
- src/modules/chat/domain/interfaces/message-reaction.interface.ts ✅
- src/modules/chat/domain/interfaces/message-sender.interface.ts ✅
- src/modules/chat/domain/interfaces/on-connected-response.interface.ts ✅
- src/modules/chat/domain/interfaces/on-contact-finished-response.interface.ts ✅
- src/modules/chat/domain/interfaces/on-conversation-assignment-updated-response.interface.ts ✅
- src/modules/chat/domain/interfaces/on-new-message-received-response.interface.ts ✅
- src/modules/chat/domain/interfaces/on-new-message-sent-response.interface.ts ✅
- src/modules/chat/domain/interfaces/team.interface.ts ✅
- src/modules/chat/domain/types/contact-latest-message.type.ts ✅
- src/modules/chat/domain/types/conversation-status.type.ts ✅
- src/modules/chat/domain/types/media-storage-status.type.ts ✅
- src/modules/chat/domain/types/media-type.type.ts ✅
- src/modules/chat/domain/types/message-direction.type.ts ✅
- src/modules/chat/domain/types/message-event_type.type.ts ✅
- src/modules/chat/domain/types/message-status.type.ts ✅
- src/modules/chat/domain/types/message-type.type.ts ✅
- src/modules/chat/domain/types/team-codename.type.ts ✅
- src/modules/chat/infrastructure/dictionaries/chat-tags.dictionary.ts ✅
- src/modules/chat/infrastructure/dictionaries/socket-events.dictionary.ts ✅
- src/modules/chat/infrastructure/dtos/on-connected-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-contact-assignment-updated-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-contact-finished-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-incomming-message-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-new-message-received-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-new-message-sent-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-outgoing-message-response.dto.ts ✅
- src/modules/chat/infrastructure/mappers/on-connected.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-contact-assignment-updated.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-contact-finished.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-incomming-message.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-new-message-received.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-new-message-sent.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-outgoing-message.mapper.ts ✅

- src/packages/sounder/classes/sounder.class.ts ✅
- src/packages/timer/utils/iso-date-to-seconds.util.ts ✅

- src/ui/chat/actions/revalidate-chat-contacts.action.ts ✅
- src/ui/chat/constants/chat-contact-conversation-disabled.constant.ts ✅
- src/ui/chat/dictionaries/chat-sounds.dictionary.ts ✅
- src/ui/chat/hooks/on-agent-status-changed.hook.tsx ⚠️
- src/ui/chat/hooks/on-connected.hook.tsx ⚠️
- src/ui/chat/hooks/on-contact-assignment-updated.hook.tsx ⚠️
- src/ui/chat/hooks/on-contact-finished.hook.tsx ⚠️
- src/ui/chat/hooks/on_conversation_assignment_updated.hook.tsx 👎
- src/ui/chat/hooks/on_conversation_created.hook.tsx ⚠️
- src/ui/chat/hooks/on-incomming-message.hook.tsx ⚠️
- src/ui/chat/hooks/on-new-message-received.hook.tsx ⚠️
- src/ui/chat/hooks/on-new-message-sent.hook.tsx ⚠️
- src/ui/chat/hooks/on-outgoing-message.hook.tsx ⚠️
- src/ui/chat/hooks/on-reaction-added.hook.tsx ⚠️

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
