import { v4 as uuid } from 'uuid';

/**
 * @name downloadFileByUrl
 *
 * @description This utility downloads a file from a given URL.
 *
 * @param {string} src - The source URL of the file
 * @param {string} [filename] - The optional filename of the file
 * @param {string} [fileExtension] - The optional file extension of the file
 *
 * @returns void
 */
export const downloadFileByUrl = async (
  src: string,
  filename?: string,
  fileExtension?: string,
): Promise<void> => {
  if (!src || typeof src !== 'string') {
    console.warn('src was not provided on downloadFileByUrl utility');

    return;
  }

  try {
    const parsedFilename = filename ?? uuid();
    const link = document.createElement('a');

    link.href = src;
    link.download = fileExtension
      ? `${parsedFilename}.${fileExtension}`
      : parsedFilename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (src.startsWith('blob:')) {
      setTimeout(() => URL.revokeObjectURL(src), 100);
    }
  } catch {
    console.error('Error downloading file on downloadFileByUrl utility');

    return;
  }
};
