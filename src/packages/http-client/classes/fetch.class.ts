import type {
  FetchConfig,
  HttpAdapter,
  HttpClientConfiguration,
  HttpLoggerAdapter,
  UploadFileBody,
} from '../interfaces';

import Cookies from 'js-cookie';

import { X_MEDIA_TYPE_HEADER_DICTIONARY } from '../dictionaries/x-media-type-header.dictionary';

import { LogLevels } from '../enums/log-levels.enum';

import { snakeToCamelCase } from '../utils/snake-to-camelcase.util';

const GNETWORK_API_BASE_URL =
  process.env.NEXT_PUBLIC_GNETWORK_API_BASE_URL ?? '';
const AUTH_REFRESH_ENDPOINT = `${GNETWORK_API_BASE_URL}/user/auth/refresh/`;

interface RefreshResponse {
  access?: string;
  refresh?: string;
  results?: { access?: string; refresh?: string };
}

export class Fetch implements HttpAdapter {
  constructor(
    private configuration?: FetchConfig,
    private logger?: HttpLoggerAdapter,
  ) {}

  private async injectToken(): Promise<Headers> {
    const newHeaders = new Headers();

    let token: string | undefined;

    try {
      const { cookies } = await import('next/headers');
      const cookieStore = await cookies();

      token = cookieStore.get('token')?.value;
    } catch {
      token = Cookies.get('token');
    }

    if (token) {
      newHeaders.set('Authorization', `Bearer ${token}`);
    }

    return newHeaders;
  }

  private async getRefreshTokenFromCookies(): Promise<string | undefined> {
    try {
      const { cookies } = await import('next/headers');
      const cookieStore = await cookies();

      return cookieStore.get('refresh')?.value;
    } catch {
      return Cookies.get('refresh');
    }
  }

  private async refreshAccessToken(
    refreshToken: string,
  ): Promise<string | null> {
    const response = await fetch(AUTH_REFRESH_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json; version=1.0.0',
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as RefreshResponse;
    const newToken =
      data?.access ?? (data as RefreshResponse)?.results?.access ?? null;

    if (newToken) {
      try {
        Cookies.set('token', newToken, { path: '/', sameSite: 'lax' });
      } catch {
        // Client-only; ignore if cookies not available
      }
      try {
        const { cookies } = await import('next/headers');
        const cookieStore = await cookies();

        cookieStore.set('token', newToken, {
          path: '/',
          sameSite: 'lax',
          maxAge: 60 * 60,
        });
      } catch {
        // Server context may not allow setting cookies here
      }
    }

    return newToken;
  }

  private async executeFetch(
    url: string,
    init: RequestInit,
    retry = true,
  ): Promise<Response> {
    const tokenHeaders = await this.injectToken();
    const tokenHeadersObject = Object.fromEntries(tokenHeaders.entries());
    const mergedHeaders = {
      ...this.configuration?.headers,
      ...(init.headers as Record<string, string>),
      ...tokenHeadersObject,
    };

    const response = await fetch(url, { ...init, headers: mergedHeaders });

    if (response.status === 401 && retry) {
      const refreshToken = await this.getRefreshTokenFromCookies();

      if (refreshToken) {
        try {
          const newToken = await this.refreshAccessToken(refreshToken);

          if (newToken) {
            return this.executeFetch(
              url,
              {
                ...init,
                headers: {
                  ...mergedHeaders,
                  Authorization: `Bearer ${newToken}`,
                },
              },
              false,
            );
          }
        } catch (refreshError) {
          this.logger?.log(
            (refreshError as Error)?.message ?? 'Refresh token failed',
            LogLevels.ERROR,
          );
        }
      }
    }

    return response;
  }

  private parseParams(params?: string[]): string {
    if (!params || !Array.isArray(params) || params?.length === 0) {
      return '';
    }

    const parseParams = params.join('/');

    return `/${parseParams}`;
  }

  private parseSearchParams(
    searchParams?: Record<string, string | undefined>,
  ): string {
    if (!searchParams || typeof searchParams !== 'object') {
      return '';
    }

    const filteredParams: Record<string, string> = {};

    for (const [key, value] of Object.entries(searchParams)) {
      if (value !== undefined) {
        filteredParams[key] = value;
      }
    }

    if (Object.keys(filteredParams).length === 0) {
      return '';
    }

    const formattedSearchParams = new URLSearchParams(filteredParams);

    return `?${formattedSearchParams}`;
  }

  private sanitizeConfiguration(
    configurations: HttpClientConfiguration,
  ): RequestInit {
    delete configurations.params;
    delete configurations.parseResponseOnCamelCase;
    delete configurations.searchParams;

    return configurations;
  }

  public async get<T = unknown>(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<T> {
    let parsedParams = '';
    let parsedSearchParams = '';

    if (configuration?.params) {
      parsedParams = this.parseParams(configuration?.params);
    }

    if (configuration?.searchParams) {
      parsedSearchParams = this.parseSearchParams(configuration?.searchParams);
    }

    const fetchConfig = this.sanitizeConfiguration(configuration || {});

    const response = await this.executeFetch(
      endpoint + parsedParams + parsedSearchParams,
      {
        method: 'GET',
        ...fetchConfig,
        headers: {
          ...this.configuration?.headers,
          ...fetchConfig.headers,
        },
      },
    );

    if (!response.ok) {
      this.logger?.log(
        `GET ${response.status} ${response.statusText}`,
        LogLevels.ERROR,
      );
      throw new Error(response.statusText);
    }

    const data = await response.json();
    const parsedData = this.configuration?.parseResponseOnCamelCase
      ? snakeToCamelCase<T>(data)
      : data;

    return parsedData;
  }

  public async getFile(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<string> {
    try {
      let parsedParams = '';
      let parsedSearchParams = '';

      if (configuration?.params) {
        parsedParams = this.parseParams(configuration?.params);
      }

      if (configuration?.searchParams) {
        parsedSearchParams = this.parseSearchParams(
          configuration?.searchParams,
        );
      }

      const fetchConfig = this.sanitizeConfiguration(configuration || {});

      const response = await this.executeFetch(
        endpoint + parsedParams + parsedSearchParams,
        {
          method: 'GET',
          ...fetchConfig,
          headers: {
            ...this.configuration?.headers,
            ...fetchConfig.headers,
            Accept: '*/*',
          },
          cache: 'no-cache',
        },
      );

      if (!response.ok) {
        const errorText = await response
          .text()
          .catch(() => response.statusText);

        throw new Error(
          `Failed to fetch image: ${response.status} ${response.statusText} - ${errorText}`,
        );
      }

      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer]);

      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          if (reader.result) {
            resolve(reader.result as string);
          } else {
            reject(new Error('Failed to read image data'));
          }
        };

        reader.onerror = () => {
          reject(new Error('Failed to read image blob'));
        };

        reader.readAsDataURL(blob);
      });
    } catch (err) {
      this.logger?.log((err as Error).message, LogLevels.ERROR);

      const error = err as Error;

      throw error;
    }
  }

  public async getBlob(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<string> {
    try {
      let parsedParams = '';
      let parsedSearchParams = '';

      if (configuration?.params) {
        parsedParams = this.parseParams(configuration?.params);
      }

      if (configuration?.searchParams) {
        parsedSearchParams = this.parseSearchParams(
          configuration?.searchParams,
        );
      }

      const fetchConfig = this.sanitizeConfiguration(configuration || {});

      const response = await this.executeFetch(
        endpoint + parsedParams + parsedSearchParams,
        {
          method: 'GET',
          ...fetchConfig,
          headers: {
            ...this.configuration?.headers,
            ...fetchConfig.headers,
            Accept: '*/*',
          },
          cache: 'no-cache',
        },
      );

      if (!response.ok) {
        const errorText = await response
          .text()
          .catch(() => response.statusText);

        throw new Error(
          `Failed to fetch blob: ${response.status} ${response.statusText} - ${errorText}`,
        );
      }

      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (err) {
      this.logger?.log((err as Error).message, LogLevels.ERROR);
      throw err as Error;
    }
  }

  public async post<T = unknown, R = unknown>(
    endpoint: string,
    body?: T,
    configuration?: HttpClientConfiguration,
  ): Promise<R> {
    const fetchConfig = this.sanitizeConfiguration(configuration || {});

    const response = await this.executeFetch(endpoint, {
      method: 'POST',
      ...fetchConfig,
      headers: {
        ...this.configuration?.headers,
        ...fetchConfig.headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      this.logger?.log(
        `POST ${response.status} ${response.statusText}`,
        LogLevels.ERROR,
      );
      throw new Error(response.statusText);
    }

    const data = await response.json();
    const parsedData = this.configuration?.parseResponseOnCamelCase
      ? snakeToCamelCase<R>(data)
      : data;

    return parsedData;
  }

  public async uploadFile<T = unknown>(
    endpoint: string,
    body: UploadFileBody,
    configuration?: HttpClientConfiguration,
  ): Promise<T> {
    const fetchConfig = this.sanitizeConfiguration(configuration || {});

    const response = await this.executeFetch(endpoint, {
      method: 'POST',
      ...fetchConfig,
      headers: {
        'Content-Type': 'application/octet-stream',
        ...this.configuration?.headers,
        ...fetchConfig.headers,
        'X-Filename': body?.filename,
        'X-Media-Type': X_MEDIA_TYPE_HEADER_DICTIONARY?.[body?.mediaType],
      },
      body: body?.file,
    });

    if (!response.ok) {
      this.logger?.log(
        `POST upload ${response.status} ${response.statusText}`,
        LogLevels.ERROR,
      );
      throw new Error(response.statusText);
    }

    const data = await response.json();
    const parsedData = this.configuration?.parseResponseOnCamelCase
      ? snakeToCamelCase<T>(data)
      : data;

    return parsedData;
  }
}
