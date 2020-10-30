export const toNumber = value => {
	return Number(value);
};

export const toCurrency = value => {
	let toNumber = value.toLocaleString('es-MX');
	return toNumber;
};

export const currencyStringToNumber = value => {
	let fromString = value.toString();
	return parseFloat(fromString.replace(/[^0-9\.]+/g, ''));
};

export const currencyNumberToString = value => {
	let fromString = value.toString();
	if (typeof Number(fromString) === 'number' && isFinite(Number(fromString))) {
		return `$\n${parseFloat(fromString.replace(/[^0-9\.]+/g, '')).toLocaleString('es-MX')}`;
	}
};
