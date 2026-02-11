/**
 * @name alertSchemes
 *
 * @description The variants for the alert component.
 *
 * @property {string} error - The error variant.
 * @property {string} neutral - The neutral variant.
 * @property {string} success - The success variant.
 * @property {string} wait - The wait variant.
 * @property {string} warning - The warning variant.
 */
export const alertSchemes = {
  error: 'bg-red-600 text-red-100',
  neutral: 'bg-chromatic-inverted text-chromatic',
  success: 'bg-tag-green-background text-tag-green-foreground',
  wait: 'bg-dark-blue-background text-dark-blue-foreground',
  warning: 'bg-warning-100 text-warning-300',
} as const;
