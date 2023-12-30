import { Component, ComponentType } from 'react';
import { AsyncDataLoader } from '../../components/AsyncDataLoader';

export const withAsyncDataLoader = (Comp: ComponentType, errorFallback = 'Something went wrong!') => {
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
