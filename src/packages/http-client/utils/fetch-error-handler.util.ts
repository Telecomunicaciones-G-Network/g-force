import { HttpStatusCode } from "../enum/http-status-code.enum";

export function fetchErrorHandler(status: number): HttpStatusCode {
  switch (status) {
    case 401:
      return HttpStatusCode.UNAUTHORIZED;
    case 403:
      return HttpStatusCode.FORBIDDEN;
    case 404:
      return HttpStatusCode.NOT_FOUND;
    case 500:
      return HttpStatusCode.INTERNAL_SERVER_ERROR;
    default:
      return HttpStatusCode.UNKNOWN;
  }
}
