//#region src/index.ts
function tryCatch(input) {
	if (typeof input === "function") try {
		return {
			data: input(),
			error: null
		};
	} catch (error) {
		return {
			data: null,
			error
		};
	}
	if (input instanceof Promise) return input.then((data) => ({
		data,
		error: null
	})).catch((error) => ({
		data: null,
		error
	}));
	throw new Error("Input must be a function or a promise.");
}

//#endregion
export { tryCatch };