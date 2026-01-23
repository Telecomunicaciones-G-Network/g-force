import { v4 as uuid } from 'uuid';

/**
 * Download file by URL
 *
 * This utility downloads a file from a given URL.
 *
 * @param src - The source URL of the file
 * @param filename - The filename of the file
 * @param fileExtension - The file extension of the file
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
