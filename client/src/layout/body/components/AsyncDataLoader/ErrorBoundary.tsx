import { Component, ErrorInfo, ReactNode } from 'react';

export interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
	errorFallback?: ReactNode;
}

interface ErrorBoundaryState {
	error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { error: null };
	}

	static getDerivedStateFromError(error: Error) {
		return { error };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error('Crash:', error, info);
	}

	render() {
		const { children } = this.props;
		const { error } = this.state;

		if (error) {
			const errorMessage = this.props.fallback || 'Oops, something went wrong';
			return <div>{errorMessage}</div>;
		}
		return children;
	}
}
