import Count from "./components/Count";
import { CountProvider } from "./utils/GlobalState";
import "./App.css";

function App() {
  // Render the CountProvider component to provide global state
  return (
    <CountProvider >
      <div className="App">
        <Count />
      </div>
    </CountProvider>
  );
}

export default App;
