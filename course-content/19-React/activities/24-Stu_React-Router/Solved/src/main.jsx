import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
// createBrowserRouter
// https://reactrouter.com/en/main/routers/create-browser-router
// This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.

// RouterProvider
// https://reactrouter.com/en/main/routers/router-provider#routerprovider
// All data router objects are passed to this component to render your app and enable the rest of the data APIs.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    // main layout (wraps the remaining page components)
    element: <App />,
    // https://reactrouter.com/en/main/route/error-element#errorelement
    // When exceptions are thrown in loaders, actions, or component rendering, instead of the normal render path for your Routes (<Route element>), the error path will be rendered (<Route errorElement>) and the error made available with useRouteError.
    errorElement: <ErrorPage />,
    // An array of Route objects with nested routes on the children property.
    children: [
      // https://reactrouter.com/en/main/route/route
      // Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.
      {
        // https://reactrouter.com/en/main/route/route#index
        // Determines if the route is an index route. Index routes render into their parent's
        index: true,
        element: <HomePage />,
      },
      {
        // https://reactrouter.com/en/main/route/route#path
        // The path pattern to match against the URL to determine if this route matches a URL, link href, or form action.
        path: 'profile/:id',
        // https://reactrouter.com/en/main/route/route#elementcomponent
        // The React Element/Component to render when the route matches the URL.
        element: <ProfilePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
