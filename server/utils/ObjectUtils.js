export const generateExpressionAttribute = (prefix, itemKeys, item) => itemKeys.reduce((accumulator, k, index) => ({ ...accumulator, [`${prefix}${index}`]: item ? item[k] : k }), {});
