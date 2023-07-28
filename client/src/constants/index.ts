import { SelectOption } from '../layout/body/components/FormSelectBase';

export const MONTH_NAMES: Array<SelectOption> = Array(13)
	.fill('')
	.map((_, index) => {
		if (index === 0) {
			return {
				label: 'Select Month',
				value: '',
			};
		}
		const date = new Date(0, index - 1);
		return {
			label: date.toLocaleString('en-GB', { month: 'long' }),
			value: (date.getMonth() + 1).toLocaleString('en-GB', {
				minimumIntegerDigits: 2,
				maximumFractionDigits: 0,
				useGrouping: false,
			}),
		};
	});

export const LAST_5_YEARS: Array<SelectOption> = Array(6)
	.fill(new Date().getFullYear())
	.map((year, index) => {
		if (index === 0) {
			return {
				label: 'Select Year',
				value: '',
			};
		}
		const value = year - (index - 1);
		return { label: value.toString(), value };
	});

export const ACCOUNT_TYPE = [
	{ label: 'Select Account Type', value: '' },
	{ label: 'Savings/Current Account', value: 'account' },
	{ label: 'Credit Card', value: 'creditCard' },
];
