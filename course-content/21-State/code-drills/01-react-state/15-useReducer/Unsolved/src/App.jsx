// TODO: add comments
import { useReducer } from "react";
import "./App.css";

function App() {
  // TODO: add comments
  const [count, dispatch] = useReducer((state, action) => {
    // TODO: add comments
    if (action === "add") {
      return state + 1;
    } else if (action === "subtract" && state > 0) {
      return state - 1;
    } else {
      return state;
    }
    // TODO: add comments
  }, 10);

  return (
    <div className="App">
       {/* TODO: add comments */}
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch("add")}>
        Add
      </button>
      <div>{count}</div>
      {/* TODO: add comments */}
      <button className="btn btn-danger mt-5" onClick={() => dispatch("subtract")}>
        Subtract
      </button>
    </div>
  );
}

export default App;
