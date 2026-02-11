import { alertSchemes } from '../variants/alert-scheme.variant';

/**
 * @type AlertSchemeType
 *
 * @description The type for the alert scheme.
 *
 * @property {string} error - The error scheme.
 * @property {string} neutral - The neutral scheme.
 * @property {string} success - The success scheme.
 * @property {string} wait - The wait scheme.
 * @property {string} warning - The warning scheme.
 */
export type AlertSchemeType = keyof typeof alertSchemes;
