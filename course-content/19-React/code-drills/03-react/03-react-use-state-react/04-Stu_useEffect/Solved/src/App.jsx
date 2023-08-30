import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  document.title = "Wikipedia Searcher";
  return (
      <div>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
