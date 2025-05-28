/**
 * Executes a function and returns a result object containing either the data or an error.
 * @template T
 * @template [E=Error]
 * @overload
 * @param {() => T} input A function to execute.
 * @returns {Result<T, E>} A result object with either `data` and `error: null`, or `data: null` and `error`.
 */
export function tryCatch<T, E = Error>(input: () => T): Result<T, E>;
/**
 * Executes a promise and returns a promise that resolves to a result object containing either the data or an error.
 * @template T
 * @template [E=Error]
 * @overload
 * @param {Promise<T>} input A promise to execute.
 * @returns {Promise<Result<T, E>>} A promise that resolves to a result object with either `data` and `error: null`, or `data: null` and `error`.
 */
export function tryCatch<T, E = Error>(input: Promise<T>): Promise<Result<T, E>>;
export type Success<T> = {
    data: T;
    error: null;
};
export type Failure<E> = {
    data: null;
    error: E;
};
export type Result<T, E> = Success<T> | Failure<E>;
