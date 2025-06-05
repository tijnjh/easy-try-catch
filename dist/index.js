//#region src/index.ts
function tryCatch(input) {
	if (typeof input === "function") try {
		return {
			data: input(),
			error: void 0
		};
	} catch (error) {
		return {
			data: void 0,
			error
		};
	}
	if (input instanceof Promise) return input.then((data) => ({
		data,
		error: void 0
	})).catch((error) => ({
		data: void 0,
		error
	}));
	throw new Error("Input must be a function or a promise.");
}

//#endregion
export { tryCatch };