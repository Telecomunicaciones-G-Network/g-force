export interface Usecase<P, T> {
  execute(params?: P): T | Promise<T>;
}
