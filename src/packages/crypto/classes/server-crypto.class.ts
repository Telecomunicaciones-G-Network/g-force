import { createDecipheriv, pbkdf2Sync } from 'node:crypto';

export class ServerCrypto {
  private static getKey(password: string): Buffer {
    return pbkdf2Sync(password, 'g-network-salt-v1', 100000, 32, 'sha256');
  }

  public static decrypt(encryptedData: string, password: string): string {
    try {
      const combined = Buffer.from(encryptedData, 'base64');
      const iv = combined.subarray(0, 12);
      const encrypted = combined.subarray(12);
      const key = ServerCrypto.getKey(password);
      const decipher = createDecipheriv('aes-256-gcm', key, iv);
      const authTag = encrypted.subarray(encrypted.length - 16);
      const ciphertext = encrypted.subarray(0, encrypted.length - 16);

      decipher.setAuthTag(authTag);

      let decrypted = decipher.update(ciphertext, undefined, 'utf8');

      decrypted += decipher.final('utf8');

      return decrypted;
    } catch (_error) {
      throw new Error('Decryption failed: Invalid data or password');
    }
  }

  public static decryptObject<T>(encryptedData: string, password: string): T {
    const decrypted = ServerCrypto.decrypt(encryptedData, password);

    return JSON.parse(decrypted) as T;
  }
}
