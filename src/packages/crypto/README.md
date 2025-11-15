# Crypto Package - Sensitive Data Encryption

This package provides utilities to encrypt sensitive data on the client before sending it to the server via Server Actions.

## 🔐 Features

- **AES-256-GCM Encryption**: Industry standard for symmetric encryption
- **Web Crypto API**: Uses the native browser API (no dependencies)
- **Node.js Crypto**: Uses the native Node.js module on the server
- **Type-safe**: Fully typed with TypeScript

## 📦 Components

### ClientCrypto (Client)

Encrypts data in the browser using Web Crypto API.

```typescript
import { ClientCrypto, CRYPTO_KEY } from "@packages/crypto";

// Encrypt an object
const encrypted = await ClientCrypto.encryptObject(
  { email: "user@example.com", password: "secret" },
  CRYPTO_KEY
);

// Encrypt a string
const encrypted = await ClientCrypto.encrypt("sensitive data", CRYPTO_KEY);
```

### ServerCrypto (Server)

Decrypts data on the server using Node.js crypto.

```typescript
import { ServerCrypto, CRYPTO_KEY } from "@packages/crypto";

// Decrypt an object
const data = ServerCrypto.decryptObject<{ email: string; password: string }>(
  encryptedPayload,
  CRYPTO_KEY
);

// Decrypt a string
const data = ServerCrypto.decrypt(encryptedPayload, CRYPTO_KEY);
```

## ⚙️ Configuration

### Environment Variable (Recommended)

Create or update your `.env.local` file:

```bash
NEXT_PUBLIC_CRYPTO_KEY=your-super-secret-and-long-key-here-2024
```

**⚠️ IMPORTANT:**

- Use a strong key of at least 32 characters
- Never share this key in public repositories
- Use different keys for development and production
- The key must be the same on both client and server

### Default Key

If you don't configure the environment variable, a default key will be used (NOT RECOMMENDED FOR PRODUCTION):

```typescript
// src/packages/crypto/constants/crypto-key.constant.ts
export const CRYPTO_KEY =
  process.env.NEXT_PUBLIC_CRYPTO_KEY ||
  "g-network-default-key-change-in-production-2024";
```

## 🚀 Complete Usage Example

### Client (Form)

```typescript
"use client";

import { ClientCrypto, CRYPTO_KEY } from "@packages/crypto";

export const MyForm = () => {
  const onSubmit = async (data: FormData) => {
    // Encrypt sensitive data
    const encryptedPayload = await ClientCrypto.encryptObject(
      {
        email: data.email,
        password: data.password,
      },
      CRYPTO_KEY
    );

    const formData = new FormData();
    formData.append("payload", encryptedPayload);

    // Send to Server Action
    const result = await myServerAction({}, formData);
  };
};
```

### Server (Server Action)

```typescript
"use server";

import { ServerCrypto, CRYPTO_KEY } from "@packages/crypto";

export async function myServerAction(
  _prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const encryptedPayload = formData.get("payload") as string;

    // Decrypt data
    const { email, password } = ServerCrypto.decryptObject<{
      email: string;
      password: string;
    }>(encryptedPayload, CRYPTO_KEY);

    // Process data...
    console.log({ email, password }); // Now they are decrypted
  } catch (error) {
    return {
      errors: {
        _form: ["Decryption error"],
      },
    };
  }
}
```

## 🔒 Security

### What does it protect against?

✅ **Protects against:**

- Data inspection in browser DevTools
- Network logs that capture the payload
- Data interception before sending

❌ **Does NOT protect against:**

- Man-in-the-middle attacks (use HTTPS for this)
- Access to source code (the key is on the client)
- XSS attacks that can access browser memory

### Best Practices

1. **Always use HTTPS in production**
2. **Change the default key**
3. **Don't store the key in code**
4. **Use different environment variables per environment**
5. **Rotate keys periodically**
6. **Combine with other security measures** (rate limiting, CSRF tokens, etc.)

## 🛠️ Technical Implementation

### Algorithm

- **Encryption**: AES-256-GCM
- **Key Derivation**: PBKDF2 with 100,000 iterations
- **Hash**: SHA-256
- **IV**: 12 random bytes (generated for each encryption)

### Encrypted Payload Format

```
Base64(IV + Ciphertext + AuthTag)
```

## 📝 Notes

- Encryption is **deterministic** with the same IV, but each call generates a different IV
- The encrypted payload is approximately 1.5x larger than the original (Base64 encoding)
- The encryption/decryption process adds ~1-2ms of latency

## 🐛 Troubleshooting

### Error: "Decryption failed: Invalid data or password"

- Verify that the key is the same on both client and server
- Verify that the payload is not corrupted
- Verify that you're using `NEXT_PUBLIC_CRYPTO_KEY` on the client

### Error: "crypto is not defined"

- Make sure to use `ClientCrypto` only on the client (`"use client"`)
- Make sure to use `ServerCrypto` only on the server (`"use server"`)
