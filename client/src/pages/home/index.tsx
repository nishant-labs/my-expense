import { useMemo, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MONTH_NAMES } from '../../constants';
import { ExpenseSummary } from './ExpenseSummary';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [_, ...monthNames] = MONTH_NAMES;

const Home = () => {
	const [key, setKey] = useState(monthNames[0].label.toLowerCase());
	const { month, year } = useMemo(() => {
		const todaysDate = new Date();
		todaysDate.setMonth(todaysDate.getMonth() - 1);
		return {
			month: todaysDate.getMonth(),
			year: todaysDate.getFullYear().toString(),
		};
	}, []);
	return (
		<>
			<h2>Monthly Expense Report</h2>
			<Tabs activeKey={key} onSelect={(k) => setKey(k!)} className="mb-3">
				{monthNames.map(({ label, value }, index) => (
					<Tab key={value as string} eventKey={label.toLowerCase()} title={label} disabled={index > month}>
						<ExpenseSummary month={value as string} year={year} />
					</Tab>
				))}
			</Tabs>
		</>
	);
};

export default Home;
