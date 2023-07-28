import 'react-bootstrap-typeahead/css/Typeahead.css';

import { FC, useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Option } from 'react-bootstrap-typeahead/types/types';

interface TransactionSelectorInputProps {
	selected: Array<string>;
	options?: Array<string>;
	onChange: (selectedTransactions: Array<string>) => void;
}

export const TransactionSelectorInput: FC<TransactionSelectorInputProps> = ({
	options,
	selected,
	onChange,
}) => {
	const [selectedTransactions, setSelectedTransactions] = useState<
		Array<Option>
	>(selected ?? []);

	useEffect(() => {
		const matcherList = selectedTransactions.map<string>((selectedInput) => {
			if (typeof selectedInput === 'string') {
				return selectedInput;
			}
			return selectedInput?.matcher;
		});
		onChange(matcherList);
	}, [selectedTransactions, onChange]);

	useEffect(() => {
		if (selected.length === 0) {
			setSelectedTransactions([]);
		}
	}, [selected.length]);

	return (
		<Typeahead
			id="transactionSelector"
			labelKey="matcher"
			multiple
			onChange={setSelectedTransactions}
			options={options ?? []}
			placeholder="Select transactions"
			selected={selectedTransactions}
			allowNew
		/>
	);
};
