export const isoToTime = (data: string): string => {
  if (!data || typeof data !== 'string') {
    return '';
  }

  try {
    const date = new Date(data);

    if (isNaN(date.getTime())) {
      return '';
    }

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${hours}:${minutesStr} ${ampm}`;
  } catch (_error) {
    return '';
  }
};
