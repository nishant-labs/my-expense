import { Component, ComponentType } from 'react';
import { AsyncDataLoader } from '../../components/AsyncDataLoader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withAsyncDataLoader = (Comp: ComponentType<any>, errorFallback = 'Something went wrong!') => {
	return class extends Component {
		render() {
			return (
				<AsyncDataLoader errorFallback={errorFallback}>
					<Comp {...this.props} />
				</AsyncDataLoader>
			);
		}
	};
};
