import { useState } from 'react';
import { Select, Form, Row, Col } from 'antd';
import { CURRENT_MONTH, CURRENT_YEAR, LAST_5_YEARS, MONTH_NAMES } from '../../constants';
import { TransactionGridByMonth } from './transactionGrid';
import { UploadTransaction } from './components/UploadTransaction';

const Transactions = () => {
	const [selectedYear, setSelectedYear] = useState<number>(CURRENT_YEAR.value);
	const [selectedMonth, setSelectedMonth] = useState<string>(CURRENT_MONTH.value);

	return (
		<>
			<h2>Transactions</h2>
			<Row align="middle" justify="space-between">
				<Col span={4}>
					<Row align="middle" justify="space-between">
						<Col span={11}>
							<Form.Item>
								<Select
									placeholder="Year selection"
									value={selectedYear}
									options={LAST_5_YEARS}
									onChange={setSelectedYear}
									allowClear
								/>
							</Form.Item>
						</Col>
						<Col span={11}>
							<Form.Item>
								<Select
									placeholder="Month Selection"
									value={selectedMonth}
									options={MONTH_NAMES}
									onChange={setSelectedMonth}
									allowClear
								/>
							</Form.Item>
						</Col>
					</Row>
				</Col>
				<Col flex="none" span={4}>
					<Form.Item>
						<UploadTransaction />
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col span={24}>
					{selectedYear && selectedMonth && <TransactionGridByMonth month={selectedMonth} year={selectedYear} />}
				</Col>
			</Row>
		</>
	);
};

export default Transactions;
