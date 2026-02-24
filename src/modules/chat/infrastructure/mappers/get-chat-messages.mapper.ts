import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  Message,
} from '../../domain/interfaces';
import type {
  GetChatMessagesRequestDTO,
  GetChatMessagesResponseDTO,
} from '../dtos';
import { GetChatMessagesResult } from '../interfaces';

export class GetChatMessagesMapper {
  static mapFrom(input: GetChatMessagesResponseDTO): GetChatMessagesResponse {
    return {
      cursor: input?.cursor,
      error: input?.error,
      hasMore: input?.has_more ?? false,
      messages: input?.results?.map(GetChatMessagesMapper.mapFromArray) ?? [],
      nextCursor: input?.next_cursor ?? null,
      status: input?.status,
      success: input?.success,
    };
  }

  static mapFromArray(input: GetChatMessagesResult): Message {
    return {
      id: input?.id,
      conversationId: input?.conversation_id,
      contacts:
        input?.contacts?.map((contact) => ({
          birthday: contact.birthday,
          emails: contact.emails,
          formattedName: contact.formatted_name,
          phoneNumbers: contact.phone_numbers,
          urls: contact.urls,
        })) ?? [],
      createdAt: input?.created_at,
      deliveredAt: input?.delivered_at,
      direction: input?.direction,
      eventData: {
        agent: input?.event_data?.finished_by_agent
          ? {
              id: input?.event_data?.finished_by_agent?.id,
              name: input?.event_data?.finished_by_agent?.full_name,
            }
          : input?.event_data?.agent
            ? {
                id: input?.event_data?.agent?.id,
                name: input?.event_data?.agent?.full_name,
              }
            : null,
        assignedByAgent: input?.event_data?.assigned_by_agent
          ? {
              id: input?.event_data?.assigned_by_agent?.id,
              name: input?.event_data?.assigned_by_agent?.full_name,
            }
          : null,
        eventType: input?.event_data?.event_type,
        previousAgent: input?.event_data?.previous_agent
          ? {
              id: input?.event_data?.previous_agent?.id,
              name: input?.event_data?.previous_agent?.full_name,
            }
          : null,
        previousTeam: {
          id: input?.event_data?.previous_team?.codename,
          name: input?.event_data?.previous_team?.name,
        },
        team: {
          id: input?.event_data?.team?.codename,
          name: input?.event_data?.team?.name,
        },
        timestamp: input?.event_data?.timestamp,
        finishedByAgent: input?.event_data?.finished_by_agent
          ? {
              id: input?.event_data?.finished_by_agent?.id,
              name: input?.event_data?.finished_by_agent?.full_name,
            }
          : null,
      },
      failedAt: input?.failed_at,
      forwarded: input?.forwarded,
      forwardedManyTimes: input?.forwarded_many_times,
      interactiveOptions: input?.interactive_options
        ? {
            buttonText: input.interactive_options.button_text,
            flowData: input.interactive_options.flow_data
              ? {
                  buttonText: input.interactive_options.flow_data.button_text,
                  flowActionType:
                    input.interactive_options.flow_data.flow_action_type,
                  flowCodename:
                    input.interactive_options.flow_data.flow_codename,
                  flowToken: input.interactive_options.flow_data.flow_token,
                }
              : null,
            interactiveType: input.interactive_options.interactive_type,
            listButtonText: input.interactive_options.list_button_text,
            listSections: input.interactive_options.list_sections
              ? input.interactive_options.list_sections.map((section) => ({
                  rows: section.rows.map((row) => ({
                    description: row.description,
                    id: row.id,
                    title: row.title,
                  })),
                  title: section.title,
                }))
              : null,
            replyButtons: input.interactive_options.reply_buttons
              ? input.interactive_options.reply_buttons.map((button) => ({
                  id: button.id,
                  title: button.title ?? button.text ?? '',
                  type: button.type,
                }))
              : [],
            templateButtons: input.interactive_options.template_buttons
              ? input.interactive_options.template_buttons.map((button) => ({
                  id: button.id,
                  title: button.title ?? button.text ?? '',
                  type: button.type,
                }))
              : [],
            urlButton: input.interactive_options.url_button
              ? {
                  title: input.interactive_options.url_button.title,
                  url: input.interactive_options.url_button.url,
                }
              : null,
          }
        : null,
      location: input?.location
        ? {
            address: input.location.address,
            latitude: input.location.latitude,
            longitude: input.location.longitude,
            name: input.location.name,
          }
        : null,
      media: input?.media
        ? {
            id: input.media.id,
            downloadUrl: input.media.download_url,
            filename: input.media.filename,
            mimeType: input.media.mime_type,
            storageStatus: input.media.storage_status,
            type: input.media.type,
          }
        : null,
      reactions:
        input?.reactions?.map((reaction) => ({
          agentId: reaction.agent_id,
          contactId: reaction.contact_id,
          emoji: reaction.emoji,
        })) ?? [],
      readAt: input?.read_at,
      replyToMessage: input?.reply_to_message
        ? {
            id: input.reply_to_message.id,
            sender: {
              id: input.reply_to_message.sender?.id ?? '',
              isBot: input.reply_to_message.sender?.is_bot ?? false,
              name: input.reply_to_message.sender?.name ?? 'Usuario',
            },
            textPreview: input.reply_to_message.text_preview,
            type: input.reply_to_message.type,
          }
        : null,
      sender: {
        id: input?.sender?.id,
        isBot: input?.sender?.is_bot ?? false,
        name: input?.sender?.name,
      },
      sentAt: input?.sent_at,
      status: input?.status,
      text: input?.text,
      type: input?.type,
      updatedAt: input?.updated_at,
    };
  }

  static mapTo(output: GetChatMessagesRequest): GetChatMessagesRequestDTO {
    return {
      contact_id: output?.contactId,
      cursor: output?.cursor,
      limit: output?.limit,
    };
  }
}
