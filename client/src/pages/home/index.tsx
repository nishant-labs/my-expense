import { useMemo, useState } from 'react';
import { TabsProps, Tabs, Select } from 'antd';
import { LAST_5_YEARS, MONTH_NAMES } from '../../constants';
import { ExpenseSummary } from './ExpenseSummary';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [_, ...monthNames] = MONTH_NAMES;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [__, ...yearList] = LAST_5_YEARS;

const Home = () => {
	const { month, year } = useMemo(() => {
		const todaysDate = new Date();
		todaysDate.setMonth(todaysDate.getMonth() + 1);
		return {
			month: todaysDate.getMonth(),
			year: todaysDate.getFullYear(),
		};
	}, []);

	const [selectedYear, setSelectedYear] = useState(year);

	const monthList = useMemo<TabsProps['items']>(
		() =>
			monthNames.map(({ id, label, value }) => ({
				key: id,
				label,
				children: <ExpenseSummary month={value as string} year={selectedYear} />,
				disabled: selectedYear === year ? parseInt(value as string) > month : false,
			})),
		[month, year, selectedYear],
	);

	return (
		<>
			<h2>Monthly Expense Report</h2>
			<Tabs
				tabBarExtraContent={<Select defaultValue={selectedYear} onChange={setSelectedYear} options={yearList} />}
				items={monthList}
			/>
			{/* <Tabs activeKey={key} onSelect={(k) => setKey(k!)} className="mb-3">
				{monthNames.map(({ id, label, value }, index) => (
					<Tab key={value as string} eventKey={id} title={label} disabled={index > month} unmountOnExit>
						<ExpenseSummary month={value as string} year={year} />
					</Tab>
				))}
			</Tabs> */}
		</>
	);
};

export default Home;
