# TODO

## Reviews

- .github/workflows/build-develop.pipeline.yml ✅
- .github/workflows/build-production.pipeline.yml ✅
- .github/workflows/build-staging.pipeline.yml ✅
- .github/workflows/check.pipeline.yml ✅
- .github/workflows/deploy-develop.pipeline.yml ✅
- .github/workflows/deploy-production.pipeline.yml ✅
- .github/workflows/deploy-staging.pipeline.yml ✅
- docker/Dockerfile ✅
- docker/Dockerfile.development ✅
- docker/Dockerfile.production ✅
- docker/Dockerfile.staging ✅
- .dockerignore ✅
- .env ✅
- .env.development ✅
- .env.example ✅
- .env.production ✅
- .env.staging ✅
- CONTRIBUTING.md ✅
- Makefile ⚠️ (Add new commands for books)
- tsconfig.json ✅

- src/app/(private)/chat/management/page~ ✅

- src/modules/chat/domain/entities/agent.entity.ts ✅
- src/modules/chat/domain/entities/contact.entity.ts ✅
- src/modules/chat/domain/entities/conversation.entity.ts ✅
- src/modules/chat/domain/entities/media.entity.ts ✅
- src/modules/chat/domain/entities/message.entity.ts ✅
- src/modules/chat/domain/entities/team.entity.ts ✅

- src/modules/core/interfaces/api-gsoft-response.interface.ts ✅
- src/modules/chat/domain/enums/agent-status.enum.ts ✅
- src/modules/chat/domain/enums/conversation-status.enum.ts ✅
- src/modules/chat/domain/enums/media-storage-status.enum.ts ✅
- src/modules/chat/domain/enums/media-types.enum.ts ✅
- src/modules/chat/domain/enums/message-directions.enum.ts ✅
- src/modules/chat/domain/enums/message-event-types.enum.ts ✅
- src/modules/chat/domain/enums/message-status.enum.ts ✅
- src/modules/chat/domain/enums/message-types.enum.ts ✅
- src/modules/chat/domain/exceptions/get-agents.exception.ts ⚠️
- src/modules/chat/domain/exceptions/get-contact-contracts.exception.ts ✅
- src/modules/chat/domain/exceptions/get-contact-tickets.exception.ts ✅
- src/modules/chat/domain/enums/team-codenames.enum.ts ✅
- src/modules/chat/domain/interfaces/agent.interface.ts ✅
- src/modules/chat/domain/interfaces/contact.interface.ts ✅
- src/modules/chat/domain/interfaces/conversation.interface.ts ✅
- src/modules/chat/domain/interfaces/emit-send-internal-message-request.interface.ts ✅
- src/modules/chat/domain/interfaces/emit-send-internal-message-response.interface.ts ✅
- src/modules/chat/domain/interfaces/emit-set-agent-status-request.interface.ts ✅
- src/modules/chat/domain/interfaces/emit-set-agent-status-response.interface.ts ✅
- src/modules/chat/domain/interfaces/get-agents-request.interface.ts ✅
- src/modules/chat/domain/interfaces/get-agents-response.interface.ts ✅
- src/modules/chat/domain/interfaces/get-contact-contracts-request.interface.ts ✅
- src/modules/chat/domain/interfaces/get-contact-tickets-request.interface.ts ✅
- src/modules/chat/domain/interfaces/get-contact-tickets-response.interface.ts ✅
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
- src/modules/chat/domain/interfaces/on-conversation-finished-response.interface.ts ✅
- src/modules/chat/domain/interfaces/on-media-status-changed-response.interface.ts ✅
- src/modules/chat/domain/interfaces/on-message-status-changed-response.interface.ts ✅
- src/modules/chat/domain/interfaces/on-new-message-received-response.interface.ts ✅
- src/modules/chat/domain/interfaces/on-new-message-sent-response.interface.ts ✅
- src/modules/chat/domain/interfaces/team.interface.ts ✅
- src/modules/chat/domain/repositories/chat.repository.ts ✅
- src/modules/chat/domain/types/agent-status.type.ts ✅
- src/modules/chat/domain/types/contact-latest-message.type.ts ✅
- src/modules/chat/domain/types/conversation-status.type.ts ✅
- src/modules/chat/domain/types/media-storage-status.type.ts ✅
- src/modules/chat/domain/types/media-type.type.ts ✅
- src/modules/chat/domain/types/message-direction.type.ts ✅
- src/modules/chat/domain/types/message-event-type.type.ts ✅
- src/modules/chat/domain/types/message-status.type.ts ✅
- src/modules/chat/domain/types/message-type.type.ts ✅
- src/modules/chat/domain/types/team-codename.type.ts ✅
- src/modules/chat/application/usecases/get-agents.usecase.ts ⚠️
- src/modules/chat/application/usecases/get-contact-contracts.usecase.ts ⚠️
- src/modules/chat/application/usecases/get-contact-tickets.usecase.ts ✅
= src/modules/chat/infrastructure/dictionaries/chat-resources.dictionary.ts ✅
- src/modules/chat/infrastructure/dictionaries/chat-tags.dictionary.ts ✅
- src/modules/chat/infrastructure/dictionaries/socket-emissions.dictionary.ts ✅
- src/modules/chat/infrastructure/dictionaries/socket-events.dictionary.ts ✅
- src/modules/chat/infrastructure/dtos/emit-send-internal-message-request.dto.ts ✅
- src/modules/chat/infrastructure/dtos/emit-send-internal-message-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/emit-set-agent-status-request.dto.ts ✅
- src/modules/chat/infrastructure/dtos/emit-set-agent-status-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/get-agents-request.dto.ts ✅
- src/modules/chat/infrastructure/dtos/get-contact-contracts-request.dto.ts ✅
- src/modules/chat/infrastructure/dtos/get-contact-contracts-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/get-contact-tickets-request.dto.ts ✅
- src/modules/chat/infrastructure/dtos/get-contact-tickets-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-agent-status-change-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-connected-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-contact-assignment-updated-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-contact-finished-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-conversation-finished-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-incomming-message-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-media-status-changed-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-message-status-changed-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-new-message-received-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-new-message-sent-response.dto.ts ✅
- src/modules/chat/infrastructure/dtos/on-outgoing-message-response.dto.ts ✅
- src/modules/chat/infrastructure/interfaces/get-contact-contracts-result.interface.ts ✅
- src/modules/chat/infrastructure/interfaces/get-contact-tickets-result.interface.ts ✅
- src/modules/chat/infrastructure/mappers/emit-send-internal-message.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/emit-set-agent-status.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/get-agents.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/get-contact-contracts.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/get-contact-tickets.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-connected.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-contact-assignment-updated.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-contact-finished.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-conversation-finished.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-incomming-message.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-media-status-changed.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-message-status-changed.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-new-message-received.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-new-message-sent.mapper.ts ✅
- src/modules/chat/infrastructure/mappers/on-outgoing-message.mapper.ts ✅
- src/modules/chat/infrastructure/queries/get-agents.query.ts ✅
- src/modules/chat/infrastructure/queries/get-contact-contracts.query.ts ✅
- src/modules/chat/infrastructure/queries/get-contact-tickets.query.ts ✅
- src/modules/chat/infrastructure/repositories/http-chat.repository.ts ✅
- src/modules/chat/infrastructure/services/get-agents.service.ts ⚠️
- src/modules/chat/infrastructure/services/get-contact-contracts.service.ts ✅
- src/modules/chat/infrastructure/services/get-contact-tickets.service.ts ⚠️
- src/modules/contract/domain/entities/contract.entity.ts ✅
- src/modules/contract/domain/enums/contract-status-codes.enum.ts ✅
- src/modules/contract/domain/enums/contract-status-names.enum.ts ✅
- src/modules/contract/domain/interfaces/contract.interface.ts ✅
- src/modules/contract/domain/interfaces/contract-balance.interface.ts ✅
- src/modules/contract/domain/interfaces/contract-bank-associated-data.interface.ts ✅
- src/modules/contract/domain/types/contract-status-code.type.ts ✅
- src/modules/contract/domain/types/contract-status-name.type.ts ✅
- src/modules/invoice/domain/entities/invoice.entity.ts ✅
- src/modules/invoice/domain/enums/invoice-payment-methods.enum.ts ✅
- src/modules/invoice/domain/enums/invoice-status-codes.enum.ts ✅
- src/modules/invoice/domain/enums/invoice-status-names.enum.ts ✅
- src/modules/invoice/domain/interfaces/invoice.interface.ts ✅
- src/modules/invoice/domain/interfaces/invoice-amount-to-pay.interface.ts ✅
- src/modules/invoice/domain/interfaces/invoice-bank-associated-data.interface.ts ✅
- src/modules/invoice/domain/types/invoice-payment-method.type.ts ✅
- src/modules/invoice/domain/types/invoice-status-code.type.ts ✅
- src/modules/invoice/domain/types/invoice-status-name.type.ts ✅
- src/modules/ticket/domain/entities/ticket.entity.ts ✅
- src/modules/ticket/domain/enum/ticket-status-codes.enum.ts ✅
- src/modules/tickets/domain/enum/ticket-status-names.enum.ts ✅
- src/modules/tickets/domain/interfaces/ticket.interface.ts ✅
- src/modules/ticket/domain/types/ticket-status-code.type.ts ✅
- src/modules/ticket/domain/types/ticket-status-name.type.ts ✅

- src/packages/filer/utils/download-file-by-url.util.ts ✅
- src/packages/filer/utils/remove-extension-from-filename.util.ts ✅
- src/packages/gnetwork-ui/components/molecules/buttons/collapsible-button/~ ✅
- src/packages/gnetwork-ui/components/molecules/modals/modal-card/~ ✅
- src/packages/gnetwork-ui/components/organisms/lists/flatlist/~ ✅
- src/packages/gnetwork-ui/components/molecules/tables/table-body/~ ✅
- src/packages/gnetwork-ui/components/molecules/tables/table-column/~ ✅
- src/packages/gnetwork-ui/components/molecules/tables/table-head/~ ✅
- src/packages/gnetwork-ui/components/molecules/tables/table-header/~ ✅
- src/packages/gnetwork-ui/components/molecules/tables/table-header-column/~ ⚠️
- src/packages/gnetwork-ui/components/molecules/tables/table-header-row/~ ✅
- src/packages/gnetwork-ui/components/molecules/tables/table-row/! ✅
- src/packages/gnetwork-ui/components/molecules/buttons/collapsible-button~ ✅
- src/packages/gnetwork-ui/components/organisms/paginations/pagination/~ ✅
- src/packages/gnetwork-ui/components/organisms/tables/table/~ ✅
- src/packages/gnetwork-ui/components/organisms/tables/table-pagination/~ ✅
- src/packages/gnetwork-ui/components/organisms/tabs/tabs-line~ ✅
- src/packages/gnetwork-ui/components/templates/blocks/empty-list-message/~ ✅
- src/packages/gnetwork-ui/types/react-tbody.type.ts ✅
- src/packages/gnetwork-ui/types/react-td.type.ts ⚠️
- src/packages/gnetwork-ui/types/react-th.type.ts ⚠️
- src/packages/gnetwork-ui/types/react-thead.type.ts ✅
- src/packages/gnetwork-ui/types/react-tr.type.ts ✅
- src/packages/hooks/use-click-outside.hook.tsx ✅
- src/packages/sounder/classes/sounder.class.ts ✅
- src/packages/stringify/utils/capitalize-words.util.ts ✅
- src/packages/timer/utils/iso-date-to-seconds.util.ts ✅

- src/ui/core/enums/env-modes.enum.ts ✅

- src/ui/core/constants/table-record-limit-per-page.constant.ts ✅
- src/ui/core/components/client/tables/table-manager/~ ⚠️
- src/ui/chat/actions/revalidate-chat-contacts.action.ts ✅
- src/ui/chat/builders/agents-table.builder.tsx ⚠️
- src/ui/chat/components/client/forms/internal-message-form~ ⚠️
- src/ui/chat/components/client/modals/chat-close-conversation-modal/~ ⚠️
- src/ui/chat/components/client/selects/agent-status-selector~ ⚠️
- src/ui/chat/components/client/tables/chat-management-agents-table/~ ✅
- src/ui/chat/components/server/containers/chat-management-table-container/~ ✅
- src/ui/chat/components/server/messages/chat-internal-message~ ⚠️
- src/ui/chat/constants/chat-contact-conversation-disabled.constant.ts ✅
- src/ui/chat/constants/chat-management-tabs.constant.ts ✅
- src/ui/chat/dictionaries/agent-status-color.dictionary.ts ✅
- src/ui/chat/dictionaries/agent-status-label.dictionary.ts ✅
- src/ui/chat/dictionaries/agent-status-tag-color.dictionary.ts ✅
- src/ui/chat/dictionaries/chat-sounds.dictionary.ts ✅
- src/ui/chat/enums/chat-send-mode.enum.ts ✅
- src/ui/chat/hooks/agent-socket-events.hooks.tsx ✅
- src/ui/chat/hooks/base-socket-events.hook.tsx ✅
- src/ui/chat/hooks/contact-socket-events.hook.tsx ⚠️
- src/ui/chat/hooks/emit-send-internal-message.hook.tsx ⚠️
- src/ui/chat/hooks/emit-set-agent-status.hook.tsx ⚠️
- src/ui/chat/hooks/on-agent-status-changed.hook.tsx ⚠️
- src/ui/chat/hooks/on-connected.hook.tsx ⚠️
- src/ui/chat/hooks/on-contact-assignment-updated.hook.tsx ⚠️
- src/ui/chat/hooks/on-contact-finished.hook.tsx ⚠️
- src/ui/chat/hooks/on-conversation-assignment-updated.hook.tsx ⚠️
- src/ui/chat/hooks/on-conversation-created.hook.tsx ⚠️
- src/ui/chat/hooks/on-conversation-finished.hook.tsx ⚠️
- src/ui/chat/hooks/on-incomming-message.hook.tsx ⚠️
- src/ui/chat/hooks/on-media-status-changed.hook.tsx ⚠️
- src/ui/chat/hooks/on-message-status-changed.hook.tsx ⚠️
- src/ui/chat/hooks/on-new-message-received.hook.tsx ⚠️
- src/ui/chat/hooks/on-new-message-sent.hook.tsx ⚠️
- src/ui/chat/hooks/on-outgoing-message.hook.tsx ⚠️
- src/ui/chat/hooks/on-reaction-added.hook.tsx ⚠️
- src/ui/chat/hooks/on-reaction-removed.hook.tsx ⚠️
- src/ui/chat/interfaces/agent-status-selector-option.interface.ts ✅
- src/ui/chat/iterators/agent-status-selector-options.iterator.tsx ✅
- src/ui/chat/iterators/chat-conversation-header-button.iterator.tsx ✅
- src/ui/chat/iterators/chat-management-tabs-content.iterator.ts ✅
- src/ui/chat/layouts/chat-details-tab-content-layout/~ ✅
- src/ui/chat/queries/get-agents-query.hook.tsx ✅
- src/ui/chat/queries/get-contact-information-query.hook.tsx ✅
- src/ui/chat/queries/get-contact-contracts-query.hook.tsx ⚠️
- src/ui/chat/types/chat-send-mode.type.ts ✅
- src/ui/contract/components/client/cards/contract-card/~ ⚠️
- src/ui/contract/components/server/lists/contract-card-list/~ ⚠️
- src/ui/ticket/components/client/cards/ticket-card/~ ⚠️
- src/ui/ticket/components/client/dropdowns/tickets-filter/~ ⚠️
- src/ui/ticket/components/client/forms/create-ticket-form/~ ⚠️
- src/ui/ticket/components/client/lists/ticket-card-list/~ ⚠️
- src/ui/ticket/components/server/modals/create-ticket-modal/~ ⚠️
- src/ui/ticket/constant/ticket-filter-options.constant.ts ✅
- src/ui/ticket/dictionary/ticket-card-border-color.dictionary.ts ✅
- src/ui/ticket/dictionary/ticket-status-color.dictionary.ts ✅
- src/ui/ticket/enums/ticket-filter-option-values.enum.ts ✅
- src/ui/ticket/interfaces/ticket-filter-option.interface.ts ✅
- src/ui/ticket/schemas/create-ticket-form.schema.ts ✅
- src/ui/ticket/types/ticket-filter-option-value.type.ts ✅

- src/env.d.ts ✅

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

## PENDINGS

- Debo aplicar principio DRY en el chat-transfer-modal usando el modal-card
