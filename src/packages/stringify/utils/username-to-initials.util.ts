// CHECKED:

export const usernameToInitials = (username: string): string => {
  if (!username || typeof username !== 'string') return '';

  return username
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
};
