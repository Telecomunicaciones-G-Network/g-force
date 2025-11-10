// TODO: Debo mejorar los mensajes de error colocando un chalker o algo asi en la consola

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import type { HttpAdapter, HttpClientConfig } from '../interfaces';
import type { HttpErrorResponse } from '../types';

import axios from 'axios';

export class Axios implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create({
      ...config,
    });
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
      (error: HttpErrorResponse) => {
        console.error(`ERROR: ${error.response?.data?.error}`);

        return Promise.reject(error);
      },
    );
  }

  private getRequestConfiguration(
    configurations?: HttpClientConfig,
  ): AxiosRequestConfig {
    return {
      headers: configurations?.headers,
      params: configurations?.searchParams,
    };
  }

  public async get<T = Response>(
    endpoint: string,
    configurations?: HttpClientConfig,
  ): Promise<T> {
    try {
      const axiosConfig = this.getRequestConfiguration(configurations);

      const response = await this.axiosInstance.get<T>(endpoint, axiosConfig);

      if (!response?.data && response.statusText === 'OK') {
        throw new Error('Axios data request has failed!');
      }

      return response.data;
    } catch (err) {
      const error = err as HttpErrorResponse;

      return {
        error: error?.response?.data?.error ?? 'An unknown error occurred',
        extra: error?.response?.data?.extra,
        status: error?.response?.status ?? 500,
        success: false,
      } as T;
    }
  }

  public async post<T = Request, R = Response>(
    endpoint: string,
    body?: T,
    configurations?: HttpClientConfig,
  ): Promise<R> {
    try {
      const axiosConfig = this.getRequestConfiguration(configurations);

      const response = await this.axiosInstance.post<R>(
        endpoint,
        body,
        axiosConfig,
      );

      if (!response?.data && response.statusText === 'OK') {
        throw new Error('Axios data request has failed!');
      }

      return response.data;
    } catch (err) {
      const error = err as HttpErrorResponse;

      return {
        error: error?.response?.data?.error ?? 'An unknown error occurred',
        extra: error?.response?.data?.extra,
        status: error?.response?.status ?? 500,
        success: false,
      } as R;
    }
  }
}
