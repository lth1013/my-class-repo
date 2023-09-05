import { useCountContext } from "../utils/GlobalState";

function Count() {
  // Use the custom hook 'useCountContext' to access the count-related context
  const [state, dispatch] = useCountContext();

  return (
    <div className="App">
      {/* Button to increment the count */}
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch({ type: "add" })}>
        Add
      </button>
      {/* Display the current count */}
      <div>{state.count}</div>
      {/* Button to decrement the count */}
      <button className="btn btn-danger mt-5" onClick={() => dispatch({ type: "subtract" })}>
        Subtract
      </button>
    </div>
  );
}

export default Count;