# HTTP Client Package

A flexible, type-safe HTTP client wrapper with adapter pattern support, built on top of Axios. This package provides a clean abstraction for making HTTP requests with consistent response formatting, error handling, and logging capabilities.

## Features

- 🔌 **Adapter Pattern**: Pluggable HTTP adapters for different HTTP libraries
- 📦 **Type-Safe**: Full TypeScript support with generic types
- 🎯 **Consistent API**: Standardized response format across all requests
- 🛡️ **Error Handling**: Built-in error handling with meaningful error messages
- 📝 **Logging Support**: Optional logging adapter for request/response logging
- 🔧 **Configurable**: Flexible configuration options for headers and custom messages
- 🎨 **Status Messages**: Pre-configured HTTP status code messages

## Installation

This package is part of the monorepo. Import it directly:

```typescript
import { HttpClient } from '@/packages/http-client/classes/http-client.class';
import { Axios } from '@/packages/http-client/classes/axios.class';
```

## Dependencies

- `axios`: ^1.13.2

## Architecture

The package follows the **Adapter Pattern**, allowing you to swap HTTP implementations:

```
HttpClient (High-level API)
    ↓
HttpAdapter (Interface)
    ↓
Axios (Implementation)
```

## Usage

### Basic Setup

```typescript
import { Axios } from '@/packages/http-client/classes/axios.class';
import { HttpClient } from '@/packages/http-client/classes/http-client.class';

// Create an adapter instance
const fetcher = new Axios({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Create the HTTP client with base URL and adapter
const httpClient = new HttpClient('https://api.example.com', fetcher);
```

### GET Request

```typescript
// Simple GET request
const response = await httpClient.get<User>('/users/123');

if (response.success) {
  console.log('User data:', response.data);
} else {
  console.error('Error:', response.error);
  console.error('Status:', response.status);
}

// GET request with custom headers
const response = await httpClient.get<User>(
  '/users/123',
  {
    headers: {
      'Authorization': 'Bearer token123',
      'X-Custom-Header': 'value',
    },
    successMessage: 'User retrieved successfully',
  }
);
```

### POST Request

```typescript
// POST request with body
const newUser = {
  name: 'John Doe',
  email: 'john@example.com',
};

const response = await httpClient.post<typeof newUser, User>(
  '/users',
  newUser,
  {
    headers: {
      'Authorization': 'Bearer token123',
    },
    successMessage: 'User created successfully',
  }
);

if (response.success) {
  console.log('Created user:', response.data);
} else {
  console.error('Failed to create user:', response.error);
}
```

### Response Format

All requests return a standardized `HttpResponse<T>` object:

```typescript
interface HttpResponse<T> {
  data: T | null;           // Response data (null on error)
  error: string | null;     // Error message (null on success)
  message: string | null;   // Status message
  status: number;           // HTTP status code
  success: boolean;         // Whether the request was successful
}
```

### Example: Repository Pattern

```typescript
import { HttpClient } from '@/packages/http-client/classes/http-client.class';

interface User {
  id: number;
  name: string;
  email: string;
}

export class UserRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async getUserById(id: number): Promise<User | null> {
    const response = await this.httpClient.get<User>(`/users/${id}`);

    if (response.success) {
      return response.data;
    }

    console.error(`Failed to fetch user ${id}:`, response.error);
    return null;
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User | null> {
    const response = await this.httpClient.post<typeof userData, User>(
      '/users',
      userData,
      {
        successMessage: 'User created successfully',
      }
    );

    if (response.success) {
      return response.data;
    }

    console.error('Failed to create user:', response.error);
    return null;
  }
}
```

## API Reference

### HttpClient

Main HTTP client class that provides a high-level API for making HTTP requests.

#### Constructor

```typescript
constructor(baseUrl: string, fetcher: HttpAdapter)
```

- `baseUrl`: Base URL for all requests
- `fetcher`: HTTP adapter implementation (e.g., `Axios`)

#### Methods

##### `get<T>(endpoint: string, configuration?: HttpClientConfiguration): Promise<HttpResponse<T>>`

Makes a GET request to the specified endpoint.

- `endpoint`: API endpoint (will be appended to baseUrl)
- `configuration`: Optional configuration object
- Returns: Promise resolving to `HttpResponse<T>`

##### `post<T, R>(endpoint: string, body?: T, configuration?: HttpClientConfiguration): Promise<HttpResponse<R>>`

Makes a POST request to the specified endpoint.

- `endpoint`: API endpoint (will be appended to baseUrl)
- `body`: Request body (optional)
- `configuration`: Optional configuration object
- Returns: Promise resolving to `HttpResponse<R>`

### Axios

Axios-based implementation of the `HttpAdapter` interface.

#### Constructor

```typescript
constructor(config?: AxiosRequestConfig)
```

Accepts standard Axios configuration options.

#### Features

- Automatic error handling with standardized error responses
- Request/response interceptors
- Development-mode error logging
- HTTP status message mapping

### HttpClientConfiguration

```typescript
type HttpClientConfiguration = {
  headers?: Record<string, string>;
  successMessage?: string;
};
```

- `headers`: Custom headers to include in the request
- `successMessage`: Custom success message to include in the response

### HttpAdapter Interface

Implement this interface to create custom HTTP adapters:

```typescript
interface HttpAdapter {
  get<T = unknown>(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<HttpResponse<T>>;

  post<T = unknown, R = unknown>(
    endpoint: string,
    body?: T,
    configuration?: HttpClientConfiguration,
  ): Promise<HttpResponse<R>>;
}
```

## HTTP Status Messages

The package includes a dictionary of HTTP status messages. Currently supported status codes:

- `200`: OK
- `500`: Internal Server Error

You can extend the `httpStatusMessagesDictionary` to add more status codes.

## Error Handling

The package provides consistent error handling:

1. **Network Errors**: Caught and converted to standardized error responses
2. **HTTP Errors**: Status codes and error messages are preserved
3. **Development Logging**: Errors are logged in development mode (if logger is configured)

### Error Response Example

```typescript
{
  data: null,
  error: "Request failed with status code 404",
  message: "Not Found",
  status: 404,
  success: false
}
```

## Logging

The `Axios` adapter supports optional logging through the `HttpLoggerAdapter` interface. To enable logging, you need to provide a logger implementation that matches the interface:

```typescript
interface HttpLoggerAdapter {
  log<T = unknown>(message: string, level: LogLevel, data?: T): void;
}
```

Logging is automatically enabled in development mode for error responses.

## Type Safety

The package is fully typed with TypeScript generics:

```typescript
// Type-safe GET request
const response = await httpClient.get<User>('/users/123');
// response.data is typed as User | null

// Type-safe POST request
const response = await httpClient.post<CreateUserDto, User>(
  '/users',
  userData
);
// Request body is typed as CreateUserDto
// Response data is typed as User | null
```

## Best Practices

1. **Single Instance**: Create one `HttpClient` instance per API base URL and reuse it
2. **Type Definitions**: Always provide type parameters for better type safety
3. **Error Handling**: Always check `response.success` before accessing `response.data`
4. **Configuration**: Use the configuration object for request-specific headers rather than modifying the adapter
5. **Repository Pattern**: Wrap the HTTP client in repository classes for better organization

## Examples

### Complete Example

```typescript
import { Axios } from '@/packages/http-client/classes/axios.class';
import { HttpClient } from '@/packages/http-client/classes/http-client.class';

// Setup
const fetcher = new Axios({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiClient = new HttpClient('https://api.example.com', fetcher);

// Usage
async function fetchUser(id: number) {
  const response = await apiClient.get<User>(
    `/users/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
    }
  );

  if (response.success && response.data) {
    return response.data;
  }

  throw new Error(response.error || 'Failed to fetch user');
}
```

## License

GNETWORK

