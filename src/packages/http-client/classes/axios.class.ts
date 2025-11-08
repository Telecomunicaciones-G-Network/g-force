import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import type { HttpAdapter, HttpClientConfig } from "../interfaces";

import axios from "axios";

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
    );
  }

  private getRequestConfiguration(
    configurations?: HttpClientConfig,
  ): AxiosRequestConfig {
    return {
      params: configurations?.searchParams,
      headers: configurations?.headers as Record<string, string>,
    };
  }

  public async get<T = Response>(
    endpoint: string,
    configurations?: HttpClientConfig,
  ): Promise<T | Error> {
    try {
      const axiosConfig = this.getRequestConfiguration(configurations);

      const response = await this.axiosInstance.get<T>(endpoint, axiosConfig);

      if (!response?.data && response.statusText === "OK") {
        throw new Error("Axios data request has failed!");
      }

      return response.data;
    } catch (err) {
      const error = err as Error;

      console.log(error);

      return error;
    }
  }

  public async post<T = Request, R = Response>(
    endpoint: string,
    body?: T,
    configurations?: HttpClientConfig,
  ): Promise<R | Error> {
    try {
      const axiosConfig = this.getRequestConfiguration(configurations);

      const response = await this.axiosInstance.post<R>(
        endpoint,
        body,
        axiosConfig,
      );

      if (!response?.data && response.statusText === "OK") {
        throw new Error("Axios data request has failed!");
      }

      return response.data;
    } catch (err) {
      const error = err as Error;

      console.log(error);

      return error;
    }
  }
}
