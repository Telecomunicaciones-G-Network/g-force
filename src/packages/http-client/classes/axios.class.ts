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
} from '../interfaces';

import axios from 'axios';

import { LogLevels } from '../enums/log-levels.enum';

export class Axios implements HttpAdapter {
  private axiosInstance: AxiosInstance;
  private readonly logger?: HttpLoggerAdapter;

  constructor(config?: AxiosRequestConfig, logger?: HttpLoggerAdapter) {
    this.axiosInstance = axios.create({
      ...config,
    });
    this.logger = logger;
    this.applyRequestInterceptor();
    this.applyResponseInterceptor();
  }

  private applyRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
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

  private parseAxiosConfiguration(
    configuration?: HttpClientConfiguration,
  ): AxiosRequestConfig {
    return {
      headers: configuration?.headers,
    };
  }

  public async get<T = unknown>(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<T> {
    try {
      const axiosConfiguration = this.parseAxiosConfiguration(configuration);

      const response = await this.axiosInstance.get<T>(
        endpoint,
        axiosConfiguration,
      );

      if (!response?.data && response.statusText === 'OK') {
        throw new Error('Axios data request has failed!');
      }

      return response?.data;
    } catch (err) {
      const error = err as AxiosError<HttpErrorResponse>;

      return {
        error: error?.response?.data?.error ?? error?.message,
        status: error?.response?.data?.status ?? 500,
        success: false,
      } as T;
    }
  }

  public async post<T = unknown, R = unknown>(
    endpoint: string,
    body?: T,
    configuration?: HttpClientConfiguration,
  ): Promise<R> {
    try {
      const axiosConfiguration = this.parseAxiosConfiguration(configuration);

      const response = await this.axiosInstance.post<R>(
        endpoint,
        body,
        axiosConfiguration,
      );

      if (!response?.data && response.statusText === 'OK') {
        throw new Error('Axios data request has failed!');
      }

      return response?.data;
    } catch (err) {
      const error = err as AxiosError<HttpErrorResponse>;

      return {
        error: error?.response?.data?.error ?? error?.message,
        status: error?.response?.data?.status ?? 500,
        success: false,
      } as R;
    }
  }
}
