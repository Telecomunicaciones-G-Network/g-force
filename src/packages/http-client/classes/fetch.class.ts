import type {
  FetchOptions,
  HttpAdapter,
  HttpClientConfig,
} from "../interfaces";

import { fetchErrorHandler } from "../utils/fetch-error-handler.util";

export class Fetch implements HttpAdapter {
  constructor(private options?: FetchOptions) {}

  async get<T = Response>(
    endpoint: string,
    configurations?: HttpClientConfig,
  ): Promise<T | Error> {
    try {
      let parsedParams = "";
      let parsedSearchParams = "";
      if (configurations?.params) {
        parsedParams = this.parseParams(configurations.params);
      }
      if (configurations?.searchParams) {
        parsedSearchParams = this.parseSearchParams(
          configurations?.searchParams,
        );
      }
      const locale = configurations?.locale || undefined;
      const fetchConfig = this.sanitizeConfiguration(configurations || {});
      const response = await fetch(
        endpoint + parsedParams + parsedSearchParams,
        {
          method: "GET",
          ...fetchConfig,
          headers: {
            ...this.options?.parseHeaders,
            ...fetchConfig.headers,
            "Accept-Language": locale as string,
          },
        },
      );
      const data: T = await response.json();
      if (!response.ok || response.status !== 200) {
        throw new Error(fetchErrorHandler(response.status), {
          cause: response.status,
        });
      }
      return data;
    } catch (err) {
      const error = err as Error;
      console.error(error);
      return error;
    }
  }

  async post<T = Request, R = Response>(
    endpoint: string,
    body?: T,
  ): Promise<R | Error> {
    const headers = {
      Accept: "application/json; version=1.0.0",
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: body ? JSON.stringify(body) : undefined,
        headers,
      });

      console.log("response", response);

      const data: R = await response.json();
      if (!response.ok || response.status !== 200) {
        throw new Error(fetchErrorHandler(response.status), {
          cause: response.status,
        });
      }
      return data;
    } catch (err) {
      const error = err as Error;
      console.error(error);
      return error;
    }
  }

  private parseParams(params?: string[]): string {
    if (!params) {
      return "";
    }
    if (!Array.isArray(params)) {
      throw new Error(
        "params on FetchAdapter class must be a valid string array.",
      );
    }
    if (params?.length === 0) {
      return "";
    }
    const parseParams = params.join("/");
    return `/${parseParams}`;
  }

  private parseSearchParams(searchParams: Record<string, string>): string {
    if (!searchParams) {
      return "";
    }
    if (typeof searchParams !== "object") {
      throw new Error(
        "searchParams on FetchAdapter class must be a valid object.",
      );
    }
    const formattedSearchParams = new URLSearchParams(searchParams);
    return `?${formattedSearchParams}`;
  }

  private sanitizeConfiguration(configurations: HttpClientConfig): RequestInit {
    delete configurations.params;
    delete configurations.searchParams;
    delete configurations.locale;
    return configurations;
  }
}
