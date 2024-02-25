export const generateExpressionAttribute = (prefix: string, itemKeys: Array<string>, item?: IndexedObject) =>
	itemKeys.reduce((accumulator, k, index) => ({ ...accumulator, [`${prefix}${index}`]: item ? item[k] : k }), {});
