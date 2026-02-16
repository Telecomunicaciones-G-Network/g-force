export const parseMimetypesToFileInputAccept = (
  extensions: string[],
): string => {
  if (!Array.isArray(extensions) || extensions.length === 0) {
    return '';
  }

  return extensions.join(',');
};
