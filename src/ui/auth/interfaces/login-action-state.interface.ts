interface LoginActionStateErrors {
  email?: string[];
  form?: string[];
  password?: string[];
}

export interface LoginActionState<T> {
  data?: T;
  errors?: LoginActionStateErrors;
  message?: string;
  success?: boolean;
}
