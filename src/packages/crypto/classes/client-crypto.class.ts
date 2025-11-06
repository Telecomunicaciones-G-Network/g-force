export class ClientCrypto {
  private static encoder = new TextEncoder();

  private static async getKey(password: string): Promise<CryptoKey> {
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      ClientCrypto.encoder.encode(password),
      { name: "PBKDF2" },
      false,
      ["deriveKey"],
    );

    return crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: ClientCrypto.encoder.encode("g-network-salt-v1"),
        iterations: 100000,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"],
    );
  }

  static async encrypt(data: string, password: string): Promise<string> {
    const key = await ClientCrypto.getKey(password);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encodedData = ClientCrypto.encoder.encode(data);
    const encryptedData = await crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      encodedData,
    );
    const encryptedArray = new Uint8Array(encryptedData);
    const combined = new Uint8Array(iv.length + encryptedArray.length);

    combined.set(iv);
    combined.set(encryptedArray, iv.length);

    return btoa(String.fromCharCode(...combined));
  }

  static async encryptObject<T extends Record<string, unknown>>(
    obj: T,
    password: string,
  ): Promise<string> {
    const jsonString = JSON.stringify(obj);
    return ClientCrypto.encrypt(jsonString, password);
  }
}
