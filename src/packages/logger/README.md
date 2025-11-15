# Logger Package

A lightweight, colorized logging utility for browser environments with support for multiple log levels.

## Features

- 🎨 **Colorized Output**: Each log level has a distinct color for easy visual identification
- 📝 **Named Loggers**: Create logger instances with custom names for better organization
- 🔧 **Type-Safe**: Full TypeScript support with type-safe log levels
- 🎯 **Simple API**: Clean and intuitive interface
- 📦 **Zero Dependencies**: Lightweight package with no external dependencies

## Installation

This package is part of the monorepo. Import it directly:

```typescript
import { Logger } from '@/packages/logger/classes/logger.class';
import { LogLevels } from '@/packages/logger/enums/log-levels.enum';
```

## Usage

### Basic Usage

```typescript
import { Logger } from '@/packages/logger/classes/logger.class';
import { LogLevels } from '@/packages/logger/enums/log-levels.enum';

// Create a logger instance with a name
const logger = new Logger('MyApp');

// Log with default level
logger.log('Application started');

// Log with specific level
logger.log('User logged in', LogLevels.SUCCESS);
logger.log('Processing request', LogLevels.INFO);
logger.log('Invalid input received', LogLevels.WARNING);
logger.log('Failed to connect to server', LogLevels.ERROR);

// Log with additional data
logger.log('User data received', LogLevels.INFO, { userId: 123, name: 'John' });
```

### Log Levels

The logger supports the following log levels:

| Level | Enum Value | Color | Use Case |
|-------|-----------|-------|----------|
| `default` | `LogLevels.DEFAULT` | Gray (#9ca3af) | General messages |
| `info` | `LogLevels.INFO` | Blue (#3b82f6) | Informational messages |
| `success` | `LogLevels.SUCCESS` | Green (#10b981) | Success messages |
| `warning` | `LogLevels.WARNING` | Orange (#f59e0b) | Warning messages |
| `error` | `LogLevels.ERROR` | Red (#ef4444) | Error messages |

### Examples

#### Creating Multiple Loggers

```typescript
const apiLogger = new Logger('API');
const authLogger = new Logger('Auth');
const dbLogger = new Logger('Database');

apiLogger.log('Fetching user data', LogLevels.INFO);
authLogger.log('Token validated', LogLevels.SUCCESS);
dbLogger.log('Connection timeout', LogLevels.ERROR);
```

#### Logging with Data

```typescript
const logger = new Logger('UserService');

logger.log('User created', LogLevels.SUCCESS, {
  id: 1,
  email: 'user@example.com',
  createdAt: new Date(),
});

logger.log('Validation failed', LogLevels.WARNING, {
  field: 'email',
  error: 'Invalid format',
});
```

## API Reference

### `Logger` Class

#### Constructor

```typescript
constructor(name: string)
```

Creates a new logger instance with the specified name.

**Parameters:**
- `name` (string): The name identifier for this logger instance. This will appear in all log messages.

#### Methods

##### `log<T>(message: string, level?: LogLevel, data?: T): void`

Logs a message with optional level and data.

**Parameters:**
- `message` (string): The log message to display
- `level` (LogLevel, optional): The log level. Defaults to `LogLevels.DEFAULT`
- `data` (T, optional): Additional data to log alongside the message

**Example:**
```typescript
logger.log('Operation completed', LogLevels.SUCCESS, { duration: 150 });
```

### Types

#### `LogLevel`

```typescript
type LogLevel = 'default' | 'error' | 'info' | 'success' | 'warning';
```

A union type representing all available log levels.

### Enums

#### `LogLevels`

```typescript
enum LogLevels {
  DEFAULT = 'default',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
}
```

Enum containing all available log level constants.

## Implementation Details

The logger uses browser's native `console.log` with CSS styling for colorized output. Each log message is prefixed with the logger's name in brackets, followed by the message and optional data.

**Output Format:**
```
[LoggerName] Message [data]
```

The colors are applied using CSS `color` property in the console, making logs easy to distinguish at a glance.

## Browser Compatibility

This package is designed for browser environments and uses the native `console.log` API. It works in all modern browsers that support:
- ES6+ JavaScript
- Console API with CSS styling support

## License

See the main project LICENSE file.

