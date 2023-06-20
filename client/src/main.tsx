import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import App from './App.tsx';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
