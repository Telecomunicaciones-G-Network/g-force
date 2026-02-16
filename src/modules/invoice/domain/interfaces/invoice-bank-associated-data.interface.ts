/**
 * @name InvoiceBankAssociatedData
 *
 * @description This interface represents the bank associated data for an invoice.
 *
 * @property {string} bankAccountNumber - The bank account number
 * @property {string} bankAcronym - The bank acronym
 * @property {string} bankCode - The bank code
 * @property {string} bankIdentification - The bank identification
 * @property {string} bankName - The bank name
 * @property {string} bankPhone - The bank phone
 */
export interface InvoiceBankAssociatedData {
  bankAccountNumber: string;
  bankAcronym: string;
  bankCode: string;
  bankIdentification: string;
  bankName: string;
  bankPhone: string;
}
