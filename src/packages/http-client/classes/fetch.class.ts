import type {
  FetchConfig,
  HttpAdapter,
  HttpClientConfiguration,
  HttpLoggerAdapter,
} from '../interfaces';

import { cookies } from 'next/headers';

import Cookies from 'js-cookie';

import { LogLevels } from '../enums/log-levels.enum';

export class Fetch implements HttpAdapter {
  constructor(
    private configuration?: FetchConfig,
    private logger?: HttpLoggerAdapter,
  ) {}

  private async injectToken(): Promise<Headers> {
    const newHeaders = new Headers();

    let token: string | undefined;

    try {
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

  private parseParams(params?: string[]): string {
    if (!params || !Array.isArray(params) || params?.length === 0) {
      return '';
    }

    const parseParams = params.join('/');

    return `/${parseParams}`;
  }

  private parseSearchParams(searchParams: Record<string, string>): string {
    if (!searchParams || typeof searchParams !== 'object') {
      return '';
    }

    const formattedSearchParams = new URLSearchParams(searchParams);

    return `?${formattedSearchParams}`;
  }

  private sanitizeConfiguration(
    configurations: HttpClientConfiguration,
  ): RequestInit {
    delete configurations.params;
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
    const tokenHeaders = await this.injectToken();
    const tokenHeadersObject = Object.fromEntries(tokenHeaders.entries());

    return fetch(endpoint + parsedParams + parsedSearchParams, {
      method: 'GET',
      ...fetchConfig,
      headers: {
        ...this.configuration?.headers,
        ...fetchConfig.headers,
        ...tokenHeadersObject,
      },
    })
      .then((response) => {
        const data = response.json() as T;

        return data;
      })
      .catch((err) => {
        this.logger?.log(err.message, LogLevels.ERROR);

        const error = err as Error;

        throw error;
      });
  }

  public async post<T = unknown, R = unknown>(
    endpoint: string,
    body?: T,
    configuration?: HttpClientConfiguration,
  ): Promise<R> {
    const fetchConfig = this.sanitizeConfiguration(configuration || {});
    const tokenHeaders = await this.injectToken();
    const tokenHeadersObject = Object.fromEntries(tokenHeaders.entries());

    return fetch(endpoint, {
      method: 'POST',
      ...fetchConfig,
      headers: {
        ...this.configuration?.headers,
        ...fetchConfig.headers,
        ...tokenHeadersObject,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        const data = response.json() as R;

        return data;
      })
      .catch((err) => {
        this.logger?.log(err.message, LogLevels.ERROR);

        const error = err as Error;

        throw error;
      });
  }
}
