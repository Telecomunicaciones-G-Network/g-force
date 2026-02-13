import type { ApiResponse } from '@module-core/interfaces';
import type { Contact } from './contact.interface';

/**
 * @interface GetContactsResponse
 *
 * @description This interface represents the response of the get contacts API.
 *
 * @extends {ApiResponse}
 *
 * @property {Contact[]} contacts - The contacts.
 */
export interface GetContactsResponse
  extends Omit<ApiResponse, 'extra' | 'results'> {
  contacts: Contact[];
}
