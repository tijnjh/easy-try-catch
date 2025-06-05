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
export function tryCatch<T, E = Error>(fn: () => T): Result<T, E>;

/**
 * Executes a promise and returns a promise that resolves to a result object containing either the data or an error.
 * @param promise A promise to execute.
 * @returns A promise that resolves to a result object with either `data` and `error: undefined`, or `data: undefined` and `error`.
 */
export function tryCatch<T, E = Error>(
  promise: Promise<T>,
): Promise<Result<T, E>>;

export function tryCatch<T, E = Error>(
  input: (() => T) | Promise<T>,
): Result<T, E> | Promise<Result<T, E>> {
  if (typeof input === "function") {
    try {
      return { data: input(), error: undefined };
    } catch (error) {
      return { data: undefined, error: error as E };
    }
  }

  if (input instanceof Promise) {
    return input
      .then(
        (data): Success<T> => ({
          data: data,
          error: undefined,
        }),
      )
      .catch(
        (error): Failure<E> => ({
          data: undefined,
          error: error as E,
        }),
      );
  }

  throw new Error("Input must be a function or a promise.");
}
