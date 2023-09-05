import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Signup from './pages/Signup';
import Search from './pages/Search';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Search /> },
			{ path: '/signup', element: <Signup /> },
			{ path: '/search', element: <Search /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);
