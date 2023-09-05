import Count from "./components/Count";
import { CountProvider } from "./utils/GlobalState";
import "./App.css";

function App() {
  // TODO: add comments
  return (
    <CountProvider >
      <div className="App">
        <Count />
      </div>
    </CountProvider>
  );
}

export default App;
