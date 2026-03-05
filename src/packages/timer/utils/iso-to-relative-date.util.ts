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

const formatTime = (date: Date): string => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hours}:${minutesStr}${ampm}`;
};

export const isoToRelativeDate = (data: string): string => {
  if (!data || typeof data !== 'string') return '';

  try {
    const date = new Date(data);
    if (isNaN(date.getTime())) return '';

    const diffMs = Date.now() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);

    if (diffSeconds < 60) return 'ahora';
    if (diffMinutes === 1) return 'hace 1 minuto';
    if (diffMinutes < 60) return `hace ${diffMinutes} minutos`;
    if (diffHours === 1) return 'hace 1 hora';
    if (diffHours < 24) return `hace ${diffHours} horas`;
    if (diffDays === 1) return 'hace un día';
    if (diffDays < 30) return `hace ${diffDays} días`;
    if (diffMonths === 1) return 'hace 1 mes';
    return `hace ${diffMonths} meses`;
  } catch (_error) {
    return '';
  }
};

export const isoToFullDate = (data: string): string => {
  if (!data || typeof data !== 'string') return '';

  try {
    const date = new Date(data);
    if (isNaN(date.getTime())) return '';

    const day = date.getDate();
    const month = MONTHS_ES[date.getMonth()];
    const year = date.getFullYear();
    const time = formatTime(date);

    return `${day} de ${month} de ${year} ${time}`;
  } catch (_error) {
    return '';
  }
};
