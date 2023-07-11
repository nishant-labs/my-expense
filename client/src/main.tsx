import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import App from './App.tsx';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RecoilRoot>
				<ThemeProvider>
					<App />
				</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>
);
