import { lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './layout';
import { ErrorPage } from './pages/error/ErrorPage';

const Home = lazy(() => import('./pages/home'));
const Summary = lazy(() => import('./pages/summary'));
const Transactions = lazy(() => import('./pages/transactions'));
const CategorySettings = lazy(() => import('./pages/settings/CategorySettings'));
const SourceSettings = lazy(() => import('./pages/settings/SourceSettings'));

const router = createHashRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <ErrorPage />,
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
				path: '/transactions',
				element: <Transactions />,
			},
			{
				path: '/settings/categories',
				element: <CategorySettings />,
			},
			{
				path: '/settings/source',
				element: <SourceSettings />,
			},
		],
	},
]);

export const AppRouter = () => <RouterProvider router={router} />;
