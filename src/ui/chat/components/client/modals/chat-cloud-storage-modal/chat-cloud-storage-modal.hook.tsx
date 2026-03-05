'use client';

import type { SharedMediaItem } from '@module-chat/domain/interfaces';
import type {
  EmitSendImageMessageRequestDTO,
  EmitSendImageMessageResponseDTO,
  EmitSendDocumentMessageRequestDTO,
  EmitSendDocumentMessageResponseDTO,
} from '@module-chat/infrastructure/dtos';

import { useCallback, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

import { useSocket } from '@socketio/hooks/use-socket.hook';

import { Sounder } from '@sounder/classes/sounder.class';

import { MediaStorageStatus } from '@module-chat/domain/enums/media-storage-status.enum';
import { MediaTypes } from '@module-chat/domain/enums/media-types.enum';
import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { GetTeamSharedMediaQuery } from '@module-chat/infrastructure/queries/get-team-shared-media.query';
import { uploadChatMediaCommand } from '@module-chat/infrastructure/commands/upload-chat-media.command';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitSendImageMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-image-message.mapper';
import { EmitSendDocumentMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-document-message.mapper';

import { AlertSchemes as ToastSchemes } from '@gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum';
import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import { removeExtensionFromFilename } from '@filer/utils/remove-extension-from-filename.util';
import { useDebounce } from '@/src/packages/hook/use-debounce.hook';

export type CloudStorageTab = 'pc' | 'shared';

export interface SelectedLocalFile {
  id: string;
  file: File;
  previewUrl: string | null;
  parsedMediaType: MediaTypes;
}

export const useChatCloudStorageModal = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  const { showToast } = useToast();
  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const team = useContactStore(
    (state) => state.activeContact?.latestConversation?.team,
  );
  const activeContact = useContactStore((state) => state.activeContact);

  const addMessage = useChatStore((state) => state.addMessage);
  const updateOneMessageId = useChatStore((state) => state.updateOneMessageId);

  const [activeTab, setActiveTab] = useState<CloudStorageTab>('shared');

  const [selectedSharedMedia, setSelectedSharedMedia] = useState<
    SharedMediaItem[]
  >([]);
  const [selectedLocalFiles, setSelectedLocalFiles] = useState<
    SelectedLocalFile[]
  >([]);

  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  const [isUploading, setIsUploading] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const teamCodename = team?.id ?? '';

  const {
    data: sharedMediaData,
    isLoading: isLoadingSharedMedia,
    isError: isErrorSharedMedia,
    refetch: refetchSharedMedia,
  } = useQuery({
    queryKey: [
      queryKeysDictionary.GET_TEAM_SHARED_MEDIA,
      teamCodename,
      debouncedSearch,
    ],
    queryFn: () =>
      GetTeamSharedMediaQuery({
        teamCodename,
        search: debouncedSearch || undefined,
        limit: 20,
      }),
    enabled: !!teamCodename && activeTab === 'shared',
  });

  const onSelectMedia = useCallback((item: SharedMediaItem) => {
    setSelectedSharedMedia((prev) => {
      const isSelected = prev.some((media) => media.id === item.id);
      if (isSelected) {
        return prev.filter((media) => media.id !== item.id);
      }
      return [...prev, item];
    });
    setSelectedLocalFiles([]);
  }, []);

  const onTabChange = useCallback((tab: CloudStorageTab) => {
    setActiveTab(tab);
    setSelectedSharedMedia([]);
    setSelectedLocalFiles([]);
  }, []);

  const onSearchChange = useCallback((value: string) => {
    setSearch(value);
    setSelectedSharedMedia([]);
  }, []);

  const onSelectLocalFiles = useCallback((files: File[]) => {
    const newFiles = files.map((file) => {
      const isImage = file.type.startsWith('image/');
      const parsedMediaType = isImage
        ? MediaTypes.IMAGE
        : file.type.startsWith('video/')
          ? MediaTypes.VIDEO
          : file.type.startsWith('audio/')
            ? MediaTypes.AUDIO
            : MediaTypes.DOCUMENT;

      return {
        id: uuidv4(),
        file,
        previewUrl: isImage ? URL.createObjectURL(file) : null,
        parsedMediaType,
      };
    });

    setSelectedLocalFiles((prev) => [...prev, ...newFiles]);
    setSelectedSharedMedia([]);
  }, []);

  const onRemoveLocalFile = useCallback((index: number) => {
    setSelectedLocalFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const onSend = useCallback(async () => {
    if (
      (selectedLocalFiles.length === 0 && selectedSharedMedia.length === 0) ||
      !activeContact?.id ||
      !activeContact?.latestConversation?.id ||
      !activeContact?.latestConversation?.agent?.id ||
      !activeContact?.latestConversation?.agent?.name ||
      !emitWithAck ||
      !isConnectedAndStatusConnected
    )
      return;

    setIsSending(true);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_GNETWORK_API_BASE_URL ?? '';

      let playedSound = false;

      // If uploading from PC
      if (selectedLocalFiles.length > 0) {
        setIsUploading(true);
        try {
          // Loop over all selected files
          for (const localFile of selectedLocalFiles) {
            const parsedFilename =
              removeExtensionFromFilename(localFile.file.name) ||
              localFile.file.name;

            const mediaResponse = await uploadChatMediaCommand({
              file: localFile.file,
              filename: parsedFilename,
              mediaType: localFile.file.type || 'application/octet-stream',
              teamCodename,
            });

            if (!mediaResponse?.mediaId) continue;

            const mediaId = mediaResponse.mediaId;
            const finalDownloadUrl = localFile.previewUrl;
            const finalFilename = parsedFilename;
            const finalMimeType = localFile.file.type;
            const finalMediaType = localFile.parsedMediaType;

            const messageType =
              finalMediaType === MediaTypes.IMAGE
                ? MessageTypes.IMAGE
                : finalMediaType === MediaTypes.VIDEO
                  ? MessageTypes.VIDEO
                  : finalMediaType === MediaTypes.AUDIO
                    ? MessageTypes.AUDIO
                    : MessageTypes.DOCUMENT;

            const temporalMessageId = uuidv4();
            const optimisticMessage = {
              id: temporalMessageId,
              contacts: [],
              conversationId: activeContact.latestConversation.id,
              createdAt: new Date().toISOString().replace('Z', '000Z'),
              deliveredAt: null,
              direction: MessageDirections.OUTGOING,
              eventData: null,
              failedAt: null,
              forwarded: false,
              forwardedManyTimes: false,
              interactiveOptions: null,
              location: null,
              media: {
                id: mediaId,
                downloadUrl: finalDownloadUrl,
                filename: finalFilename,
                mimeType: finalMimeType,
                storageStatus: MediaStorageStatus.AVAILABLE,
                type: finalMediaType,
              },
              reactions: [],
              readAt: null,
              replyToMessage: null,
              sender: {
                id: activeContact.latestConversation.agent.id,
                isBot: false,
                name: activeContact.latestConversation.agent.name,
              },
              sentAt: null,
              status: MessageStatus.PENDING,
              text: null,
              type: messageType,
              updatedAt: null,
            };

            let responseMessageId: string | undefined;

            if (messageType === MessageTypes.DOCUMENT) {
              const request = EmitSendDocumentMessageMapper.mapTo({
                contactId: activeContact.id,
                mediaId,
                message: null,
              });

              if (!request) continue;
              addMessage(optimisticMessage);

              const ack = await emitWithAck<
                EmitSendDocumentMessageRequestDTO,
                EmitSendDocumentMessageResponseDTO
              >(socketEmissionsDictionary.SEND_DOCUMENT_MESSAGE, request);

              const parseAck = JSON.parse(ack as unknown as string);
              const response = EmitSendDocumentMessageMapper.mapFrom(parseAck);
              responseMessageId = response?.messageId;
            } else {
              const request = EmitSendImageMessageMapper.mapTo({
                contactId: activeContact.id,
                mediaId,
                message: null,
              });

              if (!request) continue;
              addMessage(optimisticMessage);

              const ack = await emitWithAck<
                EmitSendImageMessageRequestDTO,
                EmitSendImageMessageResponseDTO
              >(socketEmissionsDictionary.SEND_IMAGE_MESSAGE, request);

              const parseAck = JSON.parse(ack as unknown as string);
              const response = EmitSendImageMessageMapper.mapFrom(parseAck);
              responseMessageId = response?.messageId;
            }

            if (responseMessageId) {
              updateOneMessageId(temporalMessageId, responseMessageId);

              if (!playedSound) {
                const sounder = new Sounder(
                  '/sounds/whatsapp-emit-message.mp3',
                );
                sounder.playAudio();
                playedSound = true;
              }
            }
          }
          refetchSharedMedia();
        } catch {
          showToast('Error al procesar archivos locales', {
            duration: 3000,
            id: 'cloud-storage-upload-toast',
            position: 'top-right',
            scheme: ToastSchemes.ERROR,
          });
          setIsUploading(false);
          setIsSending(false);
          return;
        } finally {
          setIsUploading(false);
        }
      } else if (selectedSharedMedia.length > 0) {
        // If sending from Shared Storage
        for (const sharedMediaElement of selectedSharedMedia) {
          const temporalMessageId = uuidv4();
          const mediaId = sharedMediaElement.id;
          const finalDownloadUrl = `${baseUrl}/chat/media/${sharedMediaElement.id}`;
          const finalFilename =
            sharedMediaElement.storagePath?.split('/').pop() ??
            sharedMediaElement.id;
          const finalMimeType = sharedMediaElement.mimeType;

          const finalMediaType =
            sharedMediaElement.type === 'IMAGE'
              ? MediaTypes.IMAGE
              : sharedMediaElement.type === 'VIDEO'
                ? MediaTypes.VIDEO
                : sharedMediaElement.type === 'AUDIO'
                  ? MediaTypes.AUDIO
                  : sharedMediaElement.type === 'DOCUMENT'
                    ? MediaTypes.DOCUMENT
                    : MediaTypes.IMAGE;

          const messageType =
            finalMediaType === MediaTypes.IMAGE
              ? MessageTypes.IMAGE
              : finalMediaType === MediaTypes.VIDEO
                ? MessageTypes.VIDEO
                : finalMediaType === MediaTypes.AUDIO
                  ? MessageTypes.AUDIO
                  : MessageTypes.DOCUMENT;

          const optimisticMessage = {
            id: temporalMessageId,
            contacts: [],
            conversationId: activeContact.latestConversation.id,
            createdAt: new Date().toISOString().replace('Z', '000Z'),
            deliveredAt: null,
            direction: MessageDirections.OUTGOING,
            eventData: null,
            failedAt: null,
            forwarded: false,
            forwardedManyTimes: false,
            interactiveOptions: null,
            location: null,
            media: {
              id: mediaId,
              downloadUrl: finalDownloadUrl,
              filename: finalFilename,
              mimeType: finalMimeType,
              storageStatus: MediaStorageStatus.AVAILABLE,
              type: finalMediaType,
            },
            reactions: [],
            readAt: null,
            replyToMessage: null,
            sender: {
              id: activeContact.latestConversation.agent.id,
              isBot: false,
              name: activeContact.latestConversation.agent.name,
            },
            sentAt: null,
            status: MessageStatus.PENDING,
            text: null,
            type: messageType,
            updatedAt: null,
          };

          let responseMessageId: string | undefined;

          if (messageType === MessageTypes.DOCUMENT) {
            const request = EmitSendDocumentMessageMapper.mapTo({
              contactId: activeContact.id,
              mediaId,
              message: null,
            });

            if (!request) continue;
            addMessage(optimisticMessage);

            const ack = await emitWithAck<
              EmitSendDocumentMessageRequestDTO,
              EmitSendDocumentMessageResponseDTO
            >(socketEmissionsDictionary.SEND_DOCUMENT_MESSAGE, request);

            const parseAck = JSON.parse(ack as unknown as string);
            const response = EmitSendDocumentMessageMapper.mapFrom(parseAck);
            responseMessageId = response?.messageId;
          } else {
            const request = EmitSendImageMessageMapper.mapTo({
              contactId: activeContact.id,
              mediaId,
              message: null,
            });

            if (!request) continue;
            addMessage(optimisticMessage);

            const ack = await emitWithAck<
              EmitSendImageMessageRequestDTO,
              EmitSendImageMessageResponseDTO
            >(socketEmissionsDictionary.SEND_IMAGE_MESSAGE, request);

            const parseAck = JSON.parse(ack as unknown as string);
            const response = EmitSendImageMessageMapper.mapFrom(parseAck);
            responseMessageId = response?.messageId;
          }

          if (responseMessageId) {
            updateOneMessageId(temporalMessageId, responseMessageId);

            if (!playedSound) {
              const sounder = new Sounder('/sounds/whatsapp-emit-message.mp3');
              sounder.playAudio();
              playedSound = true;
            }
          }
        }
      }

      onClose();
      setSelectedSharedMedia([]);
      setSelectedLocalFiles([]);
    } catch (error) {
      console.error('[CloudStorage] onSend error:', error);
      showToast('Error al enviar el archivo', {
        duration: 3000,
        id: 'cloud-storage-send-toast',
        position: 'top-right',
        scheme: ToastSchemes.ERROR,
      });
    } finally {
      setIsSending(false);
    }
  }, [
    selectedSharedMedia,
    selectedLocalFiles,
    activeContact,
    emitWithAck,
    isConnectedAndStatusConnected,
    addMessage,
    updateOneMessageId,
    onClose,
    showToast,
    teamCodename,
    refetchSharedMedia,
  ]);

  const onReset = useCallback(() => {
    setSelectedSharedMedia([]);
    setSelectedLocalFiles([]);
    setSearch('');
    setActiveTab('shared');
  }, []);

  return {
    activeTab,
    isErrorSharedMedia,
    isLoadingSharedMedia,
    isSending,
    isUploading,
    onReset,
    onSearchChange,
    onSelectMedia,
    onSelectLocalFiles,
    onRemoveLocalFile,
    onSend,
    onTabChange,
    search,
    selectedSharedMedia,
    selectedLocalFiles,
    sharedMediaItems: sharedMediaData?.results ?? [],
    team,
    teamCodename,
  };
};
