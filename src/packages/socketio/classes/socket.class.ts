import type { SocketClientGetInstanceParams } from '../interfaces';

import { io, Socket } from 'socket.io-client';

import { SOCKET_DEFAULT_CONFIG } from '../constant/socket-default-config.constant';
import { SOCKET_DEFAULT_PATHNAME } from '../constant/socket-default-pathname.constant';

export class SocketClient {
  private static connecting = false;
  private static instance: Socket | null = null;

  public static getInstance({
    socketUrl = SOCKET_DEFAULT_PATHNAME,
    config = SOCKET_DEFAULT_CONFIG,
  }: SocketClientGetInstanceParams): Socket | null {
    if (!SocketClient.instance && !SocketClient.connecting) {
      SocketClient.connecting = true;
      SocketClient.instance = io(socketUrl, config);
      SocketClient.connecting = false;
    }

    if (!SocketClient.instance) {
      console.error('SocketIOClient instance is not initialized.');

      return null;
    }

    return SocketClient.instance;
  }

  public static disconnect() {
    if (SocketClient?.instance) {
      SocketClient.instance?.disconnect();
      SocketClient.instance = null;
    }
  }
}
