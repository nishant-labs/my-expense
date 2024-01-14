import { ReactNode } from 'react';

export interface BaseProps {
	height?: string;
	actionText: string;
	onClick: () => void;
}

export interface SummaryTilePropsWithBody extends BaseProps {
	body: { title: string; text: string };
	children?: ReactNode;
}

export interface SummaryTilePropsWithChild extends BaseProps {
	body?: { title: string; text: string };
	children: ReactNode;
}
