import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Search from './pages/Search';
import './index.css';
import App from './App';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
            { index: true, element: <Search /> }, 
            { path: '/search', element: <Search />},
            { path: '/signup', element: <Signup />}
        ],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
