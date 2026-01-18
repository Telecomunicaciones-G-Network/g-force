/**
 * Message contact interface
 *
 * @property birthday - The birthday of the contact
 * @property emails - The emails of the contact
 * @property formattedName - The formatted name of the contact
 * @property phoneNumbers - The phone numbers of the contact
 * @property urls - The urls of the contact
 */
export interface MessageContact {
  birthday: string;
  emails: string[];
  formattedName: string;
  phoneNumbers: string[];
  urls: string[];
}
