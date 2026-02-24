import type { Message } from '../../domain/interfaces';
import type { OnChatMessageSentResponseDTO } from '../dtos';

import { MessageDirections } from '../../domain/enums/message-directions.enum';

/**
 * @name OnChatMessageSentMapper
 *
 * @description This mapper converts the on outgoing message response DTO to the message domain.
 */
export class OnChatMessageSentMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on outgoing message response DTO to the message domain.
   *
   * @param {OnOutgoingMessageResponseDTO} input - The on outgoing message response DTO.
   *
   * @returns {Message} The message domain.
   */
  static mapFrom(input: OnChatMessageSentResponseDTO): Message {
    return {
      id: input?.message_id,
      contacts: input?.contacts ?? [],
      conversationId: input?.conversation_id,
      createdAt: input?.created_at,
      deliveredAt: input?.delivered_at,
      direction: MessageDirections.OUTGOING,
      eventData: null,
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
      location: input?.location,
      media: input?.media
        ? {
            id: input?.media?.media_id,
            downloadUrl: null,
            filename: input?.media?.filename,
            mimeType: input?.media?.mime_type,
            storageStatus: input?.media?.storage_status,
            type: input?.media?.type,
          }
        : null,
      reactions: [],
      readAt: input?.read_at,
      replyToMessage: input?.reply_to_message
        ? {
            id: input.reply_to_message.id,
            sender: {
              id: input.reply_to_message.sender?.id,
              isBot: input.reply_to_message.sender?.is_bot,
              name: input.reply_to_message.sender?.name,
            },
            textPreview: input.reply_to_message.text_preview,
            type: input.reply_to_message.type,
          }
        : null,
      sender: {
        id: input?.sender?.id,
        isBot: input?.sender?.is_bot,
        name: input?.sender?.name,
      },
      sentAt: input?.sent_at,
      status: input?.status,
      text: input?.text,
      type: input?.type,
      updatedAt: input?.updated_at,
    };
  }
}
