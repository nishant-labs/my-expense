import 'bootswatch/dist/spacelab/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { RecoilRoot } from 'recoil';
import RecoilizeDebugger from 'recoilize';
import { MyExpenseApp } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<RecoilizeDebugger />
			<ThemeProvider>
				<MyExpenseApp />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
);
