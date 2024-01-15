import { FC } from 'react';
import Card from 'react-bootstrap/Card';
import { SummaryTilePropsWithBody, SummaryTilePropsWithChild } from './index.interface';

export const SummaryTile: FC<SummaryTilePropsWithBody | SummaryTilePropsWithChild> = ({
	height = '250px',
	body,
	children,
	actionText,
	onClick,
}) => (
	<div className="rounded" style={{ height, boxShadow: '#3399F3 5px 5px 5px' }}>
		<Card className="h-100">
			{body ? (
				<Card.Body className="border-bottom text-center">
					<Card.Title className="text-black-50">{body.title}</Card.Title>
					<Card.Text className="p-1 display-6">{body.text}</Card.Text>
				</Card.Body>
			) : (
				children
			)}
			<Card.Footer className="ms-auto border-0">
				<Card.Link href="#" onClick={onClick}>
					{actionText}
				</Card.Link>
			</Card.Footer>
		</Card>
	</div>
);
