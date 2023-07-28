import { FC, useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BACKGROUND_COLORS } from '../../../../constants/chart-options';

ChartJS.register(ArcElement, Tooltip, Legend);

const generateChartData = (
	label: string,
	labels: Array<string>,
	data: Array<number>
) => ({
	labels,
	datasets: [
		{
			label,
			data,
			backgroundColor: labels.map((_, index) => BACKGROUND_COLORS[index]),
			borderWidth: 1,
		},
	],
});

interface DoughnutChartProps {
	messagePrefix: string;
	labels: Array<string>;
	values: Array<number>;
}

export const DoughnutChart: FC<DoughnutChartProps> = ({
	messagePrefix,
	labels,
	values,
}) => {
	const chartData = useMemo(
		() => generateChartData(messagePrefix, labels, values),
		[messagePrefix, labels, values]
	);
	return <Doughnut data={chartData} />;
};
