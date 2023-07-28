import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { RecoilRoot } from 'recoil';
import RecoilizeDebugger from 'recoilize';
import { AppRouter } from './router.tsx';
import { SourceSettingsLoader } from './hoc/SourceSettingsLoader';
import { GroupSettingsLoader } from './hoc/GroupSettingsLoader.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<RecoilizeDebugger />
			<ThemeProvider>
				<AppRouter />
				<SourceSettingsLoader />
				<GroupSettingsLoader />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
);
