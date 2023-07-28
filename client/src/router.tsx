import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './layout/body/pages/home';
import { Summary } from './layout/body/pages/summary';
import { Transactions } from './layout/body/pages/transactions';
import { Settings } from './layout/body/pages/settings';
import App from './App';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		// errorElement: <ErrorPage />,
		// loader: rootLoader,
		children: [
			{
				index: true,
				path: '/',
				element: <Home />,
			},
			{
				path: '/summary',
				element: <Summary />,
			},
			{
				path: '/manage',
				element: <Transactions />,
			},
			{
				path: '/settings',
				element: <Settings />,
			},
		],
	},
]);

export const AppRouter = () => {
	return <RouterProvider router={router} />;
};
