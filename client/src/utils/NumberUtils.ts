export const formatNumberAsCurrency = (numberData: number, displaySign = true, fractionalDigits = 2) =>
	numberData.toLocaleString('en-GB', {
		minimumFractionDigits: fractionalDigits,
		maximumFractionDigits: fractionalDigits,
		signDisplay: displaySign ? 'auto' : 'never',
		style: 'currency',
		currency: 'GBP',
	});
