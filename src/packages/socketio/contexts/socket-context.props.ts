import { SocketClient } from '../classes/socket-client.class';

export interface SocketContextValue {
  socket: SocketClient | null;
}
