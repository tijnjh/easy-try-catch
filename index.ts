/**
 * Executes a function or a promise and returns a tuple containing the result or an error.
 *
 * @template T The type of the result.
 * @template E The type of the error.
 * @param {(Function|Promise<T>)} input - A function or a promise to execute.
 * @returns {(Promise<[T|null, E|null]>|[T|null, E|null])} A tuple containing the result or an error.
 *
 * @example
 * // Using tryCatch with a function
 * const [result, error] = tryCatch(() => {
 *   if (Math.random() > 0.5) {
 *     throw new Error("Random error");
 *   }
 *   return "Success";
 * });
 *
 * if (error) {
 *   console.error("Function failed:", error.message);
 * } else {
 *   console.log("Function succeeded:", result);
 * }
 *
 * @example
 * // Using tryCatch with a promise
 * const promise = new Promise((resolve, reject) => {
 *   setTimeout(() => {
 *     if (Math.random() > 0.5) {
 *       reject(new Error("Random promise error"));
 *     } else {
 *       resolve("Promise success");
 *     }
 *   }, 1000);
 * });
 *
 * tryCatch(promise).then(([result, error]) => {
 *   if (error) {
 *     console.error("Promise failed:", error.message);
 *   } else {
 *     console.log("Promise succeeded:", result);
 *   }
 * });
 * 
 * 
 * @deprecated
 * This function is now part of https://tijn.dev/tsuite
 */
function tryCatch<T, E = Error>(
  input: (() => T) | Promise<T>
): Promise<[T | null, E | null]> | [T | null, E | null] {
  if (typeof input === "function") {
    try {
      return [input(), null];
    } catch (error) {
      return [null, error as E];
    }
  } else if (input instanceof Promise) {
    return input
      .then((data): [T, null] => [data, null])
      .catch((error): [null, E] => [null, error as E]);
  } else {
    throw new Error("Input must be a function or a promise.");
  }
}

module.exports = tryCatch;
