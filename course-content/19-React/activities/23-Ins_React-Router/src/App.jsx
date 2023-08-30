// Bringing in the required import from 'react-router-dom'
// At the top of this file, we are bringing in a single dependency from react-router-dom.
// 🔑 This component functions as a sort of placeholder for whichever view should be shown. 
// That means it could be when the path matches "/", or it could be when the path matches "/About", 
// or it could be when the path is unhandled, like "/bananas".


import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
      {/*https://reactrouter.com/en/main/components/outlet*/}
      {/*An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.*/}
        <Outlet />
      </main>
    </>
  );
}

export default App;
