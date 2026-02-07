/**
 * @name MessageLocation
 *
 * @description This interface represents the values of a message location.
 *
 * @property {string} address - The address of the location.
 * @property {number} latitude - The latitude of the location.
 * @property {number} longitude - The longitude of the location.
 * @property {string} name - The name of the location.
 */
export interface MessageLocation {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}
