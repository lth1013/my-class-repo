// import useReducer from react
import { useReducer } from "react";
import "./App.css";

function App() {
  // Use the useReducer hook to manage state with a reducer function
  const [count, dispatch] = useReducer((state, action) => {
    // Check the action type and update state accordingly
    if (action === "add") {
      return state + 1;
    } else if (action === "subtract" && state > 0) {
      return state - 1;
    } else {
      return state;
    }
    // Initial state is set to 10
  }, 10);

  return (
    <div className="App">
      {/* Button to increment the count */}
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch("add")}>
        Add
      </button>
      {/* Display the current count */}
      <div>{count}</div>
      {/* Button to decrement the count */}
      <button className="btn btn-danger mt-5" onClick={() => dispatch("subtract")}>
        Subtract
      </button>
    </div>
  );
}

export default App;
