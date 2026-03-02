const MONTHS_ES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
] as const;

/**
 * Returns "dd de Mes de yyyy" for a given ISO date string.
 * Example: "21 de febrero de 2026"
 */
export const isoToDayLabel = (iso: string): string => {
  if (!iso) return '';

  try {
    const date = new Date(iso);
    if (isNaN(date.getTime())) return '';

    const day = date.getDate();
    const month = MONTHS_ES[date.getMonth()];
    const year = date.getFullYear();
    return `${day} de ${month} de ${year}`;
  } catch {
    return '';
  }
};

/**
 * Returns true if two ISO strings belong to different calendar days.
 */
export const isDifferentDay = (isoA: string, isoB: string): boolean => {
  try {
    const a = new Date(isoA);
    const b = new Date(isoB);
    return (
      a.getFullYear() !== b.getFullYear() ||
      a.getMonth() !== b.getMonth() ||
      a.getDate() !== b.getDate()
    );
  } catch {
    return false;
  }
};
