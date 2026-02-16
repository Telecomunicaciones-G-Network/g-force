/**
 * Defines the possible orders for sorting.
 */
type SortOrder = 'asc' | 'desc';

/**
 * Parameters for the sortByProperty utility function.
 */
interface SortArrayByObjectPropertyParams<T> {
  /** The array of objects to be sorted. */
  data: T[];
  /** The sort order: 'asc' for ascending, 'desc' for descending. */
  order: SortOrder;
  /** The key of the property in T to sort by. */
  property: string;
}

/**
 * Sorts an array of objects by a specified property, in either ascending or descending order.
 *
 * - Nullish properties (null or undefined) are handled by placing them at either the beginning or end according to the order.
 * - The sort is stable for equal values.
 *
 * @typeParam T - The type of objects inside the array. Must be a record with string keys.
 * @param params - The parameters for sorting: data array, order, and property key.
 * @returns A new sorted array of objects by the specified property. Returns the original array if input is invalid or empty.
 */
export const sortArrayByObjectProperty = <T extends Record<string, unknown>>(
  params: SortArrayByObjectPropertyParams<T>,
): T[] => {
  const { data, order, property } = params;

  if (!data || !Array.isArray(data) || data.length === 0) {
    return data;
  }

  const sortedData = [...data].sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (valueA == null && valueB == null) return 0;
    if (valueA == null) return order === 'asc' ? -1 : 1;
    if (valueB == null) return order === 'asc' ? 1 : -1;

    if (valueA < valueB) return order === 'asc' ? -1 : 1;
    if (valueA > valueB) return order === 'asc' ? 1 : -1;
    return 0;
  });

  return sortedData;
};
