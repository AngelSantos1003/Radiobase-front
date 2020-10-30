export const isEmptyObject = obj => {
	return (
		obj &&
		typeof obj === 'object' &&
		obj.constructor === Object &&
		Object.keys(obj).length !== 0
	);
};

export const isNumber = value => {
	return typeof value === 'number' && isFinite(value);
};
