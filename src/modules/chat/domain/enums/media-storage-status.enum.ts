/**
 * @name MediaStorageStatus
 *
 * @description Represents the possible statuses of media storage within the system.
 *
 * @property AVAILABLE - The media is available
 * @property FAILED - The media failed to upload
 * @property PENDING - The media is pending upload
 */
export enum MediaStorageStatus {
  AVAILABLE = 'AVAILABLE',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
}
