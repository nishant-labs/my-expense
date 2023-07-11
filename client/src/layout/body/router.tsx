import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Summary } from './pages/summary';
import { Transactions } from './pages/transactions';
import { Settings } from './pages/settings';

const router = createBrowserRouter([
	{
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
	
]);

export const AppRouter = () => {
	return <RouterProvider router={router} />;
};
