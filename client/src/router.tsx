import { lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout';

const Home = lazy(() => import('./pages/home'));
const Summary = lazy(() => import('./pages/summary'));
const Transactions = lazy(() => import('./pages/transactions'));
const Settings = lazy(() => import('./pages/settings'));

const router = createHashRouter([
	{
		path: '/',
		element: <RootLayout />,
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

export const AppRouter = () => <RouterProvider router={router} />;
