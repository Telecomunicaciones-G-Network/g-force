/**
 * Message location interface
 *
 * @property address - The address of the location
 * @property latitude - The latitude of the location
 * @property longitude - The longitude of the location
 * @property name - The name of the location
 */
export interface MessageLocation {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}
