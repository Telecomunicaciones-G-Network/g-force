# 🔌 Socket.IO Package

A production-ready, performance-optimized Socket.IO implementation for Next.js 15+ with React 19+ support.

## ✨ Features

- 🚀 **Singleton Pattern** - Single WebSocket connection shared across your entire application
- ⚡ **React 19 Ready** - Uses the new `use` hook instead of `useContext`
- 🎯 **Type-Safe** - Full TypeScript support with strict typing
- 🔄 **Auto-Reconnection** - Built-in reconnection logic with configurable attempts
- 🎨 **Clean API** - Intuitive hooks for emitting and listening to events
- 🔥 **Performance Optimized** - Prevents unnecessary re-renders and memory leaks
- 📦 **Zero Configuration** - Works out of the box with sensible defaults
- 🛡️ **Thread-Safe** - Race condition prevention built-in

---

## 📦 Installation

```bash
# This package uses socket.io-client as a peer dependency
bun add socket.io-client
```

---

## 🚀 Quick Start

### 1. Wrap Your App with SocketProvider

```typescript
// app/(private)/layout.tsx
import { SocketProvider } from '@/packages/socketio/providers/socket.provider';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <SocketProvider>
      {children}
    </SocketProvider>
  );
}
```

### 2. Use Socket in Any Component

```typescript
'use client';

import { useSocket } from '@/packages/socketio/hooks/use-socket.hook';
import { useSocketEvent } from '@/packages/socketio/hooks/use-socket-event.hook';
import { useSocketEmit } from '@/packages/socketio/hooks/use-socket-emit.hook';

function ChatComponent() {
  const { socket, isConnected } = useSocket();
  const { emit } = useSocketEmit();

  // Listen to events
  useSocketEvent('message:new', (data) => {
    console.log('New message:', data);
  });

  // Emit events
  const sendMessage = () => {
    emit('message:send', { text: 'Hello!' });
  };

  return (
    <div>
      <p>Status: {isConnected ? '🟢 Connected' : '🔴 Disconnected'}</p>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}
```

---

## 📚 API Reference

### Hooks

#### `useSocket()`

Access the Socket.IO instance and connection status.

```typescript
const { socket, isConnected } = useSocket();
```

**Returns:**
- `socket: Socket | null` - The Socket.IO client instance
- `isConnected: boolean` - Current connection status

**Example:**

```typescript
const { socket, isConnected } = useSocket();

useEffect(() => {
  if (isConnected) {
    console.log('Socket ID:', socket?.id);
  }
}, [isConnected, socket]);
```

---

#### `useSocketEvent<T>(eventName, callback)`

Listen to Socket.IO events with automatic cleanup.

```typescript
useSocketEvent<MessageData>('message:new', (data) => {
  console.log('Received:', data);
});
```

**Parameters:**
- `eventName: string` - The event name to listen to
- `callback: (data: T) => void` - Handler function for the event

**Features:**
- ✅ Automatic listener cleanup on unmount
- ✅ Callback reference stability (no re-subscriptions)
- ✅ Type-safe event data with generics

**Example:**

```typescript
interface ChatMessage {
  id: string;
  text: string;
  userId: string;
}

function ChatMessages() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useSocketEvent<ChatMessage>('message:new', (message) => {
    setMessages(prev => [...prev, message]);
  });

  return <MessageList messages={messages} />;
}
```

---

#### `useSocketEmit<T>()`

Emit Socket.IO events with optional debouncing.

```typescript
const { emit, emitDebounced } = useSocketEmit<SendMessageData>();
```

**Returns:**
- `emit(event, data)` - Emit an event immediately
- `emitDebounced(event, data, delay?)` - Emit with debouncing (default: 300ms)

**Example:**

```typescript
function TypingIndicator() {
  const { emit, emitDebounced } = useSocketEmit();

  const handleTyping = () => {
    // Debounced - won't spam the server
    emitDebounced('user:typing', { isTyping: true }, 500);
  };

  const sendMessage = (text: string) => {
    // Immediate
    emit('message:send', { text });
  };

  return (
    <input
      onChange={handleTyping}
      onKeyPress={(e) => e.key === 'Enter' && sendMessage(e.currentTarget.value)}
    />
  );
}
```

---

### Classes

#### `SocketClient`

Low-level Singleton class for Socket.IO management. Usually, you don't need to use this directly—use hooks instead.

```typescript
import { SocketClient } from '@/packages/socketio/classes/socket.class';

// Get singleton instance
const socket = SocketClient.getInstance(url?, config?);

// Disconnect and cleanup
SocketClient.disconnect();
```

---

### Provider

#### `<SocketProvider>`

Context provider that manages the Socket.IO connection lifecycle.

```typescript
<SocketProvider>
  {children}
</SocketProvider>
```

**Features:**
- Automatically connects on mount
- Tracks connection status
- Cleanup on unmount
- Memoized context value to prevent unnecessary re-renders

---

## ⚙️ Configuration

### Custom Socket URL

```typescript
// src/packages/socketio/constant/socket-default-pathname.constant.ts
export const SOCKET_DEFAULT_PATHNAME = 'https://api.example.com/socket' as const;
```

Or use environment variables:

```typescript
// .env.local
NEXT_PUBLIC_SOCKET_URL=https://api.example.com/socket
```

```typescript
// Update socket.class.ts
SocketClient.instance = io(
  url || process.env.NEXT_PUBLIC_SOCKET_URL || SOCKET_DEFAULT_PATHNAME,
  config || SOCKET_DEFAULT_CONFIG,
);
```

### Custom Configuration

```typescript
// src/packages/socketio/constant/socket-default-config.constant.ts
export const SOCKET_DEFAULT_CONFIG: SocketConfig = {
  autoConnect: false,           // Manual connection control
  reconnection: true,            // Enable auto-reconnection
  reconnectionAttempts: 5,       // Try 5 times before giving up
  reconnectionDelay: 1000,       // Wait 1s between attempts
  transports: ['websocket', 'polling'], // WebSocket first, polling fallback
} as const;
```

**Available Options:**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `autoConnect` | `boolean` | `false` | Auto-connect on creation |
| `reconnection` | `boolean` | `true` | Enable reconnection |
| `reconnectionAttempts` | `number` | `5` | Max reconnection attempts |
| `reconnectionDelay` | `number` | `1000` | Delay between attempts (ms) |
| `reconnectionDelayMax` | `number` | `5000` | Max delay between attempts |
| `timeout` | `number` | `20000` | Connection timeout |
| `transports` | `string[]` | `['websocket', 'polling']` | Transport methods |
| `auth` | `object` | - | Authentication payload |
| `query` | `object` | - | Query parameters |

---

## 🎯 Usage Examples

### Real-Time Chat

```typescript
'use client';

import { useState } from 'react';
import { useSocketEvent } from '@/packages/socketio/hooks/use-socket-event.hook';
import { useSocketEmit } from '@/packages/socketio/hooks/use-socket-emit.hook';

interface Message {
  id: string;
  text: string;
  userId: string;
  timestamp: number;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const { emit, emitDebounced } = useSocketEmit<any>();

  // Listen for new messages
  useSocketEvent<Message>('message:new', (message) => {
    setMessages(prev => [...prev, message]);
  });

  // Listen for typing indicators
  useSocketEvent<{ userId: string; isTyping: boolean }>('user:typing', (data) => {
    console.log(`User ${data.userId} is typing:`, data.isTyping);
  });

  const handleSend = () => {
    if (input.trim()) {
      emit('message:send', { text: input });
      setInput('');
    }
  };

  const handleTyping = () => {
    emitDebounced('user:typing', { isTyping: true }, 500);
  };

  return (
    <div>
      <div>
        {messages.map(msg => (
          <div key={msg.id}>{msg.text}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          handleTyping();
        }}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
    </div>
  );
}
```

### Join/Leave Rooms

```typescript
function ChatRoom({ roomId }: { roomId: string }) {
  const { emit } = useSocketEmit();
  const { isConnected } = useSocket();

  useEffect(() => {
    if (isConnected) {
      // Join room on mount
      emit('room:join', { roomId });

      // Leave room on unmount
      return () => {
        emit('room:leave', { roomId });
      };
    }
  }, [isConnected, roomId, emit]);

  return <div>Room: {roomId}</div>;
}
```

### Authentication

```typescript
// Configure auth in socket.class.ts
const token = getAuthToken();

SocketClient.instance = io(url, {
  ...SOCKET_DEFAULT_CONFIG,
  auth: {
    token,
  },
});
```

### Error Handling

```typescript
function SocketErrorHandler() {
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handleConnectError = (error: Error) => {
      console.error('Connection error:', error);
    };

    const handleError = (error: Error) => {
      console.error('Socket error:', error);
    };

    socket.on('connect_error', handleConnectError);
    socket.on('error', handleError);

    return () => {
      socket.off('connect_error', handleConnectError);
      socket.off('error', handleError);
    };
  }, [socket]);

  return null;
}
```

---

## 🏗️ Architecture

```
src/packages/socketio/
├── classes/
│   └── socket.class.ts          # Singleton Socket.IO client
├── providers/
│   ├── socket.provider.tsx       # React Context Provider
│   └── socket-context.props.ts   # Context interface
├── hooks/
│   ├── use-socket.hook.tsx       # Access socket instance
│   ├── use-socket-event.hook.tsx # Listen to events
│   └── use-socket-emit.hook.tsx  # Emit events
├── types/
│   ├── socket-config.type.ts     # Configuration types
│   └── index.ts                  # Type exports
├── constant/
│   ├── socket-default-config.constant.ts
│   └── socket-default-pathname.constant.ts
└── README.md
```

---

## 🎨 Design Patterns

### Singleton Pattern

Ensures only **one** Socket.IO connection exists across the entire application, preventing:
- Multiple WebSocket connections (wasteful)
- Duplicate event listeners
- Memory leaks
- Race conditions

### Provider Pattern

Uses React Context to distribute the socket instance throughout the component tree without prop drilling.

### Hook Pattern

Encapsulates Socket.IO logic into reusable hooks with:
- Automatic cleanup
- Type safety
- Performance optimization

---

## ⚡ Performance Best Practices

### 1. Debounce Frequent Events

```typescript
// ❌ BAD: Emits on every keystroke
onChange={() => emit('typing', {})}

// ✅ GOOD: Debounced
onChange={() => emitDebounced('typing', {}, 500)}
```

### 2. Use Callback Refs

The `useSocketEvent` hook automatically uses refs to prevent re-subscriptions:

```typescript
// ✅ This is safe - won't re-subscribe on every render
useSocketEvent('message', (data) => {
  setMessages(prev => [...prev, data]);
});
```

### 3. Cleanup Listeners

Always cleanup listeners to prevent memory leaks:

```typescript
// ✅ Hooks handle this automatically
useSocketEvent('event', handler); // Auto-cleanup

// If using socket directly:
useEffect(() => {
  socket?.on('event', handler);
  return () => socket?.off('event', handler); // Manual cleanup
}, [socket]);
```

### 4. Memoize Callbacks

```typescript
const handleMessage = useCallback((data) => {
  // Your logic
}, [dependencies]);

useSocketEvent('message', handleMessage);
```

---

## 🔒 Security Considerations

### Authentication

```typescript
// Add JWT token to socket connection
const socket = SocketClient.getInstance('https://api.example.com', {
  auth: {
    token: await getAuthToken(),
  },
});
```

### Validate Events

```typescript
// Server-side validation (example)
socket.on('message:send', async (data, callback) => {
  const user = await authenticateSocket(socket);
  if (!user) {
    return callback({ error: 'Unauthorized' });
  }

  // Validate data
  if (!isValidMessage(data)) {
    return callback({ error: 'Invalid message' });
  }

  // Process message
  await saveMessage(data);
  callback({ success: true });
});
```

---

## 🐛 Troubleshooting

### Socket Not Connecting

```typescript
// Check connection status
const { socket, isConnected } = useSocket();

useEffect(() => {
  console.log('Connected:', isConnected);
  console.log('Socket ID:', socket?.id);
}, [isConnected, socket]);
```

### Events Not Firing

```typescript
// Ensure you're within SocketProvider
<SocketProvider>
  <YourComponent /> {/* ✅ Can use hooks here */}
</SocketProvider>

// Check if socket is connected before emitting
const { emit } = useSocketEmit();
const { isConnected } = useSocket();

if (isConnected) {
  emit('event', data);
}
```

### Multiple Connections

Ensure you're using the Singleton pattern correctly:

```typescript
// ❌ DON'T create new instances
const socket1 = io('url');
const socket2 = io('url'); // Creates another connection!

// ✅ DO use the singleton
const socket = SocketClient.getInstance(); // Always same instance
```

---

## 🧪 Testing

```typescript
import { renderHook } from '@testing-library/react';
import { SocketProvider } from '@/packages/socketio/providers/socket.provider';
import { useSocket } from '@/packages/socketio/hooks/use-socket.hook';

describe('useSocket', () => {
  it('should return socket instance', () => {
    const { result } = renderHook(() => useSocket(), {
      wrapper: SocketProvider,
    });

    expect(result.current.socket).toBeDefined();
  });
});
```

---

## 📝 TypeScript Support

All hooks and functions are fully typed:

```typescript
interface CustomEventData {
  id: string;
  payload: {
    message: string;
    timestamp: number;
  };
}

// ✅ Type-safe event listening
useSocketEvent<CustomEventData>('custom:event', (data) => {
  // data is typed as CustomEventData
  console.log(data.payload.message);
});

// ✅ Type-safe emitting
const { emit } = useSocketEmit<CustomEventData>();
emit('custom:event', {
  id: '123',
  payload: {
    message: 'Hello',
    timestamp: Date.now(),
  },
});
```

---

## 📖 Related Documentation

- [Socket.IO Client Documentation](https://socket.io/docs/v4/client-api/)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)

---

## 🤝 Contributing

1. Follow the existing code style
2. Add TypeScript types for all new code
3. Update this README with any API changes
4. Test your changes thoroughly

---

## 📄 License

This package is part of the GForce project.

---

## 🙋 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review the [Usage Examples](#-usage-examples)
3. Consult the [API Reference](#-api-reference)

---

**Built with ❤️ for high-performance real-time applications**

