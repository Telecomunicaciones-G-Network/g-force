export interface SocketResponseDetails {
  exc_message: string;
  exc_type: string;
}

export interface SocketResponse {
  details?: SocketResponseDetails;
  error_code?: string;
  message?: string;
  success: boolean;
}
