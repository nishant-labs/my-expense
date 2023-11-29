import 'react-bootstrap-typeahead/css/Typeahead.css';

import { FC, useCallback } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Option } from 'react-bootstrap-typeahead/types/types';

interface TransactionSelectorInputProps {
	selected: Array<string>;
	options?: Array<string>;
	onChange: (selectedTransactions: Array<string>) => void;
}

export const TransactionSelectorInput: FC<TransactionSelectorInputProps> = ({ options, selected, onChange }) => {
	const handleChange = useCallback(
		(selectedTransactions: Array<Option>) => {
			const matcherList = selectedTransactions.map<string>((selectedInput) => {
				if (typeof selectedInput === 'string') {
					return selectedInput;
				}
				return selectedInput?.matcher;
			});
			onChange(matcherList);
		},
		[onChange],
	);

	return (
		<Typeahead
			id="transactionSelector"
			labelKey="matcher"
			onChange={handleChange}
			options={options ?? []}
			placeholder="Select transactions"
			selected={selected}
			multiple
			allowNew
		/>
	);
};
