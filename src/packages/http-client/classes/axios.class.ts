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

export class Axios implements HttpAdapter {
  private axiosInstance: AxiosInstance;
  private readonly logger?: HttpLoggerAdapter;

  constructor(config?: AxiosRequestConfig, logger?: HttpLoggerAdapter) {
    this.axiosInstance = axios.create(config);
    this.logger = logger;
    this.applyRequestInterceptor();
    this.applyResponseInterceptor();
  }

  private applyRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        let token: string | undefined;

        try {
          const { cookies } = await import('next/headers');
          const cookieStore = await cookies();

          token = cookieStore.get('token')?.value;
        } catch {
          token = Cookies.get('token');
        }

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
      (error: AxiosError<HttpErrorResponse>) => {
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

    if (configuration?.params) {
      parsedParams = this.parseParams(configuration?.params);
    }

    const axiosConfig = this.sanitizeConfiguration(configuration || {});

    return this.axiosInstance
      .get<T>(endpoint + parsedParams, axiosConfig)
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

  public async post<T = unknown, R = unknown>(
    endpoint: string,
    body?: T,
    configuration?: HttpClientConfiguration,
  ): Promise<R> {
    console.log('endpoint', endpoint);
    console.log('body', body);
    console.log('configuration', configuration);

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
