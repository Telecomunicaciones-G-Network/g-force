interface LoginActionStateErrors {
  email?: string[];
  form?: string[];
  password?: string[];
}

export interface LoginActionState {
  errors?: LoginActionStateErrors;
  message?: string;
  success?: boolean;
}
