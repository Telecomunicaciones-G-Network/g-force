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

import Cookies from 'js-cookie';

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

  public async get<T = unknown>(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<T> {
    return this.axiosInstance
      .get<T>(endpoint, configuration)
      .then((response) => {
        if (!response?.data && response.statusText === 'OK') {
          throw new Error('Axios data request has failed!');
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
          throw new Error('Axios data request has failed!');
        }

        return response?.data;
      })
      .catch((err) => {
        const error = err as AxiosError;

        throw error;
      });
  }
}
