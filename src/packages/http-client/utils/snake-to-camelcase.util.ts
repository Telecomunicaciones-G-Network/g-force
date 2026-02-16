import { snakeToCamel } from './snake-to-camel.util';

export function snakeToCamelCase<T = unknown>(obj: T): T {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => snakeToCamelCase(item)) as T;
  }

  if (typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return obj;
  }

  const converted = {} as Record<string, unknown>;

  for (const [key, value] of Object.entries(obj)) {
    const camelKey = snakeToCamel(key);

    converted[camelKey] = snakeToCamelCase(value);
  }

  return converted as T;
}
