import type { Message } from '../../domain/interfaces';
import type { OnChatMessageReceivedResponseDTO } from '../dtos';

import { MessageDirections } from '../../domain/enums/message-directions.enum';
import { MessageStatus } from '../../domain/enums/message-status.enum';

/**
 * @name OnChatMessageReceivedMapper
 *
 * @description This mapper converts the on incomming message response DTO to the message domain.
 */
export class OnChatMessageReceivedMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on incomming message response DTO to the message domain.
   *
   * @param {OnIncommingMessageResponseDTO} input - The on incomming message response DTO.
   *
   * @returns {Message | null} The message domain.
   */
  static mapFrom(input: OnChatMessageReceivedResponseDTO): Message | null {
    return {
      id: input?.message_id,
      contacts: input?.contacts
        ? input?.contacts.map((contact) => ({
            birthday: contact.birthday,
            emails: contact.emails,
            formattedName: contact.formatted_name,
            phoneNumbers: contact.phone_numbers,
            urls: contact.urls,
          }))
        : [],
      conversationId: input?.conversation_id,
      createdAt: input?.timestamp,
      deliveredAt: input?.timestamp,
      direction: MessageDirections.INCOMING,
      eventData: null,
      failedAt: null,
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
      readAt: input?.timestamp,
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
        id: input?.contact_id,
        isBot: false,
        name: input?.contact_name,
      },
      sentAt: input?.timestamp,
      status: MessageStatus.DELIVERED,
      text: input?.text ?? null,
      type: input?.type,
      updatedAt: input?.timestamp,
    };
  }
}
