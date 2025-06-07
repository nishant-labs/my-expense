import { SelectProps } from 'antd';

export type OptionType = NonNullable<SelectProps['options']>[number];
export interface SelectOptionType extends OptionType {
	id: string;
}

export const CURRENT_DATE = new Date();

export const CURRENT_YEAR = {
	id: CURRENT_DATE.getFullYear().toString().toLowerCase(),
	label: CURRENT_DATE.getFullYear().toString(),
	value: CURRENT_DATE.getFullYear(),
};

export const CURRENT_MONTH = {
	id: CURRENT_DATE.getMonth().toString().toLowerCase(),
	label: CURRENT_DATE.toLocaleString('en-GB', { month: 'long' }),
	value: (CURRENT_DATE.getMonth() + 1).toLocaleString('en-GB', {
		minimumIntegerDigits: 2,
		maximumFractionDigits: 0,
		useGrouping: false,
	}),
};

export const MONTH_NAMES: Array<SelectOptionType> = Array(13)
	.fill('')
	.map((_, index) => {
		if (index === 0) {
			return {
				id: '',
				label: 'Select Month',
				value: '',
			};
		}
		const date = new Date(0, index - 1);
		const label = date.toLocaleString('en-GB', { month: 'long' });
		return {
			id: label.toLowerCase(),
			label,
			value: (date.getMonth() + 1).toLocaleString('en-GB', {
				minimumIntegerDigits: 2,
				maximumFractionDigits: 0,
				useGrouping: false,
			}),
		};
	});

export const LAST_5_YEARS: Array<SelectOptionType> = Array(6)
	.fill(new Date().getFullYear())
	.map((year, index) => {
		if (index === 0) {
			return {
				id: '',
				label: 'Select Year',
				value: '',
			};
		}
		const value = year - (index - 1);
		return { id: value.toString().toLowerCase(), label: value.toString(), value };
	});

export const ACCOUNT_TYPE = [
	{ label: 'Select Account Type', value: '' },
	{ label: 'Savings/Current Account', value: 'account' },
	{ label: 'Credit Card', value: 'creditCard' },
];
