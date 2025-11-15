import type {
  GetContactResult,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { GetContactsResponseTransformer } from '../../infrastructure/interfaces';

import { ContactViewModel } from '../../infrastructure/viewmodels/contact.viewmodel';

export class GetContactsMapper {
  static mapArrayFrom(
    input: GetContactsResponse,
  ): GetContactsResponseTransformer {
    if (!input?.results || input?.results?.length === 0) {
      return {
        ...input,
        results: [],
      };
    }

    return {
      ...input,
      results: input?.results?.map((item: GetContactResult) =>
        GetContactsMapper.mapFrom(item),
      ),
    };
  }

  static mapFrom(input: GetContactResult): ContactViewModel {
    return {
      id: input?.contact_id,
      latestConversation: input?.latest_conversation,
      latestMessage: input?.latest_message,
      platform: input?.platform,
      platformId: input?.platform_id,
    };
  }
}
