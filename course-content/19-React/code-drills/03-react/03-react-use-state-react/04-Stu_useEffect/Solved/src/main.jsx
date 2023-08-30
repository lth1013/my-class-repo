import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import SignUp from "./pages/Signup";
import Search from "./pages/Search";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Search />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/search',
          element: <Search />,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);