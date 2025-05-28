/**
 * @template T
 * @typedef {Object} Success
 * @property {T} data
 * @property {null} error
 */

/**
 * @template E
 * @typedef {Object} Failure
 * @property {null} data
 * @property {E} error
 */

/**
 * @typedef {Success<T> | Failure<E>} Result
 * @template T
 * @template E
 */

/**
 * Executes a function and returns a result object containing either the data or an error.
 * @template T
 * @template [E=Error]
 * @overload
 * @param {() => T} input A function to execute.
 * @returns {Result<T, E>} A result object with either `data` and `error: null`, or `data: null` and `error`.
 */
/**
 * Executes a promise and returns a promise that resolves to a result object containing either the data or an error.
 * @template T
 * @template [E=Error]
 * @overload
 * @param {Promise<T>} input A promise to execute.
 * @returns {Promise<Result<T, E>>} A promise that resolves to a result object with either `data` and `error: null`, or `data: null` and `error`.
 */
/**
 * @template T
 * @template [E=Error]
 * @param {(() => T) | Promise<T>} input
 * @returns {Result<T, E> | Promise<Result<T, E>>}
 */
export function tryCatch(input) {
  if (typeof input === "function") {
    try {
      return { data: input(), error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  }
  if (input instanceof Promise) {
    return input
      .then((data) => ({
        data: data,
        error: null,
      }))
      .catch((error) => ({
        data: null,
        error: error,
      }));
  }
  throw new Error("Input must be a function or a promise.");
}
