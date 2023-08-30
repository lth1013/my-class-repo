import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
// createBrowserRouter
// https://reactrouter.com/en/main/routers/create-browser-router
// This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.

// RouterProvider
// https://reactrouter.com/en/main/routers/router-provider#routerprovider
// All data router objects are passed to this component to render your app and enable the rest of the data APIs.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

// Define the accessible routes, and which components respond to which URL
// 🔑 In this case, we have five (5) URLs that our application supports. Four (4) views for each page our navigation supports, and an error page in case the user accesses an invalid URL.

// 🔑 Each of these views will be rendered as a child component of our element .
const router = createBrowserRouter([
  {
    path: '/',
    // main layout (wraps the remaining page components)
    element: <App />,
    // https://reactrouter.com/en/main/route/error-element#errorelement
    // When exceptions are thrown in loaders, actions, or component rendering, instead of the normal render path for your Routes (<Route element>), the error path will be rendered (<Route errorElement>) and the error made available with useRouteError.
    errorElement: <Error />,
    // An array of Route objects with nested routes on the children property.
    children: [
      // https://reactrouter.com/en/main/route/route
      // Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.
      {
        // https://reactrouter.com/en/main/route/route#index
        // Determines if the route is an index route. Index routes render into their parent's
        index: true,
        element: <Home />,
      },
      {
        // https://reactrouter.com/en/main/route/route#path
        // The path pattern to match against the URL to determine if this route matches a URL, link href, or form action.
        path: '/About',
        element: <About />,
      },
      {
        path: '/Blog',
        element: <Blog />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);


// To mount our component onto the DOM, we'll actually render the RouterProvider component, which will hold the state of our browser location -  when the URL matches a certain pattern, a specific page will be shown.
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
