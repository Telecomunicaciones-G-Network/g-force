'use client';

import {
  useEffect,
  useState,
  useCallback,
  useRef,
  startTransition,
} from 'react';

import { DEFAULT_SOCKET_LOG_COLOR } from '../constants/default-socket-log-color.constant';
import { DEFAULT_SOCKET_LOG_PREFIX } from '../constants/default-socket-log-prefix.constant';

import { socketLogColorsDictionary } from '../dictionaries/socket-log-colors.dictionary';

import { SocketLogLevels } from '../enums/socket-log-levels.enum';
import { SocketStatus } from '../enums/socket-status.enum';

import { useSocket } from './use-socket.hook';

export type ContactRoomStatus =
  | 'not_joined' // No se ha unido a la room
  | 'joining' // Intentando unirse a la room
  | 'joined' // Unido exitosamente a la room
  | 'leaving' // Saliendo de la room
  | 'disconnected' // Desconectado de la room (por pérdida de conexión del socket)
  | 'error'; // Error al unirse a la room

interface UseContactRoomStatusOptions {
  contactId: string | null | undefined;
  autoJoin?: boolean;
  joinRoomEventName?: string;
  leaveRoomEventName?: string;
}

interface UseContactRoomStatusReturn {
  roomStatus: ContactRoomStatus;
  isInRoom: boolean;
  isConnected: boolean;
  joinRoom: () => Promise<void>;
  leaveRoom: VoidFunction;
  error: string | null;
}

// TODO: joinRoomEventName default value should be extracted from constant inside of this library
// TODO: leaveRoomEventName default value should be extracted from constant inside of this library
export function useContactRoomStatus({
  autoJoin = true,
  contactId,
  joinRoomEventName = 'enter_chat_room',
  leaveRoomEventName = 'leave_chat_room',
}: UseContactRoomStatusOptions): UseContactRoomStatusReturn {
  const { emit, emitWithAck, isConnected, status } = useSocket();

  const [roomStatus, setRoomStatus] = useState<ContactRoomStatus>('not_joined');
  const [error, setError] = useState<string | null>(null);

  const currentContactIdRef = useRef<string | null | undefined>(contactId);
  const isJoiningRef = useRef<boolean>(false);
  const joinOperationIdRef = useRef<number>(0);
  const joinRoomRef = useRef<(() => Promise<void>) | null>(null);
  const leaveRoomRef = useRef<VoidFunction | null>(null);

  const log = useCallback(
    <T = unknown>(
      message: string,
      level: (typeof SocketLogLevels)[keyof typeof SocketLogLevels] = SocketLogLevels.INFO,
      data?: T,
    ) => {
      const color =
        socketLogColorsDictionary?.[level] ?? DEFAULT_SOCKET_LOG_COLOR;

      console.log(
        `%c${DEFAULT_SOCKET_LOG_PREFIX} ${message}`,
        color,
        data ?? '',
      );
    },
    [],
  );

  useEffect(() => {
    currentContactIdRef.current = contactId;
  }, [contactId]);

  const joinRoom = useCallback(async () => {
    const targetContactId = currentContactIdRef.current;

    if (!targetContactId || !emitWithAck || !isConnected) {
      startTransition(() => {
        setRoomStatus('not_joined');
      });
      isJoiningRef.current = false;
      return;
    }

    joinOperationIdRef.current += 1;
    const operationId = joinOperationIdRef.current;
    isJoiningRef.current = true;

    log('Starting joinRoom', SocketLogLevels.INFO, {
      operationId,
      targetContactId,
      isConnected,
      hasEmitWithAck: !!emitWithAck,
    });

    startTransition(() => {
      setRoomStatus('joining');
      setError(null);
    });

    try {
      const rawResponse = await emitWithAck<
        { contact_id: string },
        { success: boolean; message?: string } | string
      >(joinRoomEventName, { contact_id: targetContactId });

      let response: { success: boolean; message?: string };
      if (typeof rawResponse === 'string') {
        try {
          response = JSON.parse(rawResponse);
        } catch (parseError) {
          log('Failed to parse response as JSON', SocketLogLevels.ERROR, {
            rawResponse,
            parseError,
          });
          startTransition(() => {
            setRoomStatus('error');
            setError('Error al parsear la respuesta del servidor');
          });
          return;
        }
      } else if (
        rawResponse &&
        typeof rawResponse === 'object' &&
        'success' in rawResponse
      ) {
        response = rawResponse as { success: boolean; message?: string };
      } else {
        log('Invalid response structure', SocketLogLevels.ERROR, {
          rawResponse,
        });
        startTransition(() => {
          setRoomStatus('error');
          setError('Respuesta inválida del servidor');
        });
        return;
      }

      if (
        operationId !== joinOperationIdRef.current ||
        currentContactIdRef.current !== targetContactId
      ) {
        log(
          'Operation cancelled - operationId mismatch or contactId changed',
          SocketLogLevels.WARN,
        );
        return;
      }

      if (response.success === true) {
        log('Setting status to joined', SocketLogLevels.SUCCESS);
        startTransition(() => {
          setRoomStatus('joined');
          setError(null);
        });
      } else {
        log(
          'Setting status to error - success is false',
          SocketLogLevels.ERROR,
        );
        startTransition(() => {
          setRoomStatus('error');
          setError(response.message || 'Error al unirse a la room');
        });
      }
    } catch (err) {
      log('Error in joinRoom', SocketLogLevels.ERROR, {
        err,
        operationId,
        currentOperationId: joinOperationIdRef.current,
        targetContactId,
        currentContactId: currentContactIdRef.current,
      });

      if (
        operationId !== joinOperationIdRef.current ||
        currentContactIdRef.current !== targetContactId
      ) {
        log('Error ignored - operation cancelled', SocketLogLevels.WARN);
        return;
      }

      startTransition(() => {
        setRoomStatus('error');
        setError(
          err instanceof Error
            ? err.message
            : 'Error desconocido al unirse a la room',
        );
      });
    } finally {
      if (operationId === joinOperationIdRef.current) {
        isJoiningRef.current = false;
      }
    }
  }, [emitWithAck, isConnected, joinRoomEventName, log]);

  useEffect(() => {
    joinRoomRef.current = joinRoom;
  }, [joinRoom]);

  const leaveRoom = useCallback(() => {
    const targetContactId = currentContactIdRef.current;

    if (!targetContactId || !emit) {
      return;
    }

    joinOperationIdRef.current += 1;
    isJoiningRef.current = false;

    startTransition(() => {
      setRoomStatus('leaving');
      emit(leaveRoomEventName, { contact_id: targetContactId });
      setRoomStatus('not_joined');
      setError(null);
    });
  }, [emit, leaveRoomEventName]);

  useEffect(() => {
    leaveRoomRef.current = leaveRoom;
  }, [leaveRoom]);

  useEffect(() => {
    if (!autoJoin) return;
    if (!contactId || !isConnected) {
      startTransition(() => {
        setRoomStatus('not_joined');
      });
      return;
    }

    const currentContactId = contactId;
    const joinRoomFn = joinRoomRef.current;

    if (joinRoomFn) {
      joinRoomFn();
    }

    return () => {
      if (currentContactIdRef.current === currentContactId) {
        const leaveRoomFn = leaveRoomRef.current;
        if (leaveRoomFn) {
          leaveRoomFn();
        }
      }
    };
  }, [contactId, isConnected, autoJoin]);

  useEffect(() => {
    if (roomStatus === 'joined' && !isConnected) {
      startTransition(() => {
        setRoomStatus('disconnected');
      });
    } else if (
      roomStatus === 'disconnected' &&
      isConnected &&
      contactId &&
      autoJoin &&
      !isJoiningRef.current
    ) {
      const joinRoomFn = joinRoomRef.current;
      if (joinRoomFn) {
        joinRoomFn();
      }
    }
  }, [isConnected, roomStatus, contactId, autoJoin]);

  useEffect(() => {
    if (
      status === SocketStatus.CONNECTED &&
      roomStatus === 'disconnected' &&
      contactId &&
      autoJoin &&
      !isJoiningRef.current
    ) {
      const joinRoomFn = joinRoomRef.current;
      if (joinRoomFn) {
        joinRoomFn();
      }
    }
  }, [status, roomStatus, contactId, autoJoin]);

  return {
    roomStatus,
    isInRoom: roomStatus === 'joined',
    isConnected: Boolean(isConnected && status === SocketStatus.CONNECTED),
    joinRoom,
    leaveRoom,
    error,
  };
}
