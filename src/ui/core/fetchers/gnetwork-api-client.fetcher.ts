// TODO: Debo revisar mas a fondo este archivo

import { Fetch } from "@http-client/classes/fetch.class";
import { HttpClient } from "@http-client/classes/http-client.class";

const fetcher = new Fetch({
  parseHeaders: {
    "Content-Type": "application/json",
  },
});

export const gnetworkApiClient = new HttpClient(
  process.env.NEXT_PUBLIC_GNETWORK_API_BASE_URL ?? "http://localhost:3000",
  fetcher,
);
