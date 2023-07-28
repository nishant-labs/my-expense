import { FC, SyntheticEvent, useCallback } from 'react';
import Form from 'react-bootstrap/Form';

export type OptionValueType = string | number | Readonly<string[]>;

export interface SelectOption {
	label: string;
	value: OptionValueType;
}

interface FormSelectBaseProps {
	selected: OptionValueType;
	onSelect: (value: OptionValueType) => void;
	options: Array<SelectOption>;
	ariaLabel: string;
}

export const FormSelectBase: FC<FormSelectBaseProps> = ({
	options,
	selected,
	onSelect,
	ariaLabel,
}) => {
	const handleChange = useCallback(
		(event: SyntheticEvent<HTMLSelectElement, Event>) => {
			onSelect(event.currentTarget.value);
		},
		[onSelect]
	);

	return (
		<Form.Select
			value={selected}
			aria-label={ariaLabel}
			onChange={handleChange}
		>
			{options.map(({ value, label }, index) => (
				<option key={`${value}${index}`} value={value}>
					{label}
				</option>
			))}
		</Form.Select>
	);
};
