// TODO: Debo pasar esa configuracion de headers a un archivo de configuracion o constante

import { Axios } from "@http-client/classes/axios.class";
import { HttpClient } from "@http-client/classes/http-client.class";

import { ENVS } from "@ui-core/envs/envs";

const fetcher = new Axios({
  baseURL: ENVS.GNETWORK_API_BASE_URL,
  headers: {
    Accept: "application/json; version=1.0.0",
    "Content-Type": "application/json",
  },
});

export const gnetworkApiClient = new HttpClient(
  ENVS.GNETWORK_API_BASE_URL,
  fetcher,
);
