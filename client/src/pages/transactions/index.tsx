import { useState } from 'react';
import { Select, Form, Row, Col } from 'antd';
import { LAST_5_YEARS, MONTH_NAMES } from '../../constants';
import { TransactionGridByMonth } from './transactionGrid';
import { UploadTransaction } from './components/UploadTransaction';

const Transactions = () => {
	const [form] = Form.useForm();
	const [selectedYear, setSelectedYear] = useState<string>('');
	const [selectedMonth, setSelectedMonth] = useState<string>('');

	return (
		<>
			<h2>Transactions</h2>
			<Row>
				<Col span={24}>
					<Form layout="inline" form={form} style={{ marginBottom: 20 }}>
						<Row>
							<Col span={4}>
								<Form.Item style={{ width: 250 }}>
									<Select
										placeholder="Year selection"
										value={selectedYear}
										options={LAST_5_YEARS}
										onChange={setSelectedYear}
										allowClear
									/>
								</Form.Item>
							</Col>
							<Col span={4}>
								<Form.Item style={{ width: 250 }}>
									<Select
										placeholder="Month Selection"
										value={selectedMonth}
										options={MONTH_NAMES}
										onChange={setSelectedMonth}
										allowClear
									/>
								</Form.Item>
							</Col>
							<Col span={16}>
								<Form.Item>
									<UploadTransaction />
								</Form.Item>
							</Col>
						</Row>
					</Form>
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
