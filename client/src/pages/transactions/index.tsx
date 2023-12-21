import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LAST_5_YEARS, MONTH_NAMES } from '../../constants';
import { TransactionGridByMonth } from './transactionGrid';
import { FormSelectBase, OptionValueType } from '../../components/FormSelectBase';
import { UploadTransaction } from './components/UploadTransaction';

const Transactions = () => {
	const [selectedYear, setSelectedYear] = useState<string>('');
	const [selectedMonth, setSelectedMonth] = useState<string>('');

	const handleYearSelection = (value: OptionValueType) => {
		setSelectedMonth('');
		setSelectedYear(value as string);
	};

	return (
		<>
			<h2>Transactions</h2>
			<Row className="mb-4">
				<Col>
					<FormSelectBase
						ariaLabel="Year selection"
						selected={selectedYear}
						options={LAST_5_YEARS}
						onSelect={handleYearSelection}
					/>
				</Col>
				<Col>
					<FormSelectBase
						ariaLabel="Month Selection"
						selected={selectedMonth}
						options={MONTH_NAMES}
						onSelect={(value) => setSelectedMonth(value as string)}
					/>
				</Col>
				<Col className="d-grid">
					<UploadTransaction />
				</Col>
			</Row>
			<Row>
				<Col>
					{selectedYear && selectedMonth && <TransactionGridByMonth month={selectedMonth} year={selectedYear} />}
				</Col>
			</Row>
		</>
	);
};

export default Transactions;
