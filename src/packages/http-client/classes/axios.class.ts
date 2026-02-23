import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import type {
  HttpAdapter,
  HttpClientConfiguration,
  HttpErrorResponse,
  HttpLoggerAdapter,
  UploadFileBody,
} from '../interfaces';

import axios from 'axios';
import Cookies from 'js-cookie';

import { X_MEDIA_TYPE_HEADER_DICTIONARY } from '../dictionaries/x-media-type-header.dictionary';

import { LogLevels } from '../enums/log-levels.enum';

const getAuthRefreshEndpoint = () =>
  `${process.env.NEXT_PUBLIC_GNETWORK_API_BASE_URL ?? ''}/user/auth/refresh/`;

type RequestConfigWithRetry = InternalAxiosRequestConfig & { _retry?: boolean };

interface RefreshResponse {
  access?: string;
  refresh?: string;
  results?: { access?: string; refresh?: string };
}

export class Axios implements HttpAdapter {
  private axiosInstance: AxiosInstance;
  private readonly logger?: HttpLoggerAdapter;

  constructor(config?: AxiosRequestConfig, logger?: HttpLoggerAdapter) {
    this.axiosInstance = axios.create(config);
    this.logger = logger;
    this.applyRequestInterceptor();
    this.applyResponseInterceptor();
  }

  private async getTokenFromCookies(): Promise<string | undefined> {
    try {
      const { cookies } = await import('next/headers');
      const cookieStore = await cookies();

      return cookieStore.get('token')?.value;
    } catch {
      return Cookies.get('token');
    }
  }

  /**
   * Reads the refresh token from cookies.
   * For client-side 401 to trigger refresh, the refresh cookie must be readable by JS
   * (e.g. httpOnly: false). If it is httpOnly, only server-side requests can refresh.
   */
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
    const { data } = await axios.post<RefreshResponse>(
      getAuthRefreshEndpoint(),
      { refresh: refreshToken },
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json; version=1.0.0',
        },
      },
    );
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

  private applyRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const configWithRetry = config as RequestConfigWithRetry;

        if (configWithRetry._retry) {
          return config;
        }

        const token = await this.getTokenFromCookies();

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
    );
  }

  private applyResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError<HttpErrorResponse>) => {
        const config = error.config as RequestConfigWithRetry | undefined;

        if (error.response?.status === 401 && config && !config._retry) {
          config._retry = true;
          const refreshToken = await this.getRefreshTokenFromCookies();

          if (refreshToken) {
            try {
              const newToken = await this.refreshAccessToken(refreshToken);

              if (newToken) {
                if (!config.headers) {
                  config.headers = {} as typeof config.headers;
                }
                config.headers.Authorization = `Bearer ${newToken}`;

                return this.axiosInstance.request(config);
              }
            } catch (refreshError) {
              this.logger?.log(
                (refreshError as Error)?.message ?? 'Refresh token failed',
                LogLevels.ERROR,
              );
            }
          }
        }

        this.logger?.log(error.message, LogLevels.ERROR);

        return Promise.reject(error);
      },
    );
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
  ): AxiosRequestConfig {
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

    const axiosConfig = this.sanitizeConfiguration(configuration || {});

    return this.axiosInstance
      .get<T>(endpoint + parsedParams + parsedSearchParams, axiosConfig)
      .then((response) => {
        if (!response?.data && response.statusText === 'OK') {
          throw new Error('Axios get request has failed!');
        }

        return response?.data;
      })
      .catch((err) => {
        const error = err as AxiosError;

        throw error;
      });
  }

  public async getFile(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<string> {
    return this.axiosInstance
      .get<ArrayBuffer>(endpoint, {
        ...configuration,
        responseType: 'arraybuffer',
        headers: {
          ...configuration?.headers,
          Accept: '*/*',
        },
      })
      .then(async (response) => {
        if (!response?.data && response.statusText === 'OK') {
          throw new Error('Axios file get request has failed!');
        }

        const arrayBuffer = response.data;
        const blob = new Blob([arrayBuffer]);

        return new Promise<string>((resolve, reject) => {
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
      })
      .catch((err) => {
        const error = err as AxiosError;

        throw error;
      });
  }

  public async getBlob(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<string> {
    return this.axiosInstance
      .get<ArrayBuffer>(endpoint, {
        ...configuration,
        responseType: 'arraybuffer',
        headers: {
          ...configuration?.headers,
          Accept: '*/*',
        },
      })
      .then((response) => {
        const blob = new Blob([response.data]);
        return URL.createObjectURL(blob);
      })
      .catch((err) => {
        const error = err as AxiosError;
        throw error;
      });
  }

  public async post<T = unknown, R = unknown>(
    endpoint: string,
    body?: T,
    configuration?: HttpClientConfiguration,
  ): Promise<R> {
    const axiosConfig = this.sanitizeConfiguration(configuration || {});

    return this.axiosInstance
      .post<R>(endpoint, body, axiosConfig)
      .then((response) => {
        if (!response?.data && response.statusText === 'OK') {
          throw new Error('Axios post request has failed!');
        }

        return response?.data;
      })
      .catch((err) => {
        const error = err as AxiosError;

        throw error;
      });
  }

  public async uploadFile<T = unknown>(
    endpoint: string,
    body: UploadFileBody,
    configuration?: HttpClientConfiguration,
  ): Promise<T> {
    const fileBuffer = await body?.file.arrayBuffer();

    return this.axiosInstance
      .post<T>(endpoint, fileBuffer, {
        ...configuration,
        headers: {
          'Content-Type': body?.file?.type ?? 'application/octet-stream',
          ...configuration?.headers,
          'X-Filename': body?.filename,
          'X-Media-Type': X_MEDIA_TYPE_HEADER_DICTIONARY?.[body?.mediaType],
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      })
      .then((response) => {
        if (!response?.data && response.statusText === 'OK') {
          throw new Error('Axios file upload request has failed!');
        }

        return response?.data;
      })
      .catch((err) => {
        const error = err as AxiosError;

        throw error;
      });
  }
}
