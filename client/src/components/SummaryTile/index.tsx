import { FC } from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import { SummaryTilePropsWithBody, SummaryTilePropsWithChild } from './index.interface';
import './styles.css';

const { Title } = Typography;

export const SummaryTile: FC<SummaryTilePropsWithBody | SummaryTilePropsWithChild> = ({
	height = '250px',
	body,
	children,
	actionText,
	onClick,
}) => (
	<Card
		className="summary-tile-fill"
		style={{ height, boxShadow: '#3399F3 5px 5px 5px' }}
		title={body?.title}
		size="small"
		extra={
			actionText ? (
				<Button type="link" block onClick={onClick}>
					{actionText}
				</Button>
			) : null
		}
	>
		{body?.text ? (
			<Flex align="center" justify="center" vertical style={{ padding: '5.7em' }}>
				<Title level={2}>{body?.text}</Title>
			</Flex>
		) : (
			children
		)}
	</Card>
);
