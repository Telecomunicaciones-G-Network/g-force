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
      (config: InternalAxiosRequestConfig) => {
        const token = Cookies.get('token');

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

  public async post<T = unknown, R = unknown>(
    endpoint: string,
    body?: T,
    configuration?: HttpClientConfiguration,
  ): Promise<R> {
    return this.axiosInstance
      .post<R>(endpoint, body, configuration)
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
