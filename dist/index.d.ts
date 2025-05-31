//#region src/index.d.ts
interface Success<T> {
  data: T;
  error: null;
}
interface Failure<E> {
  data: null;
  error: E;
}
type Result<T, E> = Success<T> | Failure<E>;
/**
 * Executes a function and returns a result object containing either the data or an error.
 * @param fn A function to execute.
 * @returns A result object with either `data` and `error: null`, or `data: null` and `error`.
 */
declare function tryCatch<T, E = Error>(fn: () => T): Result<T, E>;
/**
 * Executes a promise and returns a promise that resolves to a result object containing either the data or an error.
 * @param promise A promise to execute.
 * @returns A promise that resolves to a result object with either `data` and `error: null`, or `data: null` and `error`.
 */
declare function tryCatch<T, E = Error>(promise: Promise<T>): Promise<Result<T, E>>;
//#endregion
export { tryCatch };