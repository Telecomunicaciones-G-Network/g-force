/**
 * @function validateSearchParams
 *
 * @description This function validates the search params.
 *
 * @param {string | undefined} value - The value to validate.
 * @param {readonly T[]} allowedValues - The allowed values.
 *
 * @returns {T | undefined} The validated value.
 */
export function validateSearchParams<T extends string>(
  value: string | undefined,
  allowedValues: readonly T[],
): T | undefined {
  if (value === undefined) return undefined;

  return allowedValues.includes(value as T) ? (value as T) : undefined;
}
