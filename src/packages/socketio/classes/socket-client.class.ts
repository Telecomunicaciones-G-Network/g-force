import type { Socket } from 'socket.io-client';
import type { SocketConfig } from '../interfaces';
import type {
  SocketEventListener,
  SocketLogLevel,
  SocketStatus,
} from '../types';

import { io } from 'socket.io-client';

import { socketConfig } from '../configs/socket.config';

import { DEFAULT_SOCKET_LOG_COLOR } from '../constants/default-socket-log-color.constant';
import { DEFAULT_SOCKET_LOG_PREFIX } from '../constants/default-socket-log-prefix.constant';
import { DEFAULT_SOCKET_PATH } from '../constants/default-socket-path.constant';

import { socketLogColorsDictionary } from '../dictionaries/socket-log-colors.dictionary';

import { SocketLogLevels } from '../enums/socket-log-levels.enum';
import { SocketStatus as SocketStatusValues } from '../enums/socket-status.enum';

export class SocketClient {
  private config: SocketConfig;
  private eventListeners: Map<string, Set<SocketEventListener>> = new Map();
  private maxReconnectAttempts = 5;
  private reconnectAttempts = 0;
  private socket: Socket | null = null;
  private status: SocketStatus = SocketStatusValues.DISCONNECTED;

  constructor(config: SocketConfig) {
    this.config = {
      ...socketConfig,
      ...config,
    };

    this.maxReconnectAttempts = this.config.reconnectionAttempts || 5;

    if (this.config.autoConnect) {
      this.connect();
    }
  }

  private log<T = unknown>(
    message: string,
    level: SocketLogLevel = SocketLogLevels.INFO,
    data?: T,
  ) {
    if (!this.config?.debug) return;

    console.log(
      `%c${DEFAULT_SOCKET_LOG_PREFIX} ${message}`,
      socketLogColorsDictionary?.[level] ?? DEFAULT_SOCKET_LOG_COLOR,
      data ?? '',
    );
  }

  private setupEventHandlers() {
    if (!this.socket) return;

    this.socket.on('connect', () => {
      this.status = SocketStatusValues.CONNECTED;
      this.reconnectAttempts = 0;
      this.log(
        `Connected with ID: ${this.socket?.id}`,
        SocketLogLevels.SUCCESS,
      );
    });

    this.socket.on('disconnect', (reason) => {
      this.status = SocketStatusValues.DISCONNECTED;
      this.log(`Disconnected: ${reason}`, SocketLogLevels.WARN);
    });

    this.socket.on('connect_error', (error) => {
      this.status = SocketStatusValues.ERROR;
      this.reconnectAttempts++;
      this.log(
        `Connection error (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts}): ${error.message}`,
        SocketLogLevels.ERROR,
      );
    });

    this.socket.on('reconnect', (attemptNumber) => {
      this.status = SocketStatusValues.CONNECTED;
      this.reconnectAttempts = 0;
      this.log(
        `Reconnected after ${attemptNumber} attempts`,
        SocketLogLevels.SUCCESS,
      );
    });

    this.socket.on('reconnecting', (attemptNumber) => {
      this.status = SocketStatusValues.RECONNECTING;
      this.log(
        `Reconnecting... (attempt ${attemptNumber})`,
        SocketLogLevels.INFO,
      );
    });

    this.socket.on('reconnect_failed', () => {
      this.status = SocketStatusValues.ERROR;
      this.log(
        'Reconnection failed after maximum attempts',
        SocketLogLevels.ERROR,
      );
    });

    for (const [event, listeners] of this.eventListeners.entries()) {
      for (const listener of listeners) {
        this.socket.on(event, listener);
      }
    }
  }

  public connect() {
    if (this.socket?.connected) {
      this.log('Already connected');

      return;
    }

    this.status = SocketStatusValues.CONNECTING;

    const { url, namespace = '/', path: configPath, ...options } = this.config;
    let baseUrl = url;
    let path = configPath;

    if (!path) {
      const parsed = this.parseUrl(url);

      baseUrl = parsed.baseUrl;
      path = parsed.path;
    }

    const fullUrl = namespace === '/' ? baseUrl : `${baseUrl}${namespace}`;

    this.log(`Connecting to ${fullUrl} with path: ${path}...`);

    this.socket = io(fullUrl, {
      ...options,
      path: path,
    });

    this.setupEventHandlers();
  }

  private parseUrl(url: string): { baseUrl: string; path: string } {
    try {
      const urlObj = new URL(url);
      const { protocol, host, pathname } = urlObj;

      const { path, basePath } = this.parsePath(pathname);
      const baseUrl = `${protocol}//${host}${basePath}`;

      return { baseUrl, path };
    } catch {
      return { baseUrl: url, path: '/socket.io' };
    }
  }

  private parsePath(pathname: string): { path: string; basePath: string } {
    if (!pathname || pathname === '/') {
      return { path: DEFAULT_SOCKET_PATH, basePath: '' };
    }

    if (pathname.endsWith('/socket.io')) {
      return { path: pathname, basePath: '' };
    }

    if (pathname.includes('/socket.io/')) {
      const socketIoIndex = pathname.indexOf('/socket.io/');
      const path = pathname.substring(0, socketIoIndex + '/socket.io'.length);

      return { path, basePath: '' };
    }

    return { path: DEFAULT_SOCKET_PATH, basePath: pathname };
  }

  public destroy(): void {
    this.eventListeners.clear();
    this.disconnect();
    this.socket = null;
    this.log('Socket client destroyed');
  }

  public disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.status = SocketStatusValues.DISCONNECTED;
      this.log('Disconnected');
    }
  }

  public emit<T = unknown>(event: string, data?: T) {
    if (!this.socket?.connected) {
      this.log(
        `Cannot emit "${event}": Socket not connected`,
        SocketLogLevels.WARN,
      );

      return;
    }

    this.socket.emit(event, data);
    this.log(`Emitted event: ${event}`, SocketLogLevels.INFO, data);
  }

  public getId(): string | undefined {
    return this.socket?.id;
  }

  public getStatus(): SocketStatus {
    return this.status;
  }

  public isConnected(): boolean {
    return this.socket?.connected ?? false;
  }

  public off<T = unknown>(event: string, listener?: SocketEventListener<T>) {
    if (listener) {
      this.eventListeners.get(event)?.delete(listener as SocketEventListener);
      this.socket?.off(event, listener);
      this.log(`Removed listener for event: ${event}`);
    } else {
      this.eventListeners.delete(event);
      this.socket?.off(event);
      this.log(`Removed all listeners for event: ${event}`);
    }
  }

  public on<T = unknown>(
    event: string,
    listener: SocketEventListener<T>,
  ): () => void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set());
    }

    this.eventListeners.get(event)?.add(listener as SocketEventListener);

    if (this.socket) {
      this.socket.on(event, listener);
    }

    this.log(`Registered listener for event: ${event}`);

    return () => this.off(event, listener);
  }

  public once<T = unknown>(event: string, listener: SocketEventListener<T>) {
    if (!this.socket) return;

    this.socket.once(event, listener);
    this.log(`Registered one-time listener for event: ${event}`);
  }
}
