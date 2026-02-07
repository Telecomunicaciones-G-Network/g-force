export const isFileMimetypeValid = (
  fileMimetype: string,
  allowedMimetypes: string[],
): boolean => {
  if (
    !fileMimetype ||
    !Array.isArray(allowedMimetypes) ||
    allowedMimetypes.length === 0
  )
    return false;

  if (allowedMimetypes?.includes(fileMimetype)) return true;

  return false;
};
