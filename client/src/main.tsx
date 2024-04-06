import 'bootswatch/dist/spacelab/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { RecoilRoot } from 'recoil';
import RecoilizeDebugger from 'recoilize';
import { MyExpenseAppWithLoader } from './App';
import { QueryProviderWithLoader } from './components/QueryProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<RecoilizeDebugger />
			<ThemeProvider>
				<QueryProviderWithLoader>
					<MyExpenseAppWithLoader />
				</QueryProviderWithLoader>
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
);
