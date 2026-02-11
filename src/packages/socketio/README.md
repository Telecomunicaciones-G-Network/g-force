# Socket.IO Client Package

An optimized and type-safe package for integrating Socket.IO in React/Next.js applications.

## 🚀 Features

- ✅ **Type-Safe**: Fully typed with TypeScript
- ✅ **React Hooks**: Custom hooks for easy integration
- ✅ **Context API**: Share the connection across the application
- ✅ **Auto-reconnection**: Automatic reconnection handling
- ✅ **Optimized**: Prevents multiple connections
- ✅ **Debug Mode**: Logging system with custom colors
- ✅ **Automatic cleanup**: Proper cleanup of listeners and connections
- ✅ **Authentication**: Support for authentication tokens
- ✅ **URL Parsing**: Smart URL parsing with automatic path detection
- ✅ **Clean architecture**: Modular organization with separation of concerns

## 📦 Installation

This package is already included in the project. You only need `socket.io-client`:

```bash
bun add socket.io-client
```

## 🎯 Quick Start

### 1. Configure the Provider

Wrap your application with `SocketProvider` at the top level (for example, in your layout):

```tsx
// app/layout.tsx or app/providers.tsx
import { SocketProvider } from "@/packages/socketio";

const socketConfig = {
  url: "https://dev.g-office.app/api/chat/socket.io",
  namespace: "/chat",
  autoConnect: true,
  debug: process.env.NODE_ENV === "development",
};

export default function RootLayout({ children }) {
  // Get the authentication token (example)
  const token = "your-auth-token"; // or null if there's no token

  return (
    <html>
      <body>
        <SocketProvider config={socketConfig} token={token}>
          {children}
        </SocketProvider>
      </body>
    </html>
  );
}
```

> **Note**: The `token` parameter is optional. If provided, it will be automatically sent in the authentication handshake.

### 2. Use in Components

#### Option A: `useSocket` Hook

```tsx
"use client";

import { useSocket } from "@/packages/socketio";

export function ChatComponent() {
  const { socket, status, isConnected, emit, on } = useSocket();

  // Send message
  const sendMessage = (message: string) => {
    emit("send_message", { text: message });
  };

  // Listen to events
  useEffect(() => {
    if (!socket) return;

    const unsubscribe = on("new_message", (data) => {
      console.log("New message:", data);
    });

    return unsubscribe;
  }, [socket, on]);

  return (
    <div>
      <p>Status: {status}</p>
      <button onClick={() => sendMessage("Hello!")}>
        Send
      </button>
    </div>
  );
}
```

#### Option B: `useSocketEvent` Hook (Recommended)

```tsx
"use client";

import { useSocket, useSocketEvent } from "@/packages/socketio";
import { useState } from "react";

interface Message {
  id: string;
  text: string;
  user: string;
  timestamp: number;
}

export function ChatComponent() {
  const { emit, isConnected } = useSocket();
  const [messages, setMessages] = useState<Message[]>([]);

  // Listen to new messages (auto cleanup)
  useSocketEvent<Message>("new_message", (message) => {
    setMessages((prev) => [...prev, message]);
  });

  // Listen when someone is typing
  useSocketEvent<{ user: string; isTyping: boolean }>("typing", (data) => {
    console.log(`${data.user} is typing:`, data.isTyping);
  });

  const sendMessage = (text: string) => {
    if (!isConnected) return;

    emit("send_message", {
      text,
      timestamp: Date.now(),
    });
  };

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <div key={msg.id}>{msg.text}</div>
        ))}
      </div>
      <button onClick={() => sendMessage("Hello!")}>
        Send
      </button>
    </div>
  );
}
```

## 📚 API Reference

### `SocketProvider`

Context provider for the Socket.IO connection.

**Props:**
- `config: SocketConfig` - Socket configuration (required)
- `token: string | null` - Authentication token (required, can be null)
- `children: ReactNode` - Child components

**Example:**
```tsx
<SocketProvider config={socketConfig} token={authToken}>
  <App />
</SocketProvider>
```

### `useSocket()`

Main hook for interacting with the socket.

**Returns:**
```typescript
{
  socket: SocketClient | null;
  status: SocketStatus;
  isConnected: boolean;
  emit: (event: string, data?: unknown) => void;
  on: <T>(event: string, listener: (data: T) => void) => VoidFunction;
  off: <T>(event: string, listener?: (data: T) => void) => void;
  once: <T>(event: string, listener: (data: T) => void) => void;
}
```

### `useSocketEvent<T>(event, listener, deps?)`

Hook to listen to specific events with auto-cleanup.

**Params:**
- `event: string` - Event name to listen to
- `listener: (data: T) => void` - Callback function
- `deps?: unknown[]` - Optional dependencies (like useEffect)

**Example:**
```tsx
useSocketEvent<Message>("new_message", (message) => {
  console.log("New message:", message);
});
```

### `useContactRoomStatus(options)`

Hook to track the connection status to a specific contact room. This hook automatically manages joining and leaving rooms, and detects disconnections.

**Params:**
- `options.contactId: string | null | undefined` - The contact ID to track
- `options.autoJoin?: boolean` - Whether to automatically join the room when contactId changes (default: `true`)

**Returns:**
```typescript
{
  roomStatus: ContactRoomStatus; // 'not_joined' | 'joining' | 'joined' | 'leaving' | 'disconnected' | 'error'
  isInRoom: boolean; // true if successfully joined to the room
  isConnected: boolean; // true if socket is connected
  joinRoom: () => Promise<void>; // Manually join the room
  leaveRoom: VoidFunction; // Manually leave the room
  error: string | null; // Error message if any
}
```

**Example:**
```tsx
import { useContactRoomStatus } from "@/packages/socketio";

function ChatComponent() {
  const activeContact = useContactStore((state) => state.activeContact);

  const {
    roomStatus,
    isInRoom,
    isSocketConnected,
    error,
  } = useContactRoomStatus({
    contactId: activeContact?.id,
    autoJoin: true,
  });

  // Check if user is connected to the room
  if (roomStatus === 'joined') {
    console.log('User is in the contact room');
  }

  // Check if user disconnected from the room
  if (roomStatus === 'disconnected') {
    console.log('User lost connection to the room');
  }

  // Check if there was an error
  if (roomStatus === 'error') {
    console.error('Error joining room:', error);
  }

  return (
    <div>
      {roomStatus === 'joined' && <div>Connected to room</div>}
      {roomStatus === 'disconnected' && <div>Connection lost</div>}
      {roomStatus === 'error' && <div>Error: {error}</div>}
    </div>
  );
}
```

**Room Status Values:**
- `'not_joined'` - Not joined to the room
- `'joining'` - Attempting to join the room
- `'joined'` - Successfully joined to the room
- `'leaving'` - Leaving the room
- `'disconnected'` - Lost connection to the room (socket disconnected)
- `'error'` - Error occurred while joining the room

### `useSocketContext()`

Hook to access the socket context directly.

**Returns:**
```typescript
{
  socket: SocketClient | null;
}
```

**Example:**
```tsx
import { useSocketContext } from "@/packages/socketio";

function MyComponent() {
  const { socket } = useSocketContext();

  // Use the socket directly
  socket?.emit("my_event", data);
}
```

> **Note**: This hook must be used within a `SocketProvider`. If used outside, it will throw an error.

### `SocketClient`

Main Socket.IO client class.

**Methods:**
- `connect()` - Connect to the server
- `disconnect()` - Disconnect from the server
- `emit(event, data?)` - Emit an event
- `on(event, listener)` - Listen to an event
- `off(event, listener?)` - Stop listening to an event
- `once(event, listener)` - Listen to an event once
- `getStatus()` - Get connection status
- `isConnected()` - Check if connected
- `getId()` - Get socket ID
- `destroy()` - Clean up and destroy the client

## 🔧 Configuration

### `SocketConfig`

```typescript
interface SocketConfig extends Partial<ManagerOptions & SocketOptions> {
  url: string;                    // Server URL (required)
  namespace?: string;             // Namespace (default: "/")
  autoConnect?: boolean;          // Auto-connect (default: true)
  debug?: boolean;               // Debug mode (default: false)
  path?: string;                 // Socket path (auto-detected if not provided)

  // Socket.IO options (all optional)
  reconnection?: boolean;        // Enable reconnection (default: true)
  reconnectionDelay?: number;    // Initial delay (default: 1000ms)
  reconnectionDelayMax?: number; // Maximum delay (default: 5000ms)
  reconnectionAttempts?: number; // Maximum attempts (default: 5)
  timeout?: number;              // Connection timeout (default: 20000ms)
  transports?: string[];         // Transports (default: ["websocket", "polling"])
  auth?: object;                 // Custom authentication data
  // ... and all ManagerOptions and SocketOptions options
}
```

### `SocketStatus`

Possible connection states:

```typescript
enum SocketStatus {
  CONNECTED = 'connected',       // Successfully connected
  CONNECTING = 'connecting',     // Attempting to connect
  DISCONNECTED = 'disconnected', // Disconnected
  ERROR = 'error',              // Connection error
  RECONNECTING = 'reconnecting', // Attempting to reconnect
}
```

### `SocketLogLevels`

Available log levels:

```typescript
enum SocketLogLevels {
  INFO = 'info',       // General information (blue)
  WARN = 'warn',       // Warnings (orange)
  ERROR = 'error',     // Errors (red)
  SUCCESS = 'success', // Successful operations (green)
}
```

## 🎨 Complete Examples

### Real-Time Chat

```tsx
"use client";

import { useSocket, useSocketEvent } from "@/packages/socketio";
import { useState, useCallback } from "react";

interface ChatMessage {
  id: string;
  text: string;
  user: string;
  timestamp: number;
}

export function ChatRoom() {
  const { emit, isConnected, status } = useSocket();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Listen to new messages
  useSocketEvent<ChatMessage>("message", (message) => {
    setMessages((prev) => [...prev, message]);
  });

  // Listen when a user joins
  useSocketEvent<{ user: string }>("user_joined", ({ user }) => {
    console.log(`${user} joined the chat`);
  });

  // Listen when a user leaves
  useSocketEvent<{ user: string }>("user_left", ({ user }) => {
    console.log(`${user} left the chat`);
  });

  const sendMessage = useCallback(() => {
    if (!inputValue.trim() || !isConnected) return;

    emit("send_message", {
      text: inputValue,
      timestamp: Date.now(),
    });

    setInputValue("");
  }, [inputValue, isConnected, emit]);

  return (
    <div className="chat-room">
      <div className="status">
        Status: {status} {isConnected ? "🟢" : "🔴"}
      </div>

      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          disabled={!isConnected}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} disabled={!isConnected}>
          Send
        </button>
      </div>
    </div>
  );
}
```

### Real-Time Notifications

```tsx
"use client";

import { useSocketEvent } from "@/packages/socketio";
import { useState } from "react";

interface Notification {
  id: string;
  type: "info" | "warning" | "error" | "success";
  message: string;
}

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useSocketEvent<Notification>("notification", (notification) => {
    setNotifications((prev) => [...prev, notification]);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((n) => n.id !== notification.id)
      );
    }, 5000);
  });

  return (
    <div className="notifications">
      {notifications.map((notif) => (
        <div key={notif.id} className={`notification ${notif.type}`}>
          {notif.message}
        </div>
      ))}
    </div>
  );
}
```

## 🔍 Debugging

Enable debug mode to see detailed logs with colors:

```tsx
const socketConfig = {
  url: "https://dev.g-office.app/api/chat/socket.io",
  namespace: "/chat",
  debug: true, // ← Enable debug
};
```

You'll see colored logs in the console:
- 🔵 **INFO** (blue): `[Socket] Connecting to...`
- 🟢 **SUCCESS** (green): `[Socket] Connected with ID: abc123`
- 🟠 **WARN** (orange): `[Socket] Cannot emit "event": Socket not connected`
- 🔴 **ERROR** (red): `[Socket] Connection error: Network failure`

### Log customization

The logging system uses custom CSS colors:
- **INFO**: `color: #3498db` (blue)
- **SUCCESS**: `color: #2ecc71` (green)
- **WARN**: `color: #f39c12` (orange)
- **ERROR**: `color: #e74c3c` (red)

### Automatically logged events

With `debug: true`, the following are logged:
- Connections and disconnections
- Reconnection attempts
- Event emissions
- Listener registration and removal
- Connection errors
- Socket status

## 🔗 Smart URL Parsing

The package includes a URL parser that automatically detects the socket path:

### Supported URL examples:

```tsx
// URL with custom Socket.IO path
const config1 = {
  url: "https://api.example.com/api/chat/socket.io",
  namespace: "/chat"
};
// Result: baseUrl = "https://api.example.com/api/chat"
//         path = "/api/chat/socket.io"

// Simple URL without path
const config2 = {
  url: "https://api.example.com",
  namespace: "/chat"
};
// Result: baseUrl = "https://api.example.com"
//         path = "/socket.io" (default)

// URL with explicit path
const config3 = {
  url: "https://api.example.com",
  path: "/custom/socket.io",
  namespace: "/chat"
};
// Uses the explicitly provided path
```

### Parser advantages:

- ✅ Automatically detects the correct path
- ✅ Handles complex URLs with multiple segments
- ✅ Allows manual path override
- ✅ Compatible with legacy configurations
- ✅ Correctly separates baseUrl and path

## ⚡ Optimizations

1. **Singleton Connection**: The provider ensures a single shared connection
2. **Auto Cleanup**: Hooks automatically clean up listeners
3. **Ref Stability**: Uses internal refs to avoid unnecessary re-renders
4. **Lazy Connection**: Option for `autoConnect: false` to connect manually
5. **WebSocket First**: Prioritizes WebSocket over polling for better performance
6. **Smart URL Parsing**: Smart URL parsing without manual configuration
7. **Event Listener Management**: Efficient listener management system with Map

## 🛠️ Troubleshooting

### Socket doesn't connect

1. Verify that the URL is correct
2. Verify that the namespace is correct
3. Enable `debug: true` to see colored logs
4. Check CORS on the backend
5. Verify that the socket path is correct (use the automatic parser or specify manually)

### Multiple connections

- Make sure you have only one `SocketProvider` in your app
- Don't instantiate `SocketClient` directly, use the hooks
- The provider uses `useRef` to maintain a single instance

### Duplicate listeners

- Use `useSocketEvent` instead of `useEffect` + `on`
- The hook handles cleanup automatically
- Verify that you're not registering the same listener multiple times

### Error: "useSocketContext must be used within a SocketProvider"

- Make sure your component is inside a `SocketProvider`
- Verify that the provider is mounted before using the hooks
- Don't use the hooks in Server Components

## 🔄 Migration from Previous Version

If you're updating from the previous version of the package, here are the main changes:

### Breaking Changes:

1. **SocketProvider now requires the `token` parameter**:
```tsx
// ❌ Before
<SocketProvider config={config}>

// ✅ Now
<SocketProvider config={config} token={token}>
// or
<SocketProvider config={config} token={null}>
```

2. **New `useSocketContext` hook**:
```tsx
// ✅ New hook for direct socket access
const { socket } = useSocketContext();
```

3. **Reorganized folder structure**:
   - Files are now organized in folders by type
   - Update your imports if you were importing specific files

### New Features:

- ✅ Colored logging system
- ✅ Enums for states and log levels
- ✅ Automatic URL parser
- ✅ Better listener management with Map
- ✅ Support for authentication tokens

### Non-breaking Changes:

- The `useSocket` and `useSocketEvent` hooks maintain the same API
- Socket configuration is backward compatible
- Usage examples remain valid

## 📝 Notes

- This package is optimized for Next.js 13+ with App Router
- Use `"use client"` in components that use the hooks
- The provider must be in a Client Component
- Compatible with React 19
- Requires Socket.IO Client v4.0+

## 📂 Package Structure

The package is organized following clean architecture principles:

```
src/packages/socketio/
├── classes/              # Main classes
│   └── socket-client.class.ts
├── configs/              # Default configurations
│   └── socket.config.ts
├── constants/            # Global constants
│   ├── default-socket-log-color.constant.ts
│   ├── default-socket-log-prefix.constant.ts
│   └── default-socket-path.constant.ts
├── contexts/             # React contexts
│   ├── socket-context.props.ts
│   └── socket.context.tsx
├── dictionaries/         # Data dictionaries
│   └── socket-log-colors.dictionary.ts
├── enums/                # Enumerations
│   ├── socket-log-levels.enum.ts
│   └── socket-status.enum.ts
├── hooks/                # React Hooks
│   ├── use-socket-context.hook.tsx
│   ├── use-socket-event.hook.tsx
│   └── use-socket.hook.tsx
├── interfaces/           # TypeScript interfaces
│   ├── index.ts
│   └── socket-config.interface.ts
├── providers/            # React providers
│   ├── socket-provider.props.ts
│   └── socket.provider.tsx
├── types/                # TypeScript types
│   ├── index.ts
│   ├── socket-event-listener.type.ts
│   ├── socket-events.type.ts
│   ├── socket-log-level.type.ts
│   └── socket-status.type.ts
└── README.md
```

### Advantages of this structure:

1. **Modularity**: Each component has a clear responsibility
2. **Scalability**: Easy to extend with new features
3. **Maintainability**: Organized and easy to maintain code
4. **Type Safety**: Well-defined types and interfaces
5. **Reusability**: Reusable and decoupled components

## 🔐 Authentication

The package supports authentication via tokens:

### Using the token in the Provider

```tsx
import { SocketProvider } from "@/packages/socketio";
import { getAuthToken } from "@/auth";

export function AppProviders({ children }) {
  const token = getAuthToken(); // Your method to get the token

  return (
    <SocketProvider config={socketConfig} token={token}>
      {children}
    </SocketProvider>
  );
}
```

### Custom authentication

If you need to send additional authentication data:

```tsx
const socketConfig = {
  url: "https://api.example.com",
  auth: {
    token: "your-token",
    userId: "12345",
    customData: "additional-data"
  }
};
```

> **Note**: If you use the `token` parameter in the provider, it will be automatically added to the `auth` object.

## 🧪 Testing

For testing, you can mock the socket:

```tsx
import { SocketContext } from "@/packages/socketio/contexts/socket.context";

const mockSocket = {
  emit: jest.fn(),
  on: jest.fn(() => () => {}),
  off: jest.fn(),
  isConnected: () => true,
  getStatus: () => 'connected',
};

function TestWrapper({ children }) {
  return (
    <SocketContext.Provider value={{ socket: mockSocket }}>
      {children}
    </SocketContext.Provider>
  );
}

// Use TestWrapper in your tests
render(<YourComponent />, { wrapper: TestWrapper });
```

## 🤝 Contributing

To report bugs or suggest improvements, contact the GNetwork development team.

---

**Developed by**: GNetwork Telecommunications
**License**: GNETWORK
**Version**: 2.0.0

