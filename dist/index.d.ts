//#region src/index.d.ts
interface Success<T> {
  data: T;
  error: undefined;
}
interface Failure<E> {
  data: undefined;
  error: E;
}
type Result<T, E> = Success<T> | Failure<E>;
/**
 * Executes a function and returns a result object containing either the data or an error.
 * @param fn A function to execute.
 * @returns A result object with either `data` and `error: undefined`, or `data: undefined` and `error`.
 */
declare function tryCatch<T, E = Error>(fn: () => T): Result<T, E>;
/**
 * Executes a promise and returns a promise that resolves to a result object containing either the data or an error.
 * @param promise A promise to execute.
 * @returns A promise that resolves to a result object with either `data` and `error: undefined`, or `data: undefined` and `error`.
 */
declare function tryCatch<T, E = Error>(promise: Promise<T>): Promise<Result<T, E>>;
//#endregion
export { tryCatch };