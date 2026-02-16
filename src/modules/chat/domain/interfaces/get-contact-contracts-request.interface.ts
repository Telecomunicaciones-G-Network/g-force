/**
 * @name GetContactContractsRequest
 *
 * @description This interface represents the request for getting the contact contracts.
 *
 * @property {string} contactId - The ID of the contact.
 * @property {number} limit - The limit of the contracts.
 * @property {number} page - The page of the contracts.
 */
export interface GetContactContractsRequest {
  contactId?: string;
  limit?: number;
  page?: number;
}
