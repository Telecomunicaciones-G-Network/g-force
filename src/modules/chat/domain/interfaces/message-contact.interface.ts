/**
 * @name MessageContact
 *
 * @description This interface represents the values of a message contact.
 *
 * @property {string} birthday - The birthday of the contact.
 * @property {string[]} emails - The emails of the contact.
 * @property {string} formattedName - The formatted name of the contact.
 * @property {string[]} phoneNumbers - The phone numbers of the contact.
 * @property {string[]} urls - The urls of the contact.
 */
export interface MessageContact {
  birthday: string;
  emails: string[];
  formattedName: string;
  phoneNumbers: string[];
  urls: string[];
}
