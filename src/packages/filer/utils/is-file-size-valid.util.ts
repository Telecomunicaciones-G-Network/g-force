export const isFileSizeValid = (
  fileSize: number,
  maximumAllowedFileSize: number,
): boolean => {
  if (
    typeof fileSize !== 'number' ||
    typeof maximumAllowedFileSize !== 'number' ||
    fileSize < 0 ||
    maximumAllowedFileSize < 0
  )
    return false;

  if (fileSize > maximumAllowedFileSize) return false;

  return true;
};
