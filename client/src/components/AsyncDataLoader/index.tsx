import { FC, Suspense } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { ErrorBoundary, ErrorBoundaryProps } from './ErrorBoundary';

const DefaultSpinner = <Spin fullscreen indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;

export const AsyncDataLoader: FC<ErrorBoundaryProps> = ({ fallback, errorFallback, children }) => {
	return (
		<Suspense fallback={fallback || DefaultSpinner}>
			<ErrorBoundary fallback={errorFallback}>{children}</ErrorBoundary>
		</Suspense>
	);
};
