import { FC, Suspense } from 'react';
import { ErrorBoundary, ErrorBoundaryProps } from './ErrorBoundary';
import { Spinner } from 'react-bootstrap';

export const AsyncDataLoader: FC<ErrorBoundaryProps> = ({
	fallback,
	errorFallback,
	children,
}) => {
	return (
		<Suspense fallback={fallback || <Spinner animation="border"/>}>
			<ErrorBoundary fallback={errorFallback}>{children}</ErrorBoundary>
		</Suspense>
	);
};
